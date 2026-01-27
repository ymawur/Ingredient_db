import { Button } from '@/components/ui/button';
import { Check, Shield, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickFiltersProps {
  isGRAS: boolean;
  isChinaCompliant: boolean;
  isEUApproved: boolean;
  onToggleGRAS: () => void;
  onToggleChina: () => void;
  onToggleEU: () => void;
}

export function QuickFilters({
  isGRAS,
  isChinaCompliant,
  isEUApproved,
  onToggleGRAS,
  onToggleChina,
  onToggleEU,
}: QuickFiltersProps) {
  const filters = [
    {
      id: 'gras',
      label: 'GRAS Ingredients',
      active: isGRAS,
      onClick: onToggleGRAS,
      icon: Check,
      description: 'FDA Generally Recognized as Safe',
    },
    {
      id: 'china',
      label: 'China GB Compliant',
      active: isChinaCompliant,
      onClick: onToggleChina,
      icon: Globe,
      description: 'Compliant with China GB standards',
    },
    {
      id: 'eu',
      label: 'EU Approved',
      active: isEUApproved,
      onClick: onToggleEU,
      icon: Shield,
      description: 'Approved for use in European Union',
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={filter.active ? 'default' : 'outline'}
          size="sm"
          onClick={filter.onClick}
          className={cn(
            'transition-all duration-200',
            filter.active && 'shadow-sm'
          )}
          title={filter.description}
        >
          <filter.icon className="h-3.5 w-3.5 mr-1.5" />
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
