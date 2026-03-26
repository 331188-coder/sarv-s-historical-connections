import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Nexus', path: '/' },
  { label: 'Notes', path: '/notes' },
  { label: 'Questions', path: '/questions' },
  { label: 'Scribe', path: '/scribe' },
  { label: 'Leaderboard', path: '/leaderboard' },
];

export function AppHeader() {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14 max-w-5xl mx-auto px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Studious Sarv" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            Studious Sarv
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-body font-medium transition-colors',
                location.pathname === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
