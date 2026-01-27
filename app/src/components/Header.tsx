import { FlaskConical, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  comparisonCount: number;
  onToggleComparison: () => void;
  onNavigateHome: () => void;
  currentView: 'browse' | 'profile' | 'comparison';
}

export function Header({ comparisonCount, onToggleComparison, onNavigateHome, currentView }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <button 
            onClick={onNavigateHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <FlaskConical className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">INFOTECH</span>
          </button>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-4">
            <Button
              variant={currentView === 'browse' ? 'default' : 'ghost'}
              size="sm"
              onClick={onNavigateHome}
            >
              Browse
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleComparison}
              className="relative"
            >
              <Scale className="h-4 w-4 mr-2" />
              Compare
              {comparisonCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {comparisonCount}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
