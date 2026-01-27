import type { Ingredient } from '@/types/ingredient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ArrowLeft,
  X,
  Replace,
  Download,
  Check,
  XCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ingredients } from '@/data/ingredients';
import { exportBulkToCSV } from '@/lib/export';
import { cn } from '@/lib/utils';

interface ComparisonViewProps {
  comparisonIngredients: Ingredient[];
  onBack: () => void;
  onRemove: (id: string) => void;
  onReplace: (oldId: string, newId: string) => void;
  onClear: () => void;
}

export function ComparisonView({
  comparisonIngredients,
  onBack,
  onRemove,
  onReplace,
  onClear,
}: ComparisonViewProps) {
  const handleExport = () => {
    exportBulkToCSV(comparisonIngredients);
  };

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

  if (comparisonIngredients.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">⚖️</div>
          <h2 className="text-2xl font-bold mb-2">No Ingredients to Compare</h2>
          <p className="text-muted-foreground max-w-md mb-6">
            Add ingredients to your comparison list to see them side-by-side.
          </p>
          <Button onClick={onBack}>Browse Ingredients</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Ingredient Comparison</h1>
          <Badge variant="secondary">{comparisonIngredients.length}/3</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="destructive" size="sm" onClick={onClear}>
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Comparison Table */}
      <ScrollArea className="w-full">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${comparisonIngredients.length}, 1fr)` }}>
            <div className="font-semibold text-muted-foreground p-4">Property</div>
            {comparisonIngredients.map((ing) => (
              <div key={ing.id} className="relative p-4 bg-muted/50 rounded-t-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0"
                  onClick={() => onRemove(ing.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="space-y-2">
                  <Badge className={getCategoryColor(ing.category)}>{ing.category}</Badge>
                  <h3 className="font-semibold">{ing.name}</h3>
                  <p className="text-sm text-muted-foreground">{ing.nameCN}</p>
                  {ing.eNumber && (
                    <Badge variant="outline" className="text-xs">
                      {ing.eNumber}
                    </Badge>
                  )}
                </div>
                <div className="mt-3">
                  <Select
                    value={ing.id}
                    onValueChange={(newId) => {
                      if (newId !== ing.id) {
                        onReplace(ing.id, newId);
                      }
                    }}
                  >
                    <SelectTrigger className="w-full text-xs">
                      <Replace className="h-3 w-3 mr-2" />
                      <SelectValue placeholder="Replace..." />
                    </SelectTrigger>
                    <SelectContent>
                      {ingredients
                        .filter(i => !comparisonIngredients.some(ci => ci.id === i.id))
                        .map(i => (
                          <SelectItem key={i.id} value={i.id}>
                            {i.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>

          {/* Basic Info */}
          <ComparisonRow
            label="CAS Number"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.casNumber || 'N/A'}
          />
          <ComparisonRow
            label="Category"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.category}
          />
          <ComparisonRow
            label="Subcategory"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.subcategory || 'N/A'}
          />

          <div className="my-2 border-t" />

          {/* Properties */}
          <ComparisonRow
            label="Gluten Free"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.isGlutenFree} />
            )}
          />
          <ComparisonRow
            label="Vegan"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.isVegan} />
            )}
          />
          <ComparisonRow
            label="Natural"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.isNatural} />
            )}
          />
          <ComparisonRow
            label="Synthetic"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.isSynthetic} />
            )}
          />

          <div className="my-2 border-t" />

          {/* Nutritional */}
          <ComparisonRow
            label="Energy (kcal/100g)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.nutritional?.energy?.toString() || 'N/A'}
            compareNumeric
          />
          <ComparisonRow
            label="Protein (g/100g)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.nutritional?.protein?.toString() || 'N/A'}
            compareNumeric
          />
          <ComparisonRow
            label="Carbs (g/100g)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.nutritional?.carbs?.toString() || 'N/A'}
            compareNumeric
          />
          <ComparisonRow
            label="Fat (g/100g)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.nutritional?.fat?.toString() || 'N/A'}
            compareNumeric
          />

          <div className="my-2 border-t" />

          {/* Physicochemical */}
          <ComparisonRow
            label="Water Activity (aw)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.physicochemical?.waterActivity?.toFixed(2) || 'N/A'}
            compareNumeric
            lowerIsBetter
          />
          <ComparisonRow
            label="pH"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.physicochemical?.pH?.toFixed(1) || 'N/A'}
            compareNumeric
          />
          <ComparisonRow
            label="Density (g/cm³)"
            ingredients={comparisonIngredients}
            renderValue={(ing) => ing.physicochemical?.density?.toString() || 'N/A'}
            compareNumeric
          />

          <div className="my-2 border-t" />

          {/* Regulatory */}
          <ComparisonRow
            label="EU Approved"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.regulatory.eu?.approved} />
            )}
          />
          <ComparisonRow
            label="FDA GRAS"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.regulatory.fda?.gras} />
            )}
          />
          <ComparisonRow
            label="China Compliant"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              <BooleanBadge value={ing.regulatory.china?.compliant} />
            )}
          />

          <div className="my-2 border-t" />

          {/* Allergens */}
          <ComparisonRow
            label="Allergens"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              ing.allergens.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {ing.allergens.map((a, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {a.name}
                    </Badge>
                  ))}
                </div>
              ) : (
                <span className="text-muted-foreground text-sm">None</span>
              )
            )}
          />

          {/* Common Uses */}
          <ComparisonRow
            label="Common Uses"
            ingredients={comparisonIngredients}
            renderValue={(ing) => (
              ing.commonUses && ing.commonUses.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {ing.commonUses.slice(0, 3).map((use, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {use}
                    </Badge>
                  ))}
                  {ing.commonUses.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{ing.commonUses.length - 3}</span>
                  )}
                </div>
              ) : (
                <span className="text-muted-foreground text-sm">N/A</span>
              )
            )}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

interface ComparisonRowProps {
  label: string;
  ingredients: Ingredient[];
  renderValue: (ingredient: Ingredient) => React.ReactNode;
  compareNumeric?: boolean;
  lowerIsBetter?: boolean;
}

function ComparisonRow({ label, ingredients, renderValue, compareNumeric, lowerIsBetter }: ComparisonRowProps) {
  const values = ingredients.map(renderValue);
  
  // Determine best value for numeric comparison
  let bestIndex = -1;
  if (compareNumeric && ingredients.length > 1) {
    const numericValues = ingredients.map(ing => {
      const val = renderValue(ing);
      if (typeof val === 'string') {
        const num = parseFloat(val);
        return isNaN(num) ? null : num;
      }
      return null;
    });
    
    const validValues = numericValues.filter(v => v !== null) as number[];
    if (validValues.length > 0) {
      const bestValue = lowerIsBetter ? Math.min(...validValues) : Math.max(...validValues);
      bestIndex = numericValues.findIndex(v => v === bestValue);
    }
  }

  return (
    <div 
      className="grid gap-4 py-3 border-b hover:bg-muted/30 transition-colors" 
      style={{ gridTemplateColumns: `200px repeat(${ingredients.length}, 1fr)` }}
    >
      <div className="font-medium text-sm text-muted-foreground px-4 flex items-center">
        {label}
      </div>
      {values.map((value, index) => (
        <div 
          key={index} 
          className={cn(
            "px-4",
            compareNumeric && index === bestIndex && "bg-green-50"
          )}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

function BooleanBadge({ value }: { value: boolean | undefined }) {
  if (value === undefined) {
    return <span className="text-muted-foreground text-sm">N/A</span>;
  }
  return value ? (
    <div className="flex items-center gap-1 text-green-600">
      <Check className="h-4 w-4" />
      <span className="text-sm">Yes</span>
    </div>
  ) : (
    <div className="flex items-center gap-1 text-red-600">
      <XCircle className="h-4 w-4" />
      <span className="text-sm">No</span>
    </div>
  );
}
