import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/ingredients';
import type { IngredientCategory } from '@/types/ingredient';
import { 
  Droplets, 
  Blend, 
  Candy, 
  ShieldCheck, 
  Sparkles, 
  Palette, 
  Zap, 
  FlaskConical,
  Layers,
  Anchor,
  Mountain,
  Grid3X3,
  Droplet,
  Atom,
  Pill,
  Gem,
  Dna,
  Fish
} from 'lucide-react';

interface CategoryDirectoryProps {
  selectedCategories: IngredientCategory[];
  onToggleCategory: (category: IngredientCategory) => void;
  ingredientCounts: Record<string, number>;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Hydrocolloids': <Droplets className="h-5 w-5" />,
  'Emulsifiers': <Blend className="h-5 w-5" />,
  'Sweeteners': <Candy className="h-5 w-5" />,
  'Preservatives': <ShieldCheck className="h-5 w-5" />,
  'Antioxidants': <Sparkles className="h-5 w-5" />,
  'Colorants': <Palette className="h-5 w-5" />,
  'Flavor Enhancers': <Zap className="h-5 w-5" />,
  'Acidity Regulators': <FlaskConical className="h-5 w-5" />,
  'Thickeners': <Layers className="h-5 w-5" />,
  'Stabilizers': <Anchor className="h-5 w-5" />,
  'Leavening Agents': <Mountain className="h-5 w-5" />,
  'Anti-caking Agents': <Grid3X3 className="h-5 w-5" />,
  'Humectants': <Droplet className="h-5 w-5" />,
  'Enzymes': <Atom className="h-5 w-5" />,
  'Vitamins': <Pill className="h-5 w-5" />,
  'Minerals': <Gem className="h-5 w-5" />,
  'Amino Acids': <Dna className="h-5 w-5" />,
  'Fatty Acids': <Fish className="h-5 w-5" />,
};

const categoryColors: Record<string, string> = {
  'Hydrocolloids': 'hover:bg-blue-50 hover:border-blue-200',
  'Emulsifiers': 'hover:bg-green-50 hover:border-green-200',
  'Sweeteners': 'hover:bg-pink-50 hover:border-pink-200',
  'Preservatives': 'hover:bg-red-50 hover:border-red-200',
  'Antioxidants': 'hover:bg-orange-50 hover:border-orange-200',
  'Colorants': 'hover:bg-purple-50 hover:border-purple-200',
  'Flavor Enhancers': 'hover:bg-yellow-50 hover:border-yellow-200',
  'Acidity Regulators': 'hover:bg-cyan-50 hover:border-cyan-200',
  'Thickeners': 'hover:bg-indigo-50 hover:border-indigo-200',
  'Stabilizers': 'hover:bg-teal-50 hover:border-teal-200',
  'Leavening Agents': 'hover:bg-amber-50 hover:border-amber-200',
  'Anti-caking Agents': 'hover:bg-gray-50 hover:border-gray-200',
  'Humectants': 'hover:bg-sky-50 hover:border-sky-200',
  'Enzymes': 'hover:bg-lime-50 hover:border-lime-200',
  'Vitamins': 'hover:bg-rose-50 hover:border-rose-200',
  'Minerals': 'hover:bg-stone-50 hover:border-stone-200',
  'Amino Acids': 'hover:bg-violet-50 hover:border-violet-200',
  'Fatty Acids': 'hover:bg-emerald-50 hover:border-emerald-200',
};

export function CategoryDirectory({ selectedCategories, onToggleCategory, ingredientCounts }: CategoryDirectoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Browse by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            const count = ingredientCounts[category] || 0;
            
            return (
              <button
                key={category}
                onClick={() => onToggleCategory(category)}
                className={`
                  relative p-4 rounded-lg border text-left transition-all duration-200
                  ${categoryColors[category] || 'hover:bg-muted'}
                  ${isSelected ? 'ring-2 ring-primary bg-primary/5 border-primary' : 'bg-card'}
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                    {categoryIcons[category]}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
                <p className={`text-sm font-medium line-clamp-2 ${isSelected ? 'text-primary' : ''}`}>
                  {category}
                </p>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
