import { useState } from 'react';
import { cn } from '@/lib/utils';
import { APUSH_PERIODS, AP_WORLD_PERIODS } from '@/lib/notesData';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  theme: string;
}

const QuestionsPage = () => {
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const { toast } = useToast();

  const periods = subject === 'apush' ? APUSH_PERIODS : AP_WORLD_PERIODS;

  const generateQuestions = async (periodName: string) => {
    setLoading(true);
    setSelectedPeriod(periodName);
    setQuestions([]);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setQuizComplete(false);

    try {
      const { data, error } = await supabase.functions.invoke('generate-questions', {
        body: { subject, period: periodName },
      });

      if (error) throw error;
      if (data?.questions) {
        setQuestions(data.questions);
      } else {
        throw new Error('No questions returned');
      }
    } catch (e: any) {
      console.error('Error generating questions:', e);
      toast({
        title: 'Error',
        description: e?.message || 'Failed to generate questions. Try again.',
        variant: 'destructive',
      });
      setSelectedPeriod(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === questions[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= questions.length) {
      setQuizComplete(true);
    } else {
      setCurrentQ(c => c + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const resetQuiz = () => {
    setSelectedPeriod(null);
    setQuestions([]);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  // Period selection view
  if (!selectedPeriod) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <h1 className="font-display text-3xl font-bold text-foreground tracking-tight">
            Questions
          </h1>
          <p className="text-muted-foreground font-body mt-1 text-sm mb-4">
            AI-generated AP-style multiple choice questions. Select a period to begin.
          </p>

          <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mb-6">
            {(['apush', 'apworld'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={cn(
                  'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                  subject === s
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {s === 'apush' ? 'APUSH' : 'AP World'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {periods.map(p => (
              <button
                key={`${subject}-${p.id}`}
                onClick={() => generateQuestions(`${p.name}: ${p.years}`)}
                className="bg-card border border-border rounded-lg p-4 text-left hover:border-primary/50 hover:bg-secondary/30 transition-all group"
              >
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-muted-foreground font-body mt-0.5">{p.years}</p>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {p.themes.slice(0, 3).map(t => (
                    <Badge key={t} variant="secondary" className="text-xs font-body">
                      {t}
                    </Badge>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Loading
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
          <p className="text-muted-foreground font-body text-sm">
            Generating questions for {selectedPeriod}...
          </p>
        </div>
      </div>
    );
  }

  // Quiz complete
  if (quizComplete) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Quiz Complete
          </h2>
          <p className="text-muted-foreground font-body mb-1">{selectedPeriod}</p>
          <div className="my-8">
            <span className="font-display text-5xl font-bold text-primary">
              {score}/{questions.length}
            </span>
            <p className="text-muted-foreground font-body mt-2 text-sm">
              {score === questions.length
                ? 'Perfect score. You are ready for the exam.'
                : score >= questions.length * 0.6
                ? 'Solid work. Review the explanations for missed questions.'
                : 'Keep studying. Review the period notes and try again.'}
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={resetQuiz} className="font-body">
              Choose Another Period
            </Button>
            <Button onClick={() => generateQuestions(selectedPeriod)} className="font-body">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Active question
  const q = questions[currentQ];
  if (!q) return null;

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={resetQuiz} className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
            Exit
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-body">
              {currentQ + 1} / {questions.length}
            </span>
            <Badge variant="secondary" className="text-xs font-body">{q.theme}</Badge>
          </div>
        </div>

        <div className="w-full bg-secondary rounded-full h-1 mb-8">
          <div
            className="bg-primary h-1 rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="mb-6">
          <h2 className="font-body text-base text-foreground leading-relaxed">
            {q.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-2.5 mb-6">
          {q.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const isCorrect = i === q.correct;
            const isSelected = i === selectedAnswer;

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg border font-body text-sm transition-all',
                  !answered && 'border-border hover:border-primary/50 hover:bg-secondary/30',
                  answered && isCorrect && 'border-cat-green bg-cat-green/10 text-foreground',
                  answered && isSelected && !isCorrect && 'border-destructive bg-destructive/10 text-foreground',
                  answered && !isSelected && !isCorrect && 'border-border opacity-50',
                )}
              >
                <span className="font-medium mr-2">{letter}.</span>
                {opt}
                {answered && isCorrect && (
                  <CheckCircle2 className="inline h-4 w-4 ml-2 text-cat-green" />
                )}
                {answered && isSelected && !isCorrect && (
                  <XCircle className="inline h-4 w-4 ml-2 text-destructive" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
            <p className="text-sm font-body text-muted-foreground">
              {q.explanation}
            </p>
          </div>
        )}

        {answered && (
          <div className="flex justify-end">
            <Button onClick={nextQuestion} className="font-body">
              {currentQ + 1 >= questions.length ? 'See Results' : 'Next'}
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
