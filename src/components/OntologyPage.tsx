import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type OntologyNode = {
  id: string;
  term: string;
  category: 'Ingredient' | 'Property' | 'Process' | 'Outcome';
  x: number;
  y: number;
};

type OntologyEdge = {
  from: string;
  to: string;
  label: string;
};

const ontologyTerms: OntologyNode[] = [
  { id: 'water', term: 'Water', category: 'Ingredient', x: 10, y: 20 },
  { id: 'sugar', term: 'Sugar', category: 'Ingredient', x: 10, y: 35 },
  { id: 'salt', term: 'Salt', category: 'Ingredient', x: 10, y: 50 },
  { id: 'citric-acid', term: 'Citric Acid', category: 'Ingredient', x: 10, y: 65 },
  { id: 'starch', term: 'Starch', category: 'Ingredient', x: 10, y: 80 },

  { id: 'ph', term: 'pH', category: 'Property', x: 37, y: 20 },
  { id: 'water-activity', term: 'Water Activity', category: 'Property', x: 37, y: 35 },
  { id: 'solubility', term: 'Solubility', category: 'Property', x: 37, y: 50 },
  { id: 'viscosity', term: 'Viscosity', category: 'Property', x: 37, y: 65 },
  { id: 'density', term: 'Density', category: 'Property', x: 37, y: 80 },

  { id: 'mixing', term: 'Mixing', category: 'Process', x: 64, y: 20 },
  { id: 'heating', term: 'Heating', category: 'Process', x: 64, y: 35 },
  { id: 'cooling', term: 'Cooling', category: 'Process', x: 64, y: 50 },
  { id: 'fermentation', term: 'Fermentation', category: 'Process', x: 64, y: 65 },
  { id: 'drying', term: 'Drying', category: 'Process', x: 64, y: 80 },

  { id: 'texture', term: 'Texture', category: 'Outcome', x: 90, y: 20 },
  { id: 'stability', term: 'Shelf Stability', category: 'Outcome', x: 90, y: 35 },
  { id: 'safety', term: 'Microbial Safety', category: 'Outcome', x: 90, y: 50 },
  { id: 'flavor', term: 'Flavor Balance', category: 'Outcome', x: 90, y: 65 },
  { id: 'yield', term: 'Yield', category: 'Outcome', x: 90, y: 80 },
];

const ontologyEdges: OntologyEdge[] = [
  { from: 'water', to: 'water-activity', label: 'drives' },
  { from: 'citric-acid', to: 'ph', label: 'lowers' },
  { from: 'sugar', to: 'water-activity', label: 'reduces' },
  { from: 'salt', to: 'water-activity', label: 'reduces' },
  { from: 'starch', to: 'viscosity', label: 'increases' },

  { from: 'solubility', to: 'mixing', label: 'affects' },
  { from: 'viscosity', to: 'heating', label: 'modifies' },
  { from: 'ph', to: 'fermentation', label: 'controls' },
  { from: 'water-activity', to: 'drying', label: 'target for' },
  { from: 'density', to: 'cooling', label: 'impacts' },

  { from: 'mixing', to: 'texture', label: 'shapes' },
  { from: 'heating', to: 'safety', label: 'improves' },
  { from: 'cooling', to: 'stability', label: 'supports' },
  { from: 'fermentation', to: 'flavor', label: 'develops' },
  { from: 'drying', to: 'yield', label: 'concentrates' },
];

const categoryColor: Record<OntologyNode['category'], string> = {
  Ingredient: 'bg-blue-100 text-blue-900 border-blue-300',
  Property: 'bg-green-100 text-green-900 border-green-300',
  Process: 'bg-amber-100 text-amber-900 border-amber-300',
  Outcome: 'bg-purple-100 text-purple-900 border-purple-300',
};

export function OntologyPage() {
  const nodeById = new Map(ontologyTerms.map((node) => [node.id, node]));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ingredient Ontology Demo</CardTitle>
          <CardDescription>
            A sample knowledge graph linking ingredients, physicochemical properties, processing methods, and product outcomes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {(['Ingredient', 'Property', 'Process', 'Outcome'] as const).map((category) => (
              <Badge key={category} className={categoryColor[category]}>
                {category}
              </Badge>
            ))}
            <Badge variant="outline">20 ontology terms</Badge>
          </div>

          <div className="relative w-full overflow-x-auto rounded-lg border bg-muted/20 p-4">
            <div className="relative min-w-[1100px] h-[560px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
                {ontologyEdges.map((edge, index) => {
                  const from = nodeById.get(edge.from);
                  const to = nodeById.get(edge.to);

                  if (!from || !to) return null;

                  const x1 = (from.x / 100) * 1100 + 65;
                  const y1 = (from.y / 100) * 560;
                  const x2 = (to.x / 100) * 1100 - 65;
                  const y2 = (to.y / 100) * 560;
                  const mx = (x1 + x2) / 2;
                  const my = (y1 + y2) / 2;

                  return (
                    <g key={`${edge.from}-${edge.to}-${index}`}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--muted-foreground))" strokeOpacity="0.5" strokeWidth="1.5" />
                      <text x={mx} y={my - 6} textAnchor="middle" className="fill-muted-foreground" fontSize="11">
                        {edge.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {ontologyTerms.map((node) => (
                <div
                  key={node.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-32 text-center rounded-md border px-2 py-2 text-xs font-medium shadow-sm ${categoryColor[node.category]}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {node.term}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
