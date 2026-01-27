import type { Ingredient } from '@/types/ingredient';
import { IngredientCard } from './IngredientCard';
import { Button } from '@/components/ui/button';
import { Download, FileSpreadsheet } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { exportBulkToCSV } from '@/lib/export';

interface IngredientGridProps {
  ingredients: Ingredient[];
  comparisonList: string[];
  canAddToComparison: boolean;
  onViewDetails: (ingredient: Ingredient) => void;
  onAddToComparison: (ingredient: Ingredient) => void;
}

export function IngredientGrid({
  ingredients,
  comparisonList,
  canAddToComparison,
  onViewDetails,
  onAddToComparison,
}: IngredientGridProps) {
  const handleBulkExport = () => {
    exportBulkToCSV(ingredients);
  };

  if (ingredients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold mb-2">No ingredients found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your filters or search query to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {ingredients.length} ingredient{ingredients.length !== 1 ? 's' : ''}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleBulkExport}>
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ingredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            isInComparison={comparisonList.includes(ingredient.id)}
            canAddToComparison={canAddToComparison || comparisonList.includes(ingredient.id)}
            onViewDetails={onViewDetails}
            onAddToComparison={onAddToComparison}
          />
        ))}
      </div>
    </div>
  );
}
