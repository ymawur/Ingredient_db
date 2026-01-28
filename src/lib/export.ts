import type { Ingredient } from '@/types/ingredient';

export function exportToJSON(ingredient: Ingredient): void {
  const dataStr = JSON.stringify(ingredient, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${ingredient.id}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToCSV(ingredient: Ingredient): void {
  const headers = [
    'ID',
    'Name',
    'Synonyms',
    'CAS Number',
    'E-Number',
    'Category',
    'Subcategory',
    'Description',
    'Gluten Free',
    'Vegan',
    'Natural',
    'Synthetic',
    'Energy (kcal/100g)',
    'Protein (g/100g)',
    'Carbs (g/100g)',
    'Fat (g/100g)',
    'Fiber (g/100g)',
    'Water Activity',
    'pH',
    'Density',
    'Gel Strength (Bloom g)',
    'Viscosity (mPa·s)',
    'Solubility (%)',
    'Water Holding Capacity (g/g)',
    'Emulsifying Capacity (%)',
    'Foaming Capacity (%)',
    'EU E-Number',
    'EU Approved',
    'EU Restrictions',
    'FDA GRAS',
    'FDA CFR Reference',
    'FDA Restrictions',
    'China GB Standard',
    'China Compliant',
    'China Restrictions',
    'Allergens',
    'Common Uses',
    'Max Dosage',
  ];

  const row = [
    ingredient.id,
    ingredient.name,
    ingredient.synonyms.join('; '),
    ingredient.casNumber || '',
    ingredient.eNumber || '',
    ingredient.category,
    ingredient.subcategory || '',
    ingredient.description || '',
    ingredient.isGlutenFree ? 'Yes' : 'No',
    ingredient.isVegan ? 'Yes' : 'No',
    ingredient.isNatural ? 'Yes' : 'No',
    ingredient.isSynthetic ? 'Yes' : 'No',
    ingredient.nutritional?.energy ?? '',
    ingredient.nutritional?.protein ?? '',
    ingredient.nutritional?.carbs ?? '',
    ingredient.nutritional?.fat ?? '',
    ingredient.nutritional?.fiber ?? '',
    ingredient.physicochemical?.waterActivity ?? '',
    ingredient.physicochemical?.pH ?? '',
    ingredient.physicochemical?.density ?? '',
    ingredient.technoFunctionalities?.gelStrength ?? '',
    ingredient.technoFunctionalities?.viscosity ?? '',
    ingredient.technoFunctionalities?.solubility ?? '',
    ingredient.technoFunctionalities?.waterHoldingCapacity ?? '',
    ingredient.technoFunctionalities?.emulsifyingCapacity ?? '',
    ingredient.technoFunctionalities?.foamingCapacity ?? '',
    ingredient.regulatory.eu?.eNumber || '',
    ingredient.regulatory.eu?.approved ? 'Yes' : 'No',
    ingredient.regulatory.eu?.restrictions || '',
    ingredient.regulatory.fda?.gras ? 'Yes' : 'No',
    ingredient.regulatory.fda?.cfrReference || '',
    ingredient.regulatory.fda?.restrictions || '',
    ingredient.regulatory.china?.gbStandard || '',
    ingredient.regulatory.china?.compliant ? 'Yes' : 'No',
    ingredient.regulatory.china?.restrictions || '',
    ingredient.allergens.map(a => `${a.name} (${a.severity})`).join('; ') || 'None',
    ingredient.commonUses?.join('; ') || '',
    ingredient.maxDosage || '',
  ];

  const csvContent = [
    headers.join(','),
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${ingredient.id}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportBulkToCSV(ingredients: Ingredient[]): void {
  const headers = [
    'ID',
    'Name',
    'Synonyms',
    'CAS Number',
    'E-Number',
    'Category',
    'Subcategory',
    'Description',
    'Gluten Free',
    'Vegan',
    'Natural',
    'Synthetic',
    'Energy (kcal/100g)',
    'Protein (g/100g)',
    'Carbs (g/100g)',
    'Fat (g/100g)',
    'Fiber (g/100g)',
    'Water Activity',
    'pH',
    'Density',
    'Gel Strength (Bloom g)',
    'Viscosity (mPa·s)',
    'Solubility (%)',
    'Water Holding Capacity (g/g)',
    'Emulsifying Capacity (%)',
    'Foaming Capacity (%)',
    'EU E-Number',
    'EU Approved',
    'FDA GRAS',
    'China GB Standard',
    'China Compliant',
    'Allergens',
    'Common Uses',
    'Max Dosage',
  ];

  const rows = ingredients.map(ingredient => [
    ingredient.id,
    ingredient.name,
    ingredient.synonyms.join('; '),
    ingredient.casNumber || '',
    ingredient.eNumber || '',
    ingredient.category,
    ingredient.subcategory || '',
    ingredient.description || '',
    ingredient.isGlutenFree ? 'Yes' : 'No',
    ingredient.isVegan ? 'Yes' : 'No',
    ingredient.isNatural ? 'Yes' : 'No',
    ingredient.isSynthetic ? 'Yes' : 'No',
    ingredient.nutritional?.energy ?? '',
    ingredient.nutritional?.protein ?? '',
    ingredient.nutritional?.carbs ?? '',
    ingredient.nutritional?.fat ?? '',
    ingredient.nutritional?.fiber ?? '',
    ingredient.physicochemical?.waterActivity ?? '',
    ingredient.physicochemical?.pH ?? '',
    ingredient.physicochemical?.density ?? '',
    ingredient.technoFunctionalities?.gelStrength ?? '',
    ingredient.technoFunctionalities?.viscosity ?? '',
    ingredient.technoFunctionalities?.solubility ?? '',
    ingredient.technoFunctionalities?.waterHoldingCapacity ?? '',
    ingredient.technoFunctionalities?.emulsifyingCapacity ?? '',
    ingredient.technoFunctionalities?.foamingCapacity ?? '',
    ingredient.regulatory.eu?.eNumber || '',
    ingredient.regulatory.eu?.approved ? 'Yes' : 'No',
    ingredient.regulatory.fda?.gras ? 'Yes' : 'No',
    ingredient.regulatory.china?.gbStandard || '',
    ingredient.regulatory.china?.compliant ? 'Yes' : 'No',
    ingredient.allergens.map(a => a.name).join('; ') || 'None',
    ingredient.commonUses?.join('; ') || '',
    ingredient.maxDosage || '',
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ingredients_export_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
