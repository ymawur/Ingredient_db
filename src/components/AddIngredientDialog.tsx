import { useState } from 'react';
import type { IngredientCategory } from '@/types/ingredient';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const categories: IngredientCategory[] = [
  'Hydrocolloids',
  'Emulsifiers',
  'Sweeteners',
  'Preservatives',
  'Antioxidants',
  'Colorants',
  'Flavor Enhancers',
  'Acidity Regulators',
  'Thickeners',
  'Stabilizers',
  'Leavening Agents',
  'Anti-caking Agents',
  'Humectants',
  'Enzymes',
  'Vitamins',
  'Minerals',
  'Amino Acids',
  'Fatty Acids',
];

const defaultFormValues = {
  name: '',
  nameCN: '',
  category: categories[0],
  description: '',
  casNumber: '',
  eNumber: '',
  synonyms: '',
  commonUses: '',
  isGlutenFree: true,
  isVegan: true,
  isNatural: true,
  isSynthetic: false,
  isEUApproved: true,
  isGRAS: true,
  isChinaCompliant: true,
};

export type AddIngredientFormValues = typeof defaultFormValues;

interface AddIngredientDialogProps {
  onAdd: (values: AddIngredientFormValues) => void;
}

export function AddIngredientDialog({ onAdd }: AddIngredientDialogProps) {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.name.trim()) {
      setError('Ingredient name is required.');
      return;
    }

    setError('');
    onAdd({
      ...formValues,
      name: formValues.name.trim(),
      nameCN: formValues.nameCN.trim(),
      description: formValues.description.trim(),
      casNumber: formValues.casNumber.trim(),
      eNumber: formValues.eNumber.trim(),
      synonyms: formValues.synonyms.trim(),
      commonUses: formValues.commonUses.trim(),
    });
    setOpen(false);
    setFormValues(defaultFormValues);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setError('');
      setFormValues(defaultFormValues);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full lg:w-auto">Add ingredient</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add a new ingredient</DialogTitle>
          <DialogDescription>
            Capture the core regulatory and labeling data so it appears in the ingredient database.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ingredient-name">Ingredient name</Label>
              <Input
                id="ingredient-name"
                value={formValues.name}
                onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="e.g. Xanthan Gum"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ingredient-name-cn">Chinese name</Label>
              <Input
                id="ingredient-name-cn"
                value={formValues.nameCN}
                onChange={(event) => setFormValues((prev) => ({ ...prev, nameCN: event.target.value }))}
                placeholder="Optional"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ingredient-category">Category</Label>
              <Select
                value={formValues.category}
                onValueChange={(value) => setFormValues((prev) => ({ ...prev, category: value as IngredientCategory }))}
              >
                <SelectTrigger id="ingredient-category" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ingredient-cas">CAS number</Label>
              <Input
                id="ingredient-cas"
                value={formValues.casNumber}
                onChange={(event) => setFormValues((prev) => ({ ...prev, casNumber: event.target.value }))}
                placeholder="Optional"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ingredient-enumber">E-number</Label>
              <Input
                id="ingredient-enumber"
                value={formValues.eNumber}
                onChange={(event) => setFormValues((prev) => ({ ...prev, eNumber: event.target.value }))}
                placeholder="Optional"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ingredient-description">Description</Label>
            <Textarea
              id="ingredient-description"
              value={formValues.description}
              onChange={(event) => setFormValues((prev) => ({ ...prev, description: event.target.value }))}
              placeholder="Describe the ingredient and typical source"
              rows={3}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ingredient-synonyms">Synonyms (comma separated)</Label>
              <Input
                id="ingredient-synonyms"
                value={formValues.synonyms}
                onChange={(event) => setFormValues((prev) => ({ ...prev, synonyms: event.target.value }))}
                placeholder="e.g. E415, Polysaccharide"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ingredient-uses">Common uses (comma separated)</Label>
              <Input
                id="ingredient-uses"
                value={formValues.commonUses}
                onChange={(event) => setFormValues((prev) => ({ ...prev, commonUses: event.target.value }))}
                placeholder="e.g. Sauces, Dressings"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-medium">Product attributes</p>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-gluten">Gluten free</Label>
                <Switch
                  id="ingredient-gluten"
                  checked={formValues.isGlutenFree}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isGlutenFree: checked }))}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-vegan">Vegan</Label>
                <Switch
                  id="ingredient-vegan"
                  checked={formValues.isVegan}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isVegan: checked }))}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-natural">Natural</Label>
                <Switch
                  id="ingredient-natural"
                  checked={formValues.isNatural}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isNatural: checked }))}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-synthetic">Synthetic</Label>
                <Switch
                  id="ingredient-synthetic"
                  checked={formValues.isSynthetic}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isSynthetic: checked }))}
                />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium">Regulatory status</p>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-eu">EU approved</Label>
                <Switch
                  id="ingredient-eu"
                  checked={formValues.isEUApproved}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isEUApproved: checked }))}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-gras">FDA GRAS</Label>
                <Switch
                  id="ingredient-gras"
                  checked={formValues.isGRAS}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isGRAS: checked }))}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="ingredient-china">China compliant</Label>
                <Switch
                  id="ingredient-china"
                  checked={formValues.isChinaCompliant}
                  onCheckedChange={(checked) => setFormValues((prev) => ({ ...prev, isChinaCompliant: checked }))}
                />
              </div>
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save ingredient</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
