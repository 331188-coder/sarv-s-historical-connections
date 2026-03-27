import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { Trophy, Medal, Crown, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { lovable } from '@/integrations/lovable/index';

interface LeaderboardEntry {
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  total_score: number;
  games_played: number;
  perfect_count: number;
}

const LeaderboardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, [subject]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    const { data: scores } = await supabase
      .from('game_scores')
      .select('user_id, score, is_perfect')
      .eq('subject', subject)
      .order('score', { ascending: false });

    if (!scores || scores.length === 0) {
      setEntries([]);
      setLoading(false);
      return;
    }

    // Aggregate by user
    const userMap = new Map<string, { total_score: number; games_played: number; perfect_count: number }>();
    for (const s of scores) {
      const existing = userMap.get(s.user_id) || { total_score: 0, games_played: 0, perfect_count: 0 };
      existing.total_score += s.score;
      existing.games_played += 1;
      if (s.is_perfect) existing.perfect_count += 1;
      userMap.set(s.user_id, existing);
    }

    const userIds = [...userMap.keys()];
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, avatar_url')
      .in('id', userIds);

    const profileMap = new Map((profiles || []).map(p => [p.id, p]));

    const result: LeaderboardEntry[] = userIds.map(uid => {
      const stats = userMap.get(uid)!;
      const profile = profileMap.get(uid);
      return {
        user_id: uid,
        display_name: profile?.display_name || 'Unknown Scholar',
        avatar_url: profile?.avatar_url || null,
        ...stats,
      };
    });

    result.sort((a, b) => b.total_score - a.total_score);
    setEntries(result.slice(0, 50));
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (error) console.error('Sign in error:', error);
  };

  const rankIcon = (i: number) => {
    if (i === 0) return <Crown className="h-5 w-5 text-cat-yellow" />;
    if (i === 1) return <Medal className="h-5 w-5 text-secondary-foreground" />;
    if (i === 2) return <Medal className="h-5 w-5 text-accent" />;
    return <span className="text-sm text-muted-foreground font-body w-5 text-center">{i + 1}</span>;
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
              <Trophy className="h-7 w-7 text-primary" />
              The Hall of Five
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Top scholars ranked by Prestige Points
            </p>
          </div>
          {!authLoading && !user && (
            <Button onClick={handleGoogleSignIn} variant="outline" className="font-body">
              <LogIn className="h-4 w-4 mr-2" />
              Sign in with Google
            </Button>
          )}
        </div>

        <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mt-4 mb-6">
          {(['apush', 'apworld'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={cn(
                'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                subject === s ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {s === 'apush' ? 'APUSH' : 'AP World'}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground font-body">Loading rankings...</div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-body">No scores yet. Be the first to play!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map((entry, i) => (
              <div
                key={entry.user_id}
                className={cn(
                  'flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3',
                  user?.id === entry.user_id && 'border-primary/50 bg-primary/5'
                )}
              >
                <div className="w-8 flex justify-center">{rankIcon(i)}</div>
                {entry.avatar_url ? (
                  <img src={entry.avatar_url} alt="" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-body font-bold text-muted-foreground">
                    {entry.display_name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-foreground text-sm truncate">
                    {entry.display_name}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {entry.games_played} games · {entry.perfect_count} perfect
                  </p>
                </div>
                <span className="font-display text-lg font-bold text-primary">
                  {entry.total_score.toLocaleString()} PP
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
