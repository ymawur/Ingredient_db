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
  | 'Hydrocolloids'
  | 'Emulsifiers'
  | 'Sweeteners'
  | 'Preservatives'
  | 'Antioxidants'
  | 'Colorants'
  | 'Flavor Enhancers'
  | 'Acidity Regulators'
  | 'Thickeners'
  | 'Stabilizers'
  | 'Leavening Agents'
  | 'Anti-caking Agents'
  | 'Humectants'
  | 'Enzymes'
  | 'Vitamins'
  | 'Minerals'
  | 'Amino Acids'
  | 'Fatty Acids';

export interface Ingredient {
  id: string;
  name: string;
  nameCN: string;
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
