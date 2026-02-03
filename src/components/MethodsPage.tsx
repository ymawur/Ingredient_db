import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';

const methodSections = [
  {
    id: 'gel-strength',
    title: 'Gel Strength (Bloom or Penetration)',
    overview:
      'Determine gel firmness after a controlled gelation period using a texture analyzer or gelometer.',
    equipment: [
      'Texture analyzer with 12.7 mm cylindrical probe (Bloom method)',
      'Water bath and temperature-controlled refrigerator',
      'Standard 6.67% (w/v) protein solution in deionized water',
    ],
    steps: [
      'Disperse sample in water, hydrate for 30–60 min, then heat to fully solubilize (typically 60–70°C).',
      'Pour into standard Bloom jars and set at 10°C for 16–18 h.',
      'Measure the force (g or N) required for 4 mm penetration at 0.5–1.0 mm/s.',
    ],
    calculation:
      'Report the peak force as Bloom value (g) or gel strength (N) with temperature and time conditions.',
  },
  {
    id: 'viscosity',
    title: 'Viscosity (Apparent/Shear)',
    overview:
      'Measure flow resistance of a hydrated solution under defined shear using a rotational viscometer.',
    equipment: [
      'Brookfield or rotational rheometer with appropriate spindle',
      'Temperature-controlled cup or bath',
      'Standardized sample concentration (e.g., 1–5% w/v)',
    ],
    steps: [
      'Hydrate and heat sample to fully dissolve, then equilibrate at target temperature (e.g., 25°C).',
      'Measure viscosity at defined shear rate or spindle speed after 30–60 s stabilization.',
      'Record viscosity across multiple speeds if shear-thinning behavior is expected.',
    ],
    calculation:
      'Report apparent viscosity (mPa·s) at each shear rate along with temperature and concentration.',
  },
  {
    id: 'solubility',
    title: 'Solubility (Temperature-Dependent)',
    overview:
      'Quantify dissolved solids after heating and centrifugation or filtration.',
    equipment: [
      'Water bath with temperature control',
      'Centrifuge or 0.45 μm filter',
      'Drying oven and analytical balance',
    ],
    steps: [
      'Disperse sample at known concentration and heat to target temperature with mixing.',
      'Centrifuge or filter to remove insoluble material.',
      'Dry an aliquot of the supernatant/filtrate to constant weight.',
    ],
    calculation:
      'Solubility (%) = (mass of dissolved solids / initial dry mass) × 100.',
  },
  {
    id: 'water-holding',
    title: 'Water Holding Capacity (WHC)',
    overview:
      'Determine how much water a sample can retain after hydration and centrifugation.',
    equipment: [
      'Centrifuge with 3000–5000 g capability',
      'Pre-weighed centrifuge tubes',
      'Timer and analytical balance',
    ],
    steps: [
      'Weigh dry sample into tube, add excess water (e.g., 10× sample mass) and mix thoroughly.',
      'Hydrate for 30–60 min, then centrifuge at 3000 g for 15–20 min.',
      'Decant supernatant and re-weigh the tube with hydrated pellet.',
    ],
    calculation:
      'WHC (g water/g dry sample) = (wet mass − dry mass) / dry mass.',
  },
  {
    id: 'emulsifying',
    title: 'Emulsifying Capacity (EC)',
    overview:
      'Assess the maximum oil volume a sample can emulsify before phase inversion.',
    equipment: [
      'High-shear homogenizer',
      'Graduated cylinder or burette for oil addition',
      'pH meter for standardized conditions',
    ],
    steps: [
      'Prepare protein or hydrocolloid solution at fixed concentration and pH.',
      'Homogenize while adding oil at a constant rate until emulsion breaks.',
      'Record the total oil volume emulsified at break point.',
    ],
    calculation:
      'EC (mL oil/g sample) = oil volume at break / dry sample mass.',
  },
  {
    id: 'foaming',
    title: 'Foaming Capacity (FC) & Stability',
    overview:
      'Measure foam volume immediately after whipping and its retention over time.',
    equipment: [
      'Whisk or homogenizer',
      'Graduated cylinder',
      'Timer',
    ],
    steps: [
      'Whip sample solution at defined concentration for a fixed time (e.g., 2 min).',
      'Immediately record total foam volume.',
      'Record foam volume after 30–60 min to estimate stability.',
    ],
    calculation:
      'FC (%) = [(foam volume − initial volume) / initial volume] × 100; stability as % volume retained.',
  },
];

export function MethodsPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Methods</h1>
          <p className="text-muted-foreground max-w-2xl">
            Reference laboratory methods for characterizing functional properties of food ingredients.
            Use consistent temperature, concentration, and shear conditions to ensure comparability.
          </p>
        </div>
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <List className="h-4 w-4 mr-2" />
              Method Navigation
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div className="py-4">
              <h2 className="text-lg font-semibold mb-3">Methods</h2>
              <ul className="space-y-2">
                {methodSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setNavOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3 rounded-lg border bg-card p-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Method Navigation
            </h2>
            <ul className="space-y-2">
              {methodSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-6">
          {methodSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-xl border bg-card p-6 shadow-sm scroll-mt-24"
            >
              <div className="space-y-3">
                <div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="text-sm text-muted-foreground">{section.overview}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold">Key Equipment</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {section.equipment.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold">Procedure</h3>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                      {section.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Calculation:</span> {section.calculation}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
