import { SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import type { FilterState, IngredientCategory } from '@/types/ingredient';
import { categories } from '@/data/ingredients';
import { useState } from 'react';

interface FilterPanelProps {
  filters: FilterState;
  activeFiltersCount: number;
  onToggleCategory: (category: IngredientCategory) => void;
  onToggleFilter: (key: 'isGlutenFree' | 'isVegan') => void;
  onSetpHRange: (range: [number, number]) => void;
  onSetWaterActivityRange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

export function FilterPanel({
  filters,
  activeFiltersCount,
  onToggleCategory,
  onToggleFilter,
  onSetpHRange,
  onSetWaterActivityRange,
  onClearFilters,
}: FilterPanelProps) {
  // Filter panel state is managed by Collapsible components
  const [pHOpen, setpHOpen] = useState(false);
  const [awOpen, setAwOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [propertiesOpen, setPropertiesOpen] = useState(true);

  return (
    <div className="w-full lg:w-64 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <h3 className="font-semibold">Filters</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="h-8 text-xs">
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <ScrollArea className="h-auto lg:h-[calc(100vh-200px)]">
        <div className="space-y-4 pr-4">
          {/* Categories */}
          <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:underline">
              Categories
              {categoriesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2 pt-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => onToggleCategory(category)}
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Properties */}
          <Collapsible open={propertiesOpen} onOpenChange={setPropertiesOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:underline">
              Properties
              {propertiesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gluten-free"
                    checked={filters.isGlutenFree}
                    onCheckedChange={() => onToggleFilter('isGlutenFree')}
                  />
                  <Label htmlFor="gluten-free" className="text-sm cursor-pointer">
                    Gluten-free
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegan"
                    checked={filters.isVegan}
                    onCheckedChange={() => onToggleFilter('isVegan')}
                  />
                  <Label htmlFor="vegan" className="text-sm cursor-pointer">
                    Vegan
                  </Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* pH Range */}
          <Collapsible open={pHOpen} onOpenChange={setpHOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:underline">
              pH Range
              {pHOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-4 px-2">
                <Slider
                  value={filters.pHRange}
                  min={0}
                  max={14}
                  step={0.5}
                  onValueChange={(value) => onSetpHRange(value as [number, number])}
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>pH {filters.pHRange[0]}</span>
                  <span>pH {filters.pHRange[1]}</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Water Activity */}
          <Collapsible open={awOpen} onOpenChange={setAwOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:underline">
              Water Activity
              {awOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-4 px-2">
                <Slider
                  value={filters.waterActivityRange}
                  min={0}
                  max={1}
                  step={0.05}
                  onValueChange={(value) => onSetWaterActivityRange(value as [number, number])}
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>aw {filters.waterActivityRange[0].toFixed(2)}</span>
                  <span>aw {filters.waterActivityRange[1].toFixed(2)}</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>
    </div>
  );
}
