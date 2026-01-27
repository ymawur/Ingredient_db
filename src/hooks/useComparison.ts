import { useState, useEffect, useCallback } from 'react';
import type { Ingredient, ComparisonItem } from '@/types/ingredient';

const STORAGE_KEY = 'infotech_comparison_list';
const MAX_COMPARISON_ITEMS = 3;

export function useComparison() {
  const [comparisonList, setComparisonList] = useState<ComparisonItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  // Persist to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comparisonList));
    }
  }, [comparisonList]);

  const addToComparison = useCallback((ingredient: Ingredient): boolean => {
    setComparisonList(prev => {
      // Check if already in list
      if (prev.some(item => item.ingredient.id === ingredient.id)) {
        return prev;
      }
      // Check if max reached
      if (prev.length >= MAX_COMPARISON_ITEMS) {
        return prev;
      }
      return [...prev, { ingredient, addedAt: new Date().toISOString() }];
    });
    return true;
  }, []);

  const removeFromComparison = useCallback((ingredientId: string) => {
    setComparisonList(prev => prev.filter(item => item.ingredient.id !== ingredientId));
  }, []);

  const clearComparison = useCallback(() => {
    setComparisonList([]);
  }, []);

  const isInComparison = useCallback((ingredientId: string) => {
    return comparisonList.some(item => item.ingredient.id === ingredientId);
  }, [comparisonList]);

  const canAddMore = comparisonList.length < MAX_COMPARISON_ITEMS;

  const replaceInComparison = useCallback((oldId: string, newIngredient: Ingredient) => {
    setComparisonList(prev =>
      prev.map(item =>
        item.ingredient.id === oldId
          ? { ingredient: newIngredient, addedAt: new Date().toISOString() }
          : item
      )
    );
  }, []);

  return {
    comparisonList,
    comparisonIngredients: comparisonList.map(item => item.ingredient),
    addToComparison,
    removeFromComparison,
    clearComparison,
    isInComparison,
    canAddMore,
    replaceInComparison,
    comparisonCount: comparisonList.length,
  };
}
