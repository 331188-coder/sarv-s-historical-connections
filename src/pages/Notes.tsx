import { useState } from 'react';
import { APUSH_PERIODS, AP_WORLD_PERIODS, Period } from '@/lib/notesData';
import { cn } from '@/lib/utils';
import { ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
            Chapter-by-chapter notes organized by AP period. Source: The American Pageant, 17th Edition.
          </p>

          <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mt-4">
            {(['apush', 'apworld'] as const).map(s => (
              <button
                key={s}
                onClick={() => { setSubject(s); setExpandedPeriod(null); }}
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
        </div>

        <div className="space-y-3">
          {periods.map(period => (
            <PeriodCard
              key={`${subject}-${period.id}`}
              period={period}
              isExpanded={expandedPeriod === period.id}
              onToggle={() => setExpandedPeriod(expandedPeriod === period.id ? null : period.id)}
              subject={subject}
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
  subject: string;
}) {
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
              {period.themes.map(t => (
                <Badge key={t} variant="secondary" className="text-xs font-body">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <ChevronRight
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform',
            isExpanded && 'rotate-90'
          )}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-border px-4 pb-4">
          <div className="mt-4">
            <h4 className="text-sm font-body font-semibold text-foreground mb-2">
              Key Topics
            </h4>
            <ul className="space-y-1">
              {period.keyTopics.map((topic, i) => (
                <li key={i} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">--</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {period.chapters.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                Chapters (American Pageant 17e)
              </h4>
              <div className="space-y-1">
                {period.chapters.map(ch => (
                  <a
                    key={ch.number}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <span className="text-foreground font-medium w-16 flex-shrink-0">
                      Ch. {ch.number}
                    </span>
                    <span className="flex-1">{ch.title}</span>
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {subject === 'apworld' && period.chapters.length === 0 && (
            <p className="text-sm text-muted-foreground font-body mt-3 italic">
              AP World chapter links coming soon. Use the key topics above for review.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default NotesPage;
