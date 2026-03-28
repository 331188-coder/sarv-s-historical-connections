import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an expert AP History essay grader. You evaluate full essays (DBQ, LEQ, SAQ) based on the official College Board AP rubric.

When grading an essay, evaluate it on these criteria:

**For DBQ (Document-Based Question) — 7 points total:**
1. THESIS/CLAIM (0-1): Historically defensible claim that establishes a line of reasoning.
2. CONTEXTUALIZATION (0-1): Situates the argument within broader historical context.
3. EVIDENCE (0-3): 
   - Using Documents (0-2): Uses content of at least 3 documents (1pt) or supports argument with at least 4 documents (2pt).
   - Evidence Beyond the Documents (0-1): Uses at least one piece of specific evidence not in the documents.
4. ANALYSIS & REASONING (0-2):
   - Sourcing (0-1): Explains how or why a document's point of view, purpose, historical situation, or audience is relevant.
   - Complex Understanding (0-1): Demonstrates complex understanding of the historical development.

**For LEQ (Long Essay Question) — 6 points total:**
1. THESIS/CLAIM (0-1): Historically defensible claim with a line of reasoning.
2. CONTEXTUALIZATION (0-1): Broader historical context.
3. EVIDENCE (0-2): Specific examples supporting the argument.
4. ANALYSIS & REASONING (0-2): Historical reasoning (comparison, causation, CCOT) and complex understanding.

**For SAQ (Short Answer Question) — 3 points total:**
- 1 point per part (a, b, c) for historically accurate and relevant responses.

Provide:
- The essay type detected (DBQ, LEQ, or SAQ)
- A score breakdown by criterion
- Specific feedback on each criterion with quotes from the essay
- Strengths and weaknesses
- A revised version of the weakest paragraph
- Actionable tips for improvement

Keep feedback constructive, specific, and educational. Use clear headings and formatting. Do not use emojis.`;

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY)
      throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add funds." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("scribe error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
