export interface NutritionalValues {
  energy: number; // kcal/100g
  protein: number; // g/100g
  carbs: number; // g/100g
  fat: number; // g/100g
  fiber: number; // g/100g
}

export interface PhysicochemicalSpecs {
  waterActivity: number; // aw (0-1.0)
  pH: number; // 0-14
  density?: number; // g/cm³
  measurementTemp?: number; // °C
}

export interface TechnoFunctionalities {
  gelStrength: number; // Bloom g
  viscosity: number; // mPa·s
  solubility: number; // % at 20°C
  waterHoldingCapacity: number; // g water/g
  emulsifyingCapacity: number; // %
  foamingCapacity: number; // %
}

export interface RegulatoryStatus {
  eu?: {
    eNumber?: string;
    approved: boolean;
    restrictions?: string;
  };
  fda?: {
    gras: boolean;
    cfrReference?: string;
    restrictions?: string;
  };
  china?: {
    gbStandard?: string;
    compliant: boolean;
    restrictions?: string;
  };
}

export interface AllergenInfo {
  name: string;
  severity: 'high' | 'medium' | 'low';
  icon: string;
}

export type IngredientCategory = 
  | 'Plant Protein Isolates'
  | 'Plant Protein Concentrates'
  | 'Textured Plant Proteins'
  | 'Protein Flours'
  | 'Protein Blends'
  | 'Protein Hydrolysates'
  | 'Whole-Source Proteins';

export interface Ingredient {
  id: string;
  name: string;
  synonyms: string[];
  casNumber?: string;
  eNumber?: string;
  category: IngredientCategory;
  subcategory?: string;
  description?: string;
  
  // Properties
  isGlutenFree: boolean;
  isVegan: boolean;
  isNatural: boolean;
  isSynthetic: boolean;
  
  // Data
  nutritional?: NutritionalValues;
  physicochemical?: PhysicochemicalSpecs;
  technoFunctionalities?: TechnoFunctionalities;
  regulatory: RegulatoryStatus;
  allergens: AllergenInfo[];
  
  // Applications
  commonUses?: string[];
  maxDosage?: string;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
}

export interface FilterState {
  searchQuery: string;
  categories: IngredientCategory[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isGRAS: boolean;
  isChinaCompliant: boolean;
  isEUApproved: boolean;
  pHRange: [number, number];
  waterActivityRange: [number, number];
}

export interface ComparisonItem {
  ingredient: Ingredient;
  addedAt: string;
}
