import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Scale, Wheat, Leaf, AlertTriangle } from 'lucide-react';
import type { Ingredient } from '@/types/ingredient';
import { cn } from '@/lib/utils';

interface IngredientCardProps {
  ingredient: Ingredient;
  isInComparison: boolean;
  canAddToComparison: boolean;
  onViewDetails: (ingredient: Ingredient) => void;
  onAddToComparison: (ingredient: Ingredient) => void;
}

export function IngredientCard({
  ingredient,
  isInComparison,
  canAddToComparison,
  onViewDetails,
  onAddToComparison,
}: IngredientCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Hydrocolloids': 'bg-blue-100 text-blue-800',
      'Emulsifiers': 'bg-green-100 text-green-800',
      'Sweeteners': 'bg-pink-100 text-pink-800',
      'Preservatives': 'bg-red-100 text-red-800',
      'Antioxidants': 'bg-orange-100 text-orange-800',
      'Colorants': 'bg-purple-100 text-purple-800',
      'Flavor Enhancers': 'bg-yellow-100 text-yellow-800',
      'Acidity Regulators': 'bg-cyan-100 text-cyan-800',
      'Thickeners': 'bg-indigo-100 text-indigo-800',
      'Stabilizers': 'bg-teal-100 text-teal-800',
      'Leavening Agents': 'bg-amber-100 text-amber-800',
      'Anti-caking Agents': 'bg-gray-100 text-gray-800',
      'Humectants': 'bg-sky-100 text-sky-800',
      'Enzymes': 'bg-lime-100 text-lime-800',
      'Vitamins': 'bg-rose-100 text-rose-800',
      'Minerals': 'bg-stone-100 text-stone-800',
      'Amino Acids': 'bg-violet-100 text-violet-800',
      'Fatty Acids': 'bg-emerald-100 text-emerald-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => onViewDetails(ingredient)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className={cn('text-xs font-medium', getCategoryColor(ingredient.category))}>
                {ingredient.category}
              </Badge>
              {ingredient.eNumber && (
                <Badge variant="outline" className="text-xs">
                  {ingredient.eNumber}
                </Badge>
              )}
            </div>
            <h3 className="mt-2 font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {ingredient.name}
            </h3>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* CAS Number */}
          {ingredient.casNumber && (
            <p className="text-xs text-muted-foreground">
              CAS: {ingredient.casNumber}
            </p>
          )}
          
          {/* Property Icons */}
          <div className="flex items-center gap-2 flex-wrap">
            {ingredient.isGlutenFree && (
              <div className="flex items-center gap-1 text-xs text-green-600" title="Gluten-free">
                <Wheat className="h-3 w-3" />
                <span>GF</span>
              </div>
            )}
            {ingredient.isVegan && (
              <div className="flex items-center gap-1 text-xs text-green-600" title="Vegan">
                <Leaf className="h-3 w-3" />
                <span>Vegan</span>
              </div>
            )}
            {ingredient.allergens.length > 0 && (
              <div className="flex items-center gap-1 text-xs text-amber-600" title="Contains allergens">
                <AlertTriangle className="h-3 w-3" />
                <span>Allergens</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(ingredient);
              }}
            >
              View Details
            </Button>
            <Button
              variant={isInComparison ? 'secondary' : 'outline'}
              size="sm"
              className="px-2"
              disabled={!canAddToComparison && !isInComparison}
              onClick={(e) => {
                e.stopPropagation();
                onAddToComparison(ingredient);
              }}
            >
              {isInComparison ? (
                <Check className="h-4 w-4" />
              ) : (
                <Scale className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
