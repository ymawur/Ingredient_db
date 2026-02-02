import { useMemo, useState } from 'react';
import type { Ingredient } from '@/types/ingredient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  ArrowLeft,
  Scale,
  Check,
  Download,
  FileJson,
  FileSpreadsheet,
  Wheat,
  Leaf,
  Activity,
  Beaker,
  FlaskConical,
  Utensils,
} from 'lucide-react';
import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { exportToJSON, exportToCSV } from '@/lib/export';
import { cn } from '@/lib/utils';

interface IngredientProfileProps {
  ingredient: Ingredient;
  isInComparison: boolean;
  canAddToComparison: boolean;
  onBack: () => void;
  onAddToComparison: () => void;
}

export function IngredientProfile({
  ingredient,
  isInComparison,
  canAddToComparison,
  onBack,
  onAddToComparison,
}: IngredientProfileProps) {
  const [activeTab, setActiveTab] = useState('compositions');

  const handleExportJSON = () => exportToJSON(ingredient);
  const handleExportCSV = () => exportToCSV(ingredient);

  const viscosityCurve = useMemo(() => {
    const baseViscosity = ingredient.technoFunctionalities?.viscosity;
    if (!baseViscosity) {
      return [];
    }
    const shearRates = [
      1, 2, 3, 5, 8,
      12, 18, 25, 40, 60,
      85, 120, 200, 400, 800,
    ];
    return shearRates.map((shearRate) => ({
      shearRate,
      viscosity: Number((baseViscosity * Math.pow(shearRate, -0.12)).toFixed(1)),
    }));
  }, [ingredient.technoFunctionalities?.viscosity]);

  const viscosityChartConfig = {
    viscosity: {
      label: 'Viscosity',
      color: 'hsl(var(--chart-1))',
    },
  };

  const hasViscosityCurve = viscosityCurve.length > 0;

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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={getCategoryColor(ingredient.category)}>
                {ingredient.category}
              </Badge>
              {ingredient.subcategory && (
                <Badge variant="outline">{ingredient.subcategory}</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportJSON}>
                <FileJson className="h-4 w-4 mr-2" />
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportCSV}>
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Export as CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={isInComparison ? 'secondary' : 'default'}
            size="sm"
            onClick={onAddToComparison}
            disabled={!canAddToComparison && !isInComparison}
          >
            {isInComparison ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                In Comparison
              </>
            ) : (
              <>
                <Scale className="h-4 w-4 mr-2" />
                Add to Compare
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Title Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{ingredient.name}</h1>
        <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
          {ingredient.eNumber && (
            <span className="flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              {ingredient.eNumber}
            </span>
          )}
          {ingredient.casNumber && (
            <span className="flex items-center gap-1">
              <FlaskConical className="h-4 w-4" />
              CAS: {ingredient.casNumber}
            </span>
          )}
        </div>
        {ingredient.description && (
          <p className="text-muted-foreground max-w-3xl">{ingredient.description}</p>
        )}
      </div>

      {/* Property Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        {ingredient.isGlutenFree && (
          <Badge variant="outline" className="gap-1">
            <Wheat className="h-3 w-3" />
            Gluten-free
          </Badge>
        )}
        {ingredient.isVegan && (
          <Badge variant="outline" className="gap-1">
            <Leaf className="h-3 w-3" />
            Vegan
          </Badge>
        )}
        {ingredient.isNatural && (
          <Badge variant="outline" className="gap-1 text-green-600">
            Natural
          </Badge>
        )}
        {ingredient.isSynthetic && (
          <Badge variant="outline" className="gap-1 text-blue-600">
            Synthetic
          </Badge>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
          <TabsTrigger value="compositions">Compositions</TabsTrigger>
          <TabsTrigger value="physicochemical">Physicochemical</TabsTrigger>
          <TabsTrigger value="techno-functionalities">Techno-functionalities</TabsTrigger>
          <TabsTrigger value="viscosity">Viscosity flow curve</TabsTrigger>
        </TabsList>

        {/* Composition Panel */}
        <TabsContent value="compositions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Composition Values (per 100g)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ingredient.nutritional ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Energy</span>
                      <span className="font-medium">{ingredient.nutritional.energy} kcal</span>
                    </div>
                    <Progress value={(ingredient.nutritional.energy / 900) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protein</span>
                      <span className="font-medium">{ingredient.nutritional.protein} g</span>
                    </div>
                    <Progress value={(ingredient.nutritional.protein / 100) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carbohydrates</span>
                      <span className="font-medium">{ingredient.nutritional.carbs} g</span>
                    </div>
                    <Progress value={(ingredient.nutritional.carbs / 100) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fat</span>
                      <span className="font-medium">{ingredient.nutritional.fat} g</span>
                    </div>
                    <Progress value={(ingredient.nutritional.fat / 100) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fiber</span>
                      <span className="font-medium">{ingredient.nutritional.fiber} g</span>
                    </div>
                    <Progress value={(ingredient.nutritional.fiber / 100) * 100} className="h-2" />
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No composition data available.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ingredient Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ingredient.synonyms.length > 0 ? (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Synonyms</p>
                  <div className="flex flex-wrap gap-2">
                    {ingredient.synonyms.map((synonym, index) => (
                      <Badge key={index} variant="outline">
                        {synonym}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No synonyms listed.</p>
              )}

              {ingredient.allergens.length > 0 ? (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Allergen Warnings</p>
                  <div className="flex flex-wrap gap-2">
                    {ingredient.allergens.map((allergen, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={cn('px-3 py-1', getSeverityColor(allergen.severity))}
                      >
                        {allergen.name}
                        <span className="ml-1 text-xs opacity-75">({allergen.severity})</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No allergen warnings listed.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Physicochemical Panel */}
        <TabsContent value="physicochemical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FlaskConical className="h-5 w-5" />
                Physicochemical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ingredient.physicochemical ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Water Activity (aw)</p>
                    <p className="text-2xl font-bold">{ingredient.physicochemical.waterActivity.toFixed(2)}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">pH</p>
                    <p className="text-2xl font-bold">{ingredient.physicochemical.pH.toFixed(1)}</p>
                  </div>
                  {ingredient.physicochemical.density && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Density</p>
                      <p className="text-2xl font-bold">{ingredient.physicochemical.density} <span className="text-sm font-normal">g/cm³</span></p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">No physicochemical data available.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Techno-functionalities Panel */}
        <TabsContent value="techno-functionalities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FlaskConical className="h-5 w-5" />
                Techno-functionalities
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ingredient.technoFunctionalities ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Gel Strength</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.gelStrength} <span className="text-sm font-normal">Bloom g</span></p>
                  </div>
                  <button
                    type="button"
                    onClick={() => hasViscosityCurve && setActiveTab('viscosity')}
                    className={cn(
                      'p-4 bg-muted rounded-lg text-left transition-colors',
                      hasViscosityCurve ? 'hover:bg-muted/80' : 'opacity-60 cursor-not-allowed'
                    )}
                    aria-label="View viscosity flow curve"
                  >
                    <p className="text-sm text-muted-foreground">Viscosity</p>
                    <p className="text-lg font-semibold text-primary">View flow curve</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {hasViscosityCurve ? 'Click to open shear rate chart' : 'No viscosity data available'}
                    </p>
                  </button>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Solubility</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.solubility}%</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Water Holding Capacity</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.waterHoldingCapacity} <span className="text-sm font-normal">g/g</span></p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Emulsifying Capacity</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.emulsifyingCapacity}%</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Foaming Capacity</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.foamingCapacity}%</p>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No techno-functional data available.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Viscosity Flow Curve Panel */}
        <TabsContent value="viscosity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Viscosity Flow Curve
              </CardTitle>
            </CardHeader>
            <CardContent>
              {hasViscosityCurve ? (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Shear rate vs viscosity (mPa·s) at the ingredient's measurement temperature.
                  </div>
                  <ChartContainer config={viscosityChartConfig} className="h-72 w-full">
                    <ScatterChart data={viscosityCurve} margin={{ top: 10, right: 16, bottom: 10, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="shearRate"
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Shear rate (s⁻¹)', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Viscosity (mPa·s)', angle: -90, position: 'insideLeft' }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            labelFormatter={(label) => `Shear rate: ${label} s⁻¹`}
                            formatter={(value) => [`${value} mPa·s`, 'Viscosity']}
                          />
                        }
                      />
                      <Scatter dataKey="viscosity" fill="#000000" />
                    </ScatterChart>
                  </ChartContainer>
                </div>
              ) : (
                <p className="text-muted-foreground">No viscosity flow curve data available.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
