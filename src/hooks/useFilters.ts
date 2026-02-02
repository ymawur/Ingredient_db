import { useState, useMemo, useCallback } from 'react';
import type { Ingredient, FilterState, IngredientCategory } from '@/types/ingredient';

export function useFilters(ingredients: Ingredient[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    categories: [],
    isGlutenFree: false,
    isVegan: false,
    pHRange: [0, 14],
    waterActivityRange: [0, 1.0],
  });

  const updateSearchQuery = useCallback((query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleCategory = useCallback((category: IngredientCategory) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  }, []);

  const toggleFilter = useCallback((key: 'isGlutenFree' | 'isVegan') => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const setpHRange = useCallback((range: [number, number]) => {
    setFilters(prev => ({ ...prev, pHRange: range }));
  }, []);

  const setWaterActivityRange = useCallback((range: [number, number]) => {
    setFilters(prev => ({ ...prev, waterActivityRange: range }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      categories: [],
      isGlutenFree: false,
      isVegan: false,
      pHRange: [0, 14],
      waterActivityRange: [0, 1.0],
    });
  }, []);

  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ingredient => {
      // Search query filter (fuzzy search across names, synonyms, E-numbers, CAS numbers)
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchFields = [
          ingredient.name,
          ingredient.eNumber,
          ingredient.casNumber,
          ...ingredient.synonyms,
        ].filter(Boolean).map(f => f!.toLowerCase());
        
        const matchesSearch = searchFields.some(field => field.includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(ingredient.category)) return false;
      }

      // Boolean filters
      if (filters.isGlutenFree && !ingredient.isGlutenFree) return false;
      if (filters.isVegan && !ingredient.isVegan) return false;

      // Range filters
      if (ingredient.physicochemical) {
        const { pH, waterActivity } = ingredient.physicochemical;
        if (pH < filters.pHRange[0] || pH > filters.pHRange[1]) return false;
        if (waterActivity < filters.waterActivityRange[0] || waterActivity > filters.waterActivityRange[1]) return false;
      }

      return true;
    });
  }, [ingredients, filters]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.searchQuery) count++;
    if (filters.categories.length > 0) count++;
    if (filters.isGlutenFree) count++;
    if (filters.isVegan) count++;
    if (filters.pHRange[0] > 0 || filters.pHRange[1] < 14) count++;
    if (filters.waterActivityRange[0] > 0 || filters.waterActivityRange[1] < 1.0) count++;
    return count;
  }, [filters]);

  return {
    filters,
    filteredIngredients,
    activeFiltersCount,
    updateSearchQuery,
    toggleCategory,
    toggleFilter,
    setpHRange,
    setWaterActivityRange,
    clearFilters,
  };
}
