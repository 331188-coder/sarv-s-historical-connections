import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LogIn, Save, User, Trophy, Zap } from 'lucide-react';

const ProfilePage = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [stats, setStats] = useState({ totalScore: 0, gamesPlayed: 0, perfectCount: 0 });
  const { toast } = useToast();

  useEffect(() => {
    if (!user) return;
    supabase.from('profiles').select('display_name, avatar_url').eq('id', user.id).single()
      .then(({ data }) => {
        if (data) {
          setDisplayName(data.display_name || '');
          setAvatarUrl(data.avatar_url);
        }
      });
    supabase.from('game_scores').select('score, is_perfect').eq('user_id', user.id)
      .then(({ data }) => {
        if (data) {
          setStats({
            totalScore: data.reduce((s, r) => s + r.score, 0),
            gamesPlayed: data.length,
            perfectCount: data.filter(r => r.is_perfect).length,
          });
        }
      });
  }, [user]);

  const handleGoogleSignIn = async () => {
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (error) console.error('Sign in error:', error);
  };

  const handleSave = async () => {
    if (!user || !displayName.trim()) return;
    setSaving(true);
    const { error } = await supabase.from('profiles').update({ display_name: displayName.trim() }).eq('id', user.id);
    setSaving(false);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update name.', variant: 'destructive' });
    } else {
      toast({ title: 'Saved', description: 'Display name updated on the leaderboard.' });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <p className="text-muted-foreground font-body">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <User className="h-16 w-16 text-muted-foreground mx-auto" />
          <h1 className="font-display text-2xl font-bold text-foreground">Sign In</h1>
          <p className="text-muted-foreground font-body text-sm max-w-sm">
            Sign in with Google to save scores, appear on the leaderboard, and track your progress.
          </p>
          <Button onClick={handleGoogleSignIn} size="lg" className="font-body font-semibold">
            <LogIn className="h-5 w-5 mr-2" />
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Profile</h1>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className="h-16 w-16 rounded-full object-cover border-2 border-primary" />
            ) : (
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-xl font-display font-bold text-muted-foreground border-2 border-primary">
                {displayName?.charAt(0)?.toUpperCase() || '?'}
              </div>
            )}
            <div>
              <p className="font-display text-xl font-bold text-foreground">{displayName || 'Scholar'}</p>
              <p className="text-xs text-muted-foreground font-body">{user.email}</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-body font-medium text-foreground">Display Name (shown on leaderboard)</label>
            <div className="flex gap-2">
              <Input
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                placeholder="Enter your display name"
                className="font-body"
                maxLength={30}
              />
              <Button onClick={handleSave} disabled={saving || !displayName.trim()} className="font-body">
                <Save className="h-4 w-4 mr-1.5" />
                {saving ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Trophy className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="font-display text-2xl font-bold text-foreground">{stats.totalScore.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground font-body">Total PP</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Zap className="h-5 w-5 text-cat-yellow mx-auto mb-1" />
            <p className="font-display text-2xl font-bold text-foreground">{stats.gamesPlayed}</p>
            <p className="text-xs text-muted-foreground font-body">Games</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <span className="text-xl">💎</span>
            <p className="font-display text-2xl font-bold text-foreground">{stats.perfectCount}</p>
            <p className="text-xs text-muted-foreground font-body">Perfect</p>
          </div>
        </div>

        <Button variant="outline" onClick={signOut} className="font-body text-muted-foreground">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
