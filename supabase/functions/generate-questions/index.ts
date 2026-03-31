import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, period, count = 12, context } = await req.json();

    if (!subject || !period) {
      return new Response(JSON.stringify({ error: "subject and period are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const safeCount = Math.max(8, Math.min(20, Number(count) || 12));
    const contextBlock = context
      ? `
Use this course context while writing the set:
- Key topics: ${(context.keyTopics ?? []).join('; ')}
- Chapter coverage: ${(context.chapters ?? []).join('; ')}`
      : '';

    const systemPrompt = `You are an AP History exam question generator. Generate exactly ${safeCount} multiple-choice questions in the style of the AP ${subject === 'apush' ? 'US History' : 'World History'} exam for the specified time period. Each question should test understanding of major developments, causation, comparison, continuity and change, and period-specific themes.

Return a JSON array of exactly ${safeCount} questions. Each question object must have:
- "question": the question text (include a stimulus or quoted evidence when appropriate)
- "options": array of exactly 4 answer choices labeled A-D
- "correct": the index (0-3) of the correct answer
- "explanation": brief explanation of why the answer is correct
- "theme": the major theme or historical reasoning skill being tested

Do not use emojis. Make questions challenging but fair. Include a mix of factual recall, sourcing, and higher-order analysis. Avoid repetitive answer structures.${contextBlock}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Generate ${safeCount} AP-style multiple choice questions for: ${period}` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_questions",
              description: "Return the generated AP-style questions",
              parameters: {
                type: "object",
                properties: {
                  questions: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        question: { type: "string" },
                        options: {
                          type: "array",
                          items: { type: "string" },
                          minItems: 4,
                          maxItems: 4,
                        },
                        correct: { type: "number" },
                        explanation: { type: "string" },
                        theme: { type: "string" },
                      },
                      required: ["question", "options", "correct", "explanation", "theme"],
                      additionalProperties: false,
                    },
                    minItems: safeCount,
                    maxItems: safeCount,
                  },
                },
                required: ["questions"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "return_questions" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const text = await response.text();
      console.error("AI error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];

    if (toolCall?.function?.arguments) {
      const parsed = JSON.parse(toolCall.function.arguments);
      return new Response(JSON.stringify(parsed), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Failed to generate questions" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("questions error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
