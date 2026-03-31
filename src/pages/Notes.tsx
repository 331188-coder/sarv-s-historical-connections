import { useMemo, useState } from 'react';
import { APUSH_PERIODS, AP_WORLD_PERIODS, Period } from '@/lib/notesData';
import { cn } from '@/lib/utils';
import { ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function buildOverview(period: Period, subject: 'apush' | 'apworld') {
  const first = period.keyTopics[0] ?? 'major developments';
  const second = period.keyTopics[1] ?? 'important historical patterns';
  return subject === 'apush'
    ? `This period centers on ${first.toLowerCase()} and ${second.toLowerCase()}, with emphasis on continuity, change, and historical argumentation.`
    : `This unit emphasizes ${first.toLowerCase()} and ${second.toLowerCase()}, with close attention to comparison, causation, and global connections.`;
}

function buildConcepts(period: Period) {
  return period.keyTopics.slice(0, 4).map((topic) => `${topic} should be treated as a core concept for period review and evidence-based writing.`);
}

const NotesPage = () => {
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const [expandedPeriod, setExpandedPeriod] = useState<number | null>(null);
  const periods = subject === 'apush' ? APUSH_PERIODS : AP_WORLD_PERIODS;

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground tracking-tight">
            Notes
          </h1>
          <p className="text-muted-foreground font-body mt-1 text-sm">
            In-depth period guides with chapter pages, review structure, and key concepts.
          </p>

          <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mt-4">
            {(['apush', 'apworld'] as const).map((value) => (
              <button
                key={value}
                onClick={() => {
                  setSubject(value);
                  setExpandedPeriod(null);
                }}
                className={cn(
                  'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                  subject === value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {value === 'apush' ? 'APUSH' : 'AP World'}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs font-body uppercase tracking-[0.2em] text-muted-foreground">
            Source: {subject === 'apush' ? 'American Pageant 17e' : 'Doves Library AP World History'}
          </p>
        </div>

        <div className="space-y-3">
          {periods.map((period) => (
            <PeriodCard
              key={`${subject}-${period.id}`}
              period={period}
              subject={subject}
              isExpanded={expandedPeriod === period.id}
              onToggle={() => setExpandedPeriod(expandedPeriod === period.id ? null : period.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function PeriodCard({
  period,
  isExpanded,
  onToggle,
  subject,
}: {
  period: Period;
  isExpanded: boolean;
  onToggle: () => void;
  subject: 'apush' | 'apworld';
}) {
  const overview = useMemo(() => buildOverview(period, subject), [period, subject]);
  const keyConcepts = useMemo(() => buildConcepts(period), [period]);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {period.name}: {period.years}
            </h3>
            <div className="flex gap-1.5 mt-1 flex-wrap">
              {period.themes.map((theme) => (
                <Badge key={theme} variant="secondary" className="text-xs font-body">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <ChevronRight
          className={cn('h-5 w-5 text-muted-foreground transition-transform', isExpanded && 'rotate-90')}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-border px-4 pb-4">
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-border bg-secondary/20 p-4">
              <h4 className="text-sm font-body font-semibold text-foreground mb-2 uppercase tracking-[0.18em]">
                Period Overview
              </h4>
              <p className="text-sm font-body leading-relaxed text-muted-foreground">{overview}</p>

              <div className="mt-4">
                <h5 className="text-sm font-body font-semibold text-foreground mb-2">Key Topics</h5>
                <ul className="space-y-2">
                  {period.keyTopics.map((topic, index) => (
                    <li key={index} className="text-sm text-muted-foreground font-body flex items-start gap-2 leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4">
              <h4 className="text-sm font-body font-semibold text-foreground mb-2 uppercase tracking-[0.18em]">
                Key Concepts
              </h4>
              <div className="space-y-2">
                {keyConcepts.map((concept, index) => (
                  <div key={index} className="rounded-xl border border-border bg-secondary/20 px-3 py-2">
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{concept}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-body font-semibold text-foreground mb-2 uppercase tracking-[0.18em]">
              Chapter Pages
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {period.chapters.map((chapter) => (
                <a
                  key={chapter.number}
                  href={chapter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/20 px-3 py-3 text-sm font-body text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <span className="text-foreground font-medium w-16 flex-shrink-0">Ch. {chapter.number}</span>
                  <span className="flex-1 leading-snug">{chapter.title}</span>
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesPage;
