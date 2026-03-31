import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { AppHeader } from "@/components/AppHeader";
import Index from "./pages/Index.tsx";
import Notes from "./pages/Notes.tsx";
import Questions from "./pages/Questions.tsx";
import Scribe from "./pages/Scribe.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Profile from "./pages/Profile.tsx";
import Talon from "./pages/Talon.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <AppHeader />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/talon" element={<Talon />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/scribe" element={<Scribe />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <footer className="border-t border-border bg-background/95">
              <div className="container max-w-5xl mx-auto px-4 py-5 flex justify-center">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-body font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  About Me
                </a>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
