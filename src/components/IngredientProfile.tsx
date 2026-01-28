import type { Ingredient } from '@/types/ingredient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  Scale,
  Check,
  Download,
  FileJson,
  FileSpreadsheet,
  AlertTriangle,
  Wheat,
  Leaf,
  Beaker,
  FlaskConical,
  Globe,
  Shield,
  Utensils,
} from 'lucide-react';
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
  const handleExportJSON = () => exportToJSON(ingredient);
  const handleExportCSV = () => exportToCSV(ingredient);

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

      <Tabs defaultValue="compositions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto">
          <TabsTrigger value="compositions">Compositions</TabsTrigger>
          <TabsTrigger value="physicochemical">Physicochemical</TabsTrigger>
          <TabsTrigger value="techno-functionalities">Techno-functionalities</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
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
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Viscosity</p>
                    <p className="text-2xl font-bold">{ingredient.technoFunctionalities.viscosity} <span className="text-sm font-normal">mPa·s</span></p>
                  </div>
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

        {/* Regulatory Panel */}
        <TabsContent value="regulatory" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* EU */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  European Union
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {ingredient.regulatory.eu ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant={ingredient.regulatory.eu.approved ? 'default' : 'destructive'}>
                        {ingredient.regulatory.eu.approved ? 'Approved' : 'Not Approved'}
                      </Badge>
                    </div>
                    {ingredient.regulatory.eu.eNumber && (
                      <p className="text-sm"><span className="text-muted-foreground">E-Number:</span> {ingredient.regulatory.eu.eNumber}</p>
                    )}
                    {ingredient.regulatory.eu.restrictions && (
                      <p className="text-sm text-amber-600 flex items-start gap-1">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        {ingredient.regulatory.eu.restrictions}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-muted-foreground">No EU regulatory data.</p>
                )}
              </CardContent>
            </Card>

            {/* FDA */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  FDA (USA)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {ingredient.regulatory.fda ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant={ingredient.regulatory.fda.gras ? 'default' : 'secondary'}>
                        {ingredient.regulatory.fda.gras ? 'GRAS' : 'Not GRAS'}
                      </Badge>
                    </div>
                    {ingredient.regulatory.fda.cfrReference && (
                      <p className="text-sm"><span className="text-muted-foreground">CFR:</span> {ingredient.regulatory.fda.cfrReference}</p>
                    )}
                    {ingredient.regulatory.fda.restrictions && (
                      <p className="text-sm text-amber-600 flex items-start gap-1">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        {ingredient.regulatory.fda.restrictions}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-muted-foreground">No FDA regulatory data.</p>
                )}
              </CardContent>
            </Card>

            {/* China */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-red-500" />
                  China
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {ingredient.regulatory.china ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant={ingredient.regulatory.china.compliant ? 'default' : 'destructive'}>
                        {ingredient.regulatory.china.compliant ? 'Compliant' : 'Not Compliant'}
                      </Badge>
                    </div>
                    {ingredient.regulatory.china.gbStandard && (
                      <p className="text-sm"><span className="text-muted-foreground">GB Standard:</span> {ingredient.regulatory.china.gbStandard}</p>
                    )}
                    {ingredient.regulatory.china.restrictions && (
                      <p className="text-sm text-amber-600 flex items-start gap-1">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        {ingredient.regulatory.china.restrictions}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-muted-foreground">No China regulatory data.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Allergen Warnings */}
          {ingredient.allergens.length > 0 && (
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Allergen Warnings
                </CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Applications Panel */}
        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Applications</CardTitle>
            </CardHeader>
            <CardContent>
              {ingredient.commonUses && ingredient.commonUses.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {ingredient.commonUses.map((use, index) => (
                    <Badge key={index} variant="secondary">
                      {use}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No application data available.</p>
              )}
            </CardContent>
          </Card>

          {ingredient.maxDosage && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Maximum Dosage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{ingredient.maxDosage}</p>
              </CardContent>
            </Card>
          )}

          {ingredient.synonyms.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Synonyms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {ingredient.synonyms.map((synonym, index) => (
                    <Badge key={index} variant="outline">
                      {synonym}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
