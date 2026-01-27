import { useState, useMemo, useCallback } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { IngredientGrid } from '@/components/IngredientGrid';
import { IngredientProfile } from '@/components/IngredientProfile';
import { ComparisonView } from '@/components/ComparisonView';
import { CategoryDirectory } from '@/components/CategoryDirectory';
import { QuickFilters } from '@/components/QuickFilters';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter, ChevronRight } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import { useComparison } from '@/hooks/useComparison';
import { ingredients } from '@/data/ingredients';
import type { Ingredient } from '@/types/ingredient';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

type ViewState = 'browse' | 'profile' | 'comparison';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('browse');
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  const {
    filters,
    filteredIngredients,
    activeFiltersCount,
    updateSearchQuery,
    toggleCategory,
    toggleFilter,
    setpHRange,
    setWaterActivityRange,
    clearFilters,
  } = useFilters(ingredients);

  const {
    comparisonList,
    comparisonIngredients,
    addToComparison,
    removeFromComparison,
    clearComparison,
    isInComparison,
    canAddMore,
    replaceInComparison,
    comparisonCount,
  } = useComparison();

  // Calculate ingredient counts per category
  const ingredientCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ingredients.forEach(ing => {
      counts[ing.category] = (counts[ing.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleViewDetails = useCallback((ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setCurrentView('profile');
    window.scrollTo(0, 0);
  }, []);

  const handleBackToBrowse = useCallback(() => {
    setCurrentView('browse');
    setSelectedIngredient(null);
  }, []);

  const handleToggleComparison = useCallback(() => {
    if (currentView === 'comparison') {
      setCurrentView('browse');
    } else {
      setCurrentView('comparison');
    }
  }, [currentView]);

  const handleAddToComparison = useCallback((ingredient: Ingredient) => {
    if (isInComparison(ingredient.id)) {
      removeFromComparison(ingredient.id);
      toast.info(`${ingredient.name} removed from comparison`);
    } else if (canAddMore) {
      addToComparison(ingredient);
      toast.success(`${ingredient.name} added to comparison (${comparisonCount + 1}/3)`);
    } else {
      toast.error('Comparison list is full (max 3 ingredients). Remove one to add another.');
    }
  }, [isInComparison, canAddMore, addToComparison, removeFromComparison, comparisonCount]);

  const handleReplaceInComparison = useCallback((oldId: string, newId: string) => {
    const newIngredient = ingredients.find(i => i.id === newId);
    if (newIngredient) {
      replaceInComparison(oldId, newIngredient);
      toast.success(`Replaced with ${newIngredient.name}`);
    }
  }, [replaceInComparison]);

  // Breadcrumb navigation
  const renderBreadcrumbs = () => {
    const items = [{ label: 'Home', onClick: handleBackToBrowse }];
    
    if (currentView === 'profile' && selectedIngredient) {
      items.push(
        { label: selectedIngredient.category, onClick: () => {
          clearFilters();
          toggleCategory(selectedIngredient.category);
          handleBackToBrowse();
        }},
        { label: selectedIngredient.name, onClick: () => {} }
      );
    } else if (currentView === 'comparison') {
      items.push({ label: 'Compare', onClick: () => {} });
    }

    return (
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            {item.onClick ? (
              <button 
                onClick={item.onClick}
                className="hover:text-foreground hover:underline transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      
      <Header
        comparisonCount={comparisonCount}
        onToggleComparison={handleToggleComparison}
        onNavigateHome={handleBackToBrowse}
        currentView={currentView}
      />

      <main className="container py-6">
        {renderBreadcrumbs()}

        {currentView === 'browse' && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="text-center py-8 space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                INFOTECH Ingredient Database
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive database of food ingredients with regulatory compliance, 
                nutritional data, and physicochemical properties.
              </p>
            </div>

            {/* Category Directory */}
            <CategoryDirectory
              selectedCategories={filters.categories}
              onToggleCategory={toggleCategory}
              ingredientCounts={ingredientCounts}
            />

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Desktop Filter Panel */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <FilterPanel
                  filters={filters}
                  activeFiltersCount={activeFiltersCount}
                  onToggleCategory={toggleCategory}
                  onToggleFilter={toggleFilter}
                  onSetpHRange={setpHRange}
                  onSetWaterActivityRange={setWaterActivityRange}
                  onClearFilters={clearFilters}
                />
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                {/* Search Bar */}
                <div className="flex gap-2">
                  <div className="flex-1">
                    <SearchBar
                      value={filters.searchQuery}
                      onChange={updateSearchQuery}
                      placeholder="Search by name, E-number, CAS number, or synonym..."
                    />
                  </div>
                  {/* Mobile Filter Button */}
                  <Sheet open={filterSheetOpen} onOpenChange={setFilterSheetOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden relative">
                        <Filter className="h-4 w-4" />
                        {activeFiltersCount > 0 && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                            {activeFiltersCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <div className="py-4">
                        <FilterPanel
                          filters={filters}
                          activeFiltersCount={activeFiltersCount}
                          onToggleCategory={toggleCategory}
                          onToggleFilter={toggleFilter}
                          onSetpHRange={setpHRange}
                          onSetWaterActivityRange={setWaterActivityRange}
                          onClearFilters={clearFilters}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Quick Filters */}
                <QuickFilters
                  isGRAS={filters.isGRAS}
                  isChinaCompliant={filters.isChinaCompliant}
                  isEUApproved={filters.isEUApproved}
                  onToggleGRAS={() => toggleFilter('isGRAS')}
                  onToggleChina={() => toggleFilter('isChinaCompliant')}
                  onToggleEU={() => toggleFilter('isEUApproved')}
                />

                {/* Ingredient Grid */}
                <IngredientGrid
                  ingredients={filteredIngredients}
                  comparisonList={comparisonList.map(item => item.ingredient.id)}
                  canAddToComparison={canAddMore}
                  onViewDetails={handleViewDetails}
                  onAddToComparison={handleAddToComparison}
                />
              </div>
            </div>
          </div>
        )}

        {currentView === 'profile' && selectedIngredient && (
          <IngredientProfile
            ingredient={selectedIngredient}
            isInComparison={isInComparison(selectedIngredient.id)}
            canAddToComparison={canAddMore}
            onBack={handleBackToBrowse}
            onAddToComparison={() => handleAddToComparison(selectedIngredient)}
          />
        )}

        {currentView === 'comparison' && (
          <ComparisonView
            comparisonIngredients={comparisonIngredients}
            onBack={handleBackToBrowse}
            onRemove={removeFromComparison}
            onReplace={handleReplaceInComparison}
            onClear={clearComparison}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 INFOTECH. Ingredient Database for Food Industry Professionals.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{ingredients.length} ingredients</span>
              <span>•</span>
              <span>18 categories</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
