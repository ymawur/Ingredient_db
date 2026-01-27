import type { Ingredient } from '@/types/ingredient';

export const ingredients: Ingredient[] = [
  // Hydrocolloids
  {
    id: 'agar-001',
    name: 'Agar',
    nameCN: '琼脂',
    synonyms: ['Agar-Agar', 'E406', 'Kanten'],
    casNumber: '9002-18-0',
    eNumber: 'E406',
    category: 'Hydrocolloids',
    subcategory: 'Seaweed Extract',
    description: 'A gelatinous substance derived from red algae, used as a vegetarian alternative to gelatin.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 26,
      protein: 0.5,
      carbs: 6.8,
      fat: 0.1,
      fiber: 0.5
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 6.5,
      density: 1.03,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E406', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1115' },
      china: { gbStandard: 'GB 1886.239', compliant: true }
    },
    allergens: [],
    commonUses: ['Jellies', 'Desserts', 'Canned meats', 'Ice cream'],
    maxDosage: 'GMP (Good Manufacturing Practice)',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'carrageenan-001',
    name: 'Carrageenan',
    nameCN: '卡拉胶',
    synonyms: ['Irish Moss', 'E407', 'Chondrus Extract'],
    casNumber: '9000-07-1',
    eNumber: 'E407',
    category: 'Hydrocolloids',
    subcategory: 'Seaweed Extract',
    description: 'A family of linear sulfated polysaccharides extracted from red seaweed.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 7.0,
      density: 1.02,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E407', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.620' },
      china: { gbStandard: 'GB 1886.169', compliant: true }
    },
    allergens: [],
    commonUses: ['Dairy products', 'Plant milks', 'Processed meats', 'Toothpaste'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'xanthan-001',
    name: 'Xanthan Gum',
    nameCN: '黄原胶',
    synonyms: ['E415', 'Corn Sugar Gum', 'Polysaccharide B-1459'],
    casNumber: '11138-66-2',
    eNumber: 'E415',
    category: 'Hydrocolloids',
    subcategory: 'Microbial Gum',
    description: 'A polysaccharide with many commercial uses, commonly used as a food additive and rheology modifier.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 33,
      protein: 3.0,
      carbs: 77.8,
      fat: 0.0,
      fiber: 77.8
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 7.0,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E415', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.695' },
      china: { gbStandard: 'GB 1886.41', compliant: true }
    },
    allergens: [
      { name: 'Corn', severity: 'low', icon: 'corn' }
    ],
    commonUses: ['Salad dressings', 'Sauces', 'Gluten-free baking', 'Beverages'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'guar-001',
    name: 'Guar Gum',
    nameCN: '瓜尔胶',
    synonyms: ['E412', 'Guaran', 'Cluster Bean Gum'],
    casNumber: '9000-30-0',
    eNumber: 'E412',
    category: 'Hydrocolloids',
    subcategory: 'Seed Gum',
    description: 'A galactomannan polysaccharide extracted from guar beans with thickening and stabilizing properties.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.88,
      pH: 5.5,
      density: 1.49,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E412', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1339' },
      china: { gbStandard: 'GB 1886.292', compliant: true }
    },
    allergens: [],
    commonUses: ['Ice cream', 'Baked goods', 'Dairy products', 'Soups'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'pectin-001',
    name: 'Pectin',
    nameCN: '果胶',
    synonyms: ['E440', 'Apple Pectin', 'Citrus Pectin'],
    casNumber: '9000-69-5',
    eNumber: 'E440',
    category: 'Hydrocolloids',
    subcategory: 'Fruit Extract',
    description: 'A structural heteropolysaccharide contained in the primary cell walls of terrestrial plants.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 30,
      protein: 0,
      carbs: 90,
      fat: 0,
      fiber: 90
    },
    physicochemical: {
      waterActivity: 0.92,
      pH: 3.5,
      density: 1.35,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E440', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1588' },
      china: { gbStandard: 'GB 1886.244', compliant: true }
    },
    allergens: [],
    commonUses: ['Jams', 'Jellies', 'Fruit fillings', 'Yogurt'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Emulsifiers
  {
    id: 'lecithin-001',
    name: 'Soy Lecithin',
    nameCN: '大豆卵磷脂',
    synonyms: ['E322', 'Phosphatidylcholine', 'Soy Phospholipids'],
    casNumber: '8002-43-5',
    eNumber: 'E322',
    category: 'Emulsifiers',
    subcategory: 'Phospholipid',
    description: 'A mixture of phospholipids in oil extracted from soybeans, commonly used as an emulsifier.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 763,
      protein: 0,
      carbs: 15,
      fat: 81,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.30,
      pH: 7.0,
      density: 1.03,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E322', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1400' },
      china: { gbStandard: 'GB 1886.354', compliant: true }
    },
    allergens: [
      { name: 'Soy', severity: 'high', icon: 'soy' }
    ],
    commonUses: ['Chocolate', 'Baked goods', 'Margarine', 'Instant foods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'monoglycerides-001',
    name: 'Mono- and Diglycerides',
    nameCN: '单双甘油脂肪酸酯',
    synonyms: ['E471', 'Glycerol Monostearate', 'GMS'],
    casNumber: '31566-31-1',
    eNumber: 'E471',
    category: 'Emulsifiers',
    subcategory: 'Fatty Acid Ester',
    description: 'Glycerol esters of fatty acids used as emulsifiers in food products.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 885,
      protein: 0,
      carbs: 0,
      fat: 99,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.20,
      pH: 7.0,
      density: 0.94,
      measurementTemp: 60
    },
    regulatory: {
      eu: { eNumber: 'E471', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1505' },
      china: { gbStandard: 'GB 1886.65', compliant: true }
    },
    allergens: [
      { name: 'Dairy', severity: 'medium', icon: 'dairy' }
    ],
    commonUses: ['Bread', 'Ice cream', 'Margarine', 'Peanut butter'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'polysorbate80-001',
    name: 'Polysorbate 80',
    nameCN: '聚山梨酯80',
    synonyms: ['E433', 'Tween 80', 'Polyoxyethylene Sorbitan Monooleate'],
    casNumber: '9005-65-6',
    eNumber: 'E433',
    category: 'Emulsifiers',
    subcategory: 'Sorbitan Ester',
    description: 'A nonionic surfactant and emulsifier derived from polyethoxylated sorbitan and oleic acid.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 6.5,
      density: 1.08,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E433', approved: true, restrictions: 'Limited in some applications' },
      fda: { gras: true, cfrReference: '21 CFR 173.340' },
      china: { gbStandard: 'GB 1886.302', compliant: true }
    },
    allergens: [],
    commonUses: ['Ice cream', 'Pickles', 'Vitamins', 'Beverages'],
    maxDosage: 'Varies by application',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Sweeteners
  {
    id: 'sucralose-001',
    name: 'Sucralose',
    nameCN: '三氯蔗糖',
    synonyms: ['E955', 'Splenda', 'Trichlorogalactosucrose'],
    casNumber: '56038-13-2',
    eNumber: 'E955',
    category: 'Sweeteners',
    subcategory: 'High-Intensity Sweetener',
    description: 'An artificial sweetener approximately 600 times sweeter than sugar.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.99,
      pH: 5.5,
      density: 1.6,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E955', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.831' },
      china: { gbStandard: 'GB 25531', compliant: true }
    },
    allergens: [],
    commonUses: ['Beverages', 'Baked goods', 'Dairy products', 'Tabletop sweeteners'],
    maxDosage: 'ADI: 15 mg/kg body weight',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'stevia-001',
    name: 'Steviol Glycosides',
    nameCN: '甜菊糖苷',
    synonyms: ['E960', 'Stevia', 'Rebaudioside A'],
    casNumber: '57817-89-7',
    eNumber: 'E960',
    category: 'Sweeteners',
    subcategory: 'Natural High-Intensity Sweetener',
    description: 'Natural sweeteners extracted from the leaves of Stevia rebaudiana, 200-300 times sweeter than sugar.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 99,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 6.0,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E960', approved: true },
      fda: { gras: true, cfrReference: 'GRN 323' },
      china: { gbStandard: 'GB 1886.355', compliant: true }
    },
    allergens: [],
    commonUses: ['Beverages', 'Tabletop sweeteners', 'Yogurt', 'Confectionery'],
    maxDosage: 'ADI: 4 mg/kg body weight (as steviol)',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'erythritol-001',
    name: 'Erythritol',
    nameCN: '赤藓糖醇',
    synonyms: ['E968', 'Meso-erythritol', 'C4H10O4'],
    casNumber: '149-32-6',
    eNumber: 'E968',
    category: 'Sweeteners',
    subcategory: 'Sugar Alcohol',
    description: 'A sugar alcohol with approximately 70% of the sweetness of sugar but almost zero calories.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 20,
      protein: 0,
      carbs: 100,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.92,
      pH: 5.0,
      density: 1.45,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E968', approved: true },
      fda: { gras: true, cfrReference: 'GRN 76' },
      china: { gbStandard: 'GB 1886.245', compliant: true }
    },
    allergens: [],
    commonUses: ['Sugar-free products', 'Beverages', 'Baked goods', 'Chocolate'],
    maxDosage: 'No ADI specified',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'aspartame-001',
    name: 'Aspartame',
    nameCN: '阿斯巴甜',
    synonyms: ['E951', 'NutraSweet', 'Equal', 'APM'],
    casNumber: '22839-47-0',
    eNumber: 'E951',
    category: 'Sweeteners',
    subcategory: 'Artificial Sweetener',
    description: 'An artificial non-saccharide sweetener approximately 200 times sweeter than sucrose.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 17,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.98,
      pH: 4.5,
      density: 1.35,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E951', approved: true, restrictions: 'Phenylketonurics warning required' },
      fda: { gras: true, cfrReference: '21 CFR 172.804' },
      china: { gbStandard: 'GB 1886.47', compliant: true }
    },
    allergens: [
      { name: 'Phenylalanine', severity: 'high', icon: 'warning' }
    ],
    commonUses: ['Soft drinks', 'Chewing gum', 'Tabletop sweeteners', 'Desserts'],
    maxDosage: 'ADI: 40 mg/kg body weight',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'acesulfame-k-001',
    name: 'Acesulfame Potassium',
    nameCN: '乙酰磺胺酸钾',
    synonyms: ['E950', 'Ace-K', 'Acesulfame K', 'Sunett'],
    casNumber: '55589-62-3',
    eNumber: 'E950',
    category: 'Sweeteners',
    subcategory: 'Artificial Sweetener',
    description: 'A calorie-free sugar substitute approximately 200 times sweeter than sugar.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 6.5,
      density: 1.8,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E950', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.800' },
      china: { gbStandard: 'GB 1886.327', compliant: true }
    },
    allergens: [],
    commonUses: ['Beverages', 'Baked goods', 'Chewing gum', 'Dairy products'],
    maxDosage: 'ADI: 15 mg/kg body weight',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Preservatives
  {
    id: 'sorbic-acid-001',
    name: 'Sorbic Acid',
    nameCN: '山梨酸',
    synonyms: ['E200', '2,4-Hexadienoic Acid'],
    casNumber: '110-44-1',
    eNumber: 'E200',
    category: 'Preservatives',
    subcategory: 'Organic Acid',
    description: 'A natural organic compound used as a food preservative with antimicrobial properties.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 3.5,
      density: 1.2,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E200', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.3089' },
      china: { gbStandard: 'GB 1886.186', compliant: true }
    },
    allergens: [],
    commonUses: ['Cheese', 'Baked goods', 'Beverages', 'Dried fruits'],
    maxDosage: 'Varies by product (0.05-0.3%)',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'sodium-benzoate-001',
    name: 'Sodium Benzoate',
    nameCN: '苯甲酸钠',
    synonyms: ['E211', 'Benzoic Acid Sodium Salt'],
    casNumber: '532-32-1',
    eNumber: 'E211',
    category: 'Preservatives',
    subcategory: 'Organic Salt',
    description: 'A widely used food preservative effective against yeasts, molds, and bacteria.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 7.0,
      density: 1.44,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E211', approved: true, restrictions: 'Not permitted in meat products' },
      fda: { gras: true, cfrReference: '21 CFR 184.1733' },
      china: { gbStandard: 'GB 1886.184', compliant: true }
    },
    allergens: [],
    commonUses: ['Soft drinks', 'Sauces', 'Pickles', 'Fruit juices'],
    maxDosage: '0.1% in most products',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'potassium-sorbate-001',
    name: 'Potassium Sorbate',
    nameCN: '山梨酸钾',
    synonyms: ['E202', 'Sorbistat-K'],
    casNumber: '590-00-1',
    eNumber: 'E202',
    category: 'Preservatives',
    subcategory: 'Organic Salt',
    description: 'The potassium salt of sorbic acid, widely used as a food preservative.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.88,
      pH: 7.5,
      density: 1.36,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E202', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.3640' },
      china: { gbStandard: 'GB 1886.39', compliant: true }
    },
    allergens: [],
    commonUses: ['Cheese', 'Wine', 'Baked goods', 'Dairy products'],
    maxDosage: '0.1-0.3% depending on application',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'natamycin-001',
    name: 'Natamycin',
    nameCN: '纳他霉素',
    synonyms: ['E235', 'Pimaricin', 'Natacyn'],
    casNumber: '7681-93-8',
    eNumber: 'E235',
    category: 'Preservatives',
    subcategory: 'Antibiotic',
    description: 'A macrolide antibiotic produced by fermentation of Streptomyces natalensis.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 5.5,
      density: 1.35,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E235', approved: true, restrictions: 'Surface treatment only' },
      fda: { gras: true, cfrReference: '21 CFR 172.155' },
      china: { gbStandard: 'GB 1886.310', compliant: true }
    },
    allergens: [],
    commonUses: ['Cheese surface', 'Sausages', 'Yogurt'],
    maxDosage: 'Surface application only, max 2 mg/dm²',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Antioxidants
  {
    id: 'vitamin-c-001',
    name: 'Ascorbic Acid',
    nameCN: '抗坏血酸',
    synonyms: ['E300', 'Vitamin C', 'L-Ascorbic Acid'],
    casNumber: '50-81-7',
    eNumber: 'E300',
    category: 'Antioxidants',
    subcategory: 'Vitamin',
    description: 'A naturally occurring organic compound with antioxidant properties, also known as Vitamin C.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 2.5,
      density: 1.65,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E300', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.3013' },
      china: { gbStandard: 'GB 1886.28', compliant: true }
    },
    allergens: [],
    commonUses: ['Fruit juices', 'Beverages', 'Meat products', 'Fortified foods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'vitamin-e-001',
    name: 'Tocopherols',
    nameCN: '生育酚',
    synonyms: ['E306', 'Vitamin E', 'Mixed Tocopherols'],
    casNumber: '1406-18-4',
    eNumber: 'E306',
    category: 'Antioxidants',
    subcategory: 'Vitamin',
    description: 'A class of organic chemical compounds with vitamin E activity, used as antioxidants.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.20,
      pH: 7.0,
      density: 0.95,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E306', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.3890' },
      china: { gbStandard: 'GB 1886.233', compliant: true }
    },
    allergens: [],
    commonUses: ['Vegetable oils', 'Nuts', 'Cereals', 'Margarine'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'bha-001',
    name: 'Butylated Hydroxyanisole',
    nameCN: '丁基羟基茴香醚',
    synonyms: ['E320', 'BHA', 'tert-Butyl-4-hydroxyanisole'],
    casNumber: '25013-16-5',
    eNumber: 'E320',
    category: 'Antioxidants',
    subcategory: 'Synthetic Antioxidant',
    description: 'A synthetic antioxidant used to prevent rancidity in food products containing fats and oils.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.30,
      pH: 7.0,
      density: 1.05,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E320', approved: true, restrictions: 'Limited usage levels' },
      fda: { gras: true, cfrReference: '21 CFR 182.3169' },
      china: { gbStandard: 'GB 1886.12', compliant: true }
    },
    allergens: [],
    commonUses: ['Cereals', 'Chewing gum', 'Potato chips', 'Vegetable oils'],
    maxDosage: '0.02% of fat/oil content',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'bht-001',
    name: 'Butylated Hydroxytoluene',
    nameCN: '二丁基羟基甲苯',
    synonyms: ['E321', 'BHT', 'Dibutylhydroxytoluene'],
    casNumber: '128-37-0',
    eNumber: 'E321',
    category: 'Antioxidants',
    subcategory: 'Synthetic Antioxidant',
    description: 'A lipophilic organic compound used as a chemical antioxidant in foods.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.25,
      pH: 7.0,
      density: 1.05,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E321', approved: true, restrictions: 'Limited usage levels' },
      fda: { gras: true, cfrReference: '21 CFR 182.3173' },
      china: { gbStandard: 'GB 1886.256', compliant: true }
    },
    allergens: [],
    commonUses: ['Breakfast cereals', 'Snack foods', 'Chewing gum', 'Vegetable oils'],
    maxDosage: '0.02% of fat/oil content',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Colorants
  {
    id: 'beta-carotene-001',
    name: 'Beta-Carotene',
    nameCN: 'β-胡萝卜素',
    synonyms: ['E160a', 'Carotene', 'Provitamin A'],
    casNumber: '7235-40-7',
    eNumber: 'E160a',
    category: 'Colorants',
    subcategory: 'Natural Color',
    description: 'A strongly colored red-orange pigment abundant in plants and fruits, precursor to vitamin A.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.40,
      pH: 7.0,
      density: 1.0,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E160a', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.5245' },
      china: { gbStandard: 'GB 1886.317', compliant: true }
    },
    allergens: [],
    commonUses: ['Margarine', 'Beverages', 'Dairy products', 'Confectionery'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'curcumin-001',
    name: 'Curcumin',
    nameCN: '姜黄素',
    synonyms: ['E100', 'Turmeric Yellow', 'Diferuloylmethane'],
    casNumber: '458-37-7',
    eNumber: 'E100',
    category: 'Colorants',
    subcategory: 'Natural Color',
    description: 'The principal curcuminoid of turmeric, a member of the ginger family.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.50,
      pH: 7.0,
      density: 1.3,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E100', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.20' },
      china: { gbStandard: 'GB 1886.76', compliant: true }
    },
    allergens: [],
    commonUses: ['Mustard', 'Curry powder', 'Cheese', 'Butter'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'carmine-001',
    name: 'Carmine',
    nameCN: '胭脂红',
    synonyms: ['E120', 'Cochineal', 'Carminic Acid'],
    casNumber: '1390-65-4',
    eNumber: 'E120',
    category: 'Colorants',
    subcategory: 'Natural Color',
    description: 'A pigment of a bright-red color obtained from the aluminium complex derived from carminic acid.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 5.0,
      density: 1.2,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E120', approved: true, restrictions: 'Allergen labeling required' },
      fda: { gras: true, cfrReference: '21 CFR 73.100' },
      china: { gbStandard: 'GB 1886.315', compliant: true }
    },
    allergens: [
      { name: 'Insects', severity: 'high', icon: 'bug' }
    ],
    commonUses: ['Yogurt', 'Juices', 'Candy', 'Cosmetics'],
    maxDosage: 'Varies by application',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'tartrazine-001',
    name: 'Tartrazine',
    nameCN: '柠檬黄',
    synonyms: ['E102', 'FD&C Yellow No. 5', 'Acid Yellow 23'],
    casNumber: '1934-21-0',
    eNumber: 'E102',
    category: 'Colorants',
    subcategory: 'Synthetic Color',
    description: 'A synthetic lemon yellow azo dye used as a food coloring.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 7.0,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E102', approved: true, restrictions: 'Warning label required' },
      fda: { gras: true, cfrReference: '21 CFR 74.705' },
      china: { gbStandard: 'GB 1886.355', compliant: true }
    },
    allergens: [
      { name: 'Azo Dye', severity: 'medium', icon: 'warning' }
    ],
    commonUses: ['Soft drinks', 'Candy', 'Desserts', 'Snacks'],
    maxDosage: 'ADI: 7.5 mg/kg body weight',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Flavor Enhancers
  {
    id: 'msg-001',
    name: 'Monosodium Glutamate',
    nameCN: '谷氨酸钠',
    synonyms: ['E621', 'MSG', 'Sodium Glutamate', 'Ajinomoto'],
    casNumber: '142-47-2',
    eNumber: 'E621',
    category: 'Flavor Enhancers',
    subcategory: 'Amino Acid Salt',
    description: 'The sodium salt of glutamic acid, used to enhance umami flavor in foods.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.80,
      pH: 7.0,
      density: 1.62,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E621', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.1500' },
      china: { gbStandard: 'GB 1886.306', compliant: true }
    },
    allergens: [],
    commonUses: ['Soups', 'Sauces', 'Snack foods', 'Seasonings'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'inosinate-001',
    name: 'Disodium Inosinate',
    nameCN: '肌苷酸二钠',
    synonyms: ['E631', 'IMP', 'Sodium Inosinate'],
    casNumber: '4691-65-0',
    eNumber: 'E631',
    category: 'Flavor Enhancers',
    subcategory: 'Nucleotide',
    description: 'A flavor enhancer often used in combination with MSG to provide umami taste.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 7.5,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E631', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.535' },
      china: { gbStandard: 'GB 1886.97', compliant: true }
    },
    allergens: [
      { name: 'Fish/Meat', severity: 'medium', icon: 'fish' }
    ],
    commonUses: ['Instant noodles', 'Potato chips', 'Seasonings', 'Soups'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'guanylate-001',
    name: 'Disodium Guanylate',
    nameCN: '鸟苷酸二钠',
    synonyms: ['E627', 'GMP', 'Sodium Guanylate'],
    casNumber: '5550-12-9',
    eNumber: 'E627',
    category: 'Flavor Enhancers',
    subcategory: 'Nucleotide',
    description: 'A nucleotide used as a flavor enhancer, often combined with MSG and inosinate.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 7.5,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E627', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.530' },
      china: { gbStandard: 'GB 1886.170', compliant: true }
    },
    allergens: [
      { name: 'Fish', severity: 'medium', icon: 'fish' }
    ],
    commonUses: ['Instant noodles', 'Snacks', 'Seasonings', 'Soups'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Acidity Regulators
  {
    id: 'citric-acid-001',
    name: 'Citric Acid',
    nameCN: '柠檬酸',
    synonyms: ['E330', 'Sour Salt', '2-Hydroxypropane-1,2,3-tricarboxylic Acid'],
    casNumber: '77-92-9',
    eNumber: 'E330',
    category: 'Acidity Regulators',
    subcategory: 'Organic Acid',
    description: 'A weak organic acid found naturally in citrus fruits, widely used as an acidulant.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 2.2,
      density: 1.67,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E330', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1033' },
      china: { gbStandard: 'GB 1886.235', compliant: true }
    },
    allergens: [],
    commonUses: ['Soft drinks', 'Candy', 'Jams', 'Canned foods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'malic-acid-001',
    name: 'Malic Acid',
    nameCN: '苹果酸',
    synonyms: ['E296', 'L-Malic Acid', 'Hydroxybutanedioic Acid'],
    casNumber: '97-67-6',
    eNumber: 'E296',
    category: 'Acidity Regulators',
    subcategory: 'Organic Acid',
    description: 'An organic compound found naturally in many fruits, especially apples.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 2.5,
      density: 1.6,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E296', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1069' },
      china: { gbStandard: 'GB 1886.242', compliant: true }
    },
    allergens: [],
    commonUses: ['Beverages', 'Candy', 'Fruit fillings', 'Chewing gum'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'lactic-acid-001',
    name: 'Lactic Acid',
    nameCN: '乳酸',
    synonyms: ['E270', 'Milk Acid', '2-Hydroxypropanoic Acid'],
    casNumber: '50-21-5',
    eNumber: 'E270',
    category: 'Acidity Regulators',
    subcategory: 'Organic Acid',
    description: 'An organic acid produced by fermentation of carbohydrates.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.92,
      pH: 2.4,
      density: 1.2,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E270', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1061' },
      china: { gbStandard: 'GB 1886.173', compliant: true }
    },
    allergens: [
      { name: 'Dairy', severity: 'low', icon: 'dairy' }
    ],
    commonUses: ['Dairy products', 'Pickles', 'Beverages', 'Baked goods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Thickeners
  {
    id: 'cmc-001',
    name: 'Carboxymethyl Cellulose',
    nameCN: '羧甲基纤维素钠',
    synonyms: ['E466', 'CMC', 'Sodium CMC', 'Cellulose Gum'],
    casNumber: '9004-32-4',
    eNumber: 'E466',
    category: 'Thickeners',
    subcategory: 'Cellulose Derivative',
    description: 'A cellulose derivative with carboxymethyl groups, used as a thickener and stabilizer.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 7.0,
      density: 1.6,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E466', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.1745' },
      china: { gbStandard: 'GB 1886.232', compliant: true }
    },
    allergens: [],
    commonUses: ['Ice cream', 'Dressings', 'Baked goods', 'Pet foods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'starch-001',
    name: 'Modified Starch',
    nameCN: '变性淀粉',
    synonyms: ['E1404-E1452', 'Food Starch Modified', 'Starch Derivatives'],
    casNumber: '9005-25-8',
    eNumber: 'E1404',
    category: 'Thickeners',
    subcategory: 'Starch Derivative',
    description: 'Starch that has been chemically or physically modified to improve functional properties.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 350,
      protein: 0.5,
      carbs: 87,
      fat: 0,
      fiber: 0.5
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 6.0,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E1404', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.892' },
      china: { gbStandard: 'GB 1886.174', compliant: true }
    },
    allergens: [
      { name: 'Corn/Wheat', severity: 'low', icon: 'grain' }
    ],
    commonUses: ['Sauces', 'Soups', 'Gravies', 'Baked goods'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Stabilizers
  {
    id: 'gellan-001',
    name: 'Gellan Gum',
    nameCN: '结冷胶',
    synonyms: ['E418', 'Sphingan', 'Kelcogel'],
    casNumber: '71010-52-1',
    eNumber: 'E418',
    category: 'Stabilizers',
    subcategory: 'Microbial Gum',
    description: 'A water-soluble anionic polysaccharide produced by the bacterium Sphingomonas elodea.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.95,
      pH: 7.0,
      density: 1.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E418', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.665' },
      china: { gbStandard: 'GB 1886.284', compliant: true }
    },
    allergens: [],
    commonUses: ['Plant-based milks', 'Desserts', 'Beverages', 'Jellies'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'alginate-001',
    name: 'Sodium Alginate',
    nameCN: '海藻酸钠',
    synonyms: ['E401', 'Algin', 'Alginic Acid Sodium Salt'],
    casNumber: '9005-38-3',
    eNumber: 'E401',
    category: 'Stabilizers',
    subcategory: 'Seaweed Extract',
    description: 'The sodium salt of alginic acid, extracted from brown seaweed.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.92,
      pH: 7.0,
      density: 1.6,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E401', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1724' },
      china: { gbStandard: 'GB 1886.243', compliant: true }
    },
    allergens: [],
    commonUses: ['Ice cream', 'Spherification', 'Dressings', 'Beer'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Leavening Agents
  {
    id: 'baking-soda-001',
    name: 'Sodium Bicarbonate',
    nameCN: '碳酸氢钠',
    synonyms: ['E500(ii)', 'Baking Soda', 'Bicarbonate of Soda'],
    casNumber: '144-55-8',
    eNumber: 'E500(ii)',
    category: 'Leavening Agents',
    subcategory: 'Chemical Leavener',
    description: 'A chemical leavening agent that produces carbon dioxide when heated or combined with acid.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.30,
      pH: 8.3,
      density: 2.2,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E500(ii)', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1736' },
      china: { gbStandard: 'GB 1886.2', compliant: true }
    },
    allergens: [],
    commonUses: ['Baked goods', 'Effervescent drinks', 'Cleaning', 'Antacid'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'baking-powder-001',
    name: 'Sodium Aluminum Phosphate',
    nameCN: '磷酸铝钠',
    synonyms: ['E541', 'SALP', 'Leavening Acid'],
    casNumber: '7785-88-8',
    eNumber: 'E541',
    category: 'Leavening Agents',
    subcategory: 'Leavening Acid',
    description: 'An acid salt used as a leavening acid in baking powders.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.40,
      pH: 7.0,
      density: 2.5,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E541', approved: true, restrictions: 'Limited in some countries' },
      fda: { gras: true, cfrReference: '21 CFR 182.1781' },
      china: { gbStandard: 'GB 1886.73', compliant: true }
    },
    allergens: [],
    commonUses: ['Self-rising flour', 'Cake mixes', 'Pancake mixes'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Anti-caking Agents
  {
    id: 'silicon-dioxide-001',
    name: 'Silicon Dioxide',
    nameCN: '二氧化硅',
    synonyms: ['E551', 'Silica', 'Silicic Acid'],
    casNumber: '7631-86-9',
    eNumber: 'E551',
    category: 'Anti-caking Agents',
    subcategory: 'Inorganic Salt',
    description: 'A natural compound used as an anti-caking agent to prevent clumping.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.10,
      pH: 7.0,
      density: 2.6,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E551', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.480' },
      china: { gbStandard: 'GB 1886.332', compliant: true }
    },
    allergens: [],
    commonUses: ['Seasonings', 'Powdered foods', 'Spices', 'Salt'],
    maxDosage: '2% in most applications',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'talc-001',
    name: 'Talc',
    nameCN: '滑石粉',
    synonyms: ['E553b', 'Magnesium Silicate', 'Talcum Powder'],
    casNumber: '14807-96-6',
    eNumber: 'E553b',
    category: 'Anti-caking Agents',
    subcategory: 'Mineral',
    description: 'A mineral composed of hydrated magnesium silicate used as an anti-caking agent.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.05,
      pH: 7.0,
      density: 2.7,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E553b', approved: true, restrictions: 'Limited applications' },
      fda: { gras: true, cfrReference: '21 CFR 182.2437' },
      china: { gbStandard: 'GB 1886.246', compliant: true }
    },
    allergens: [],
    commonUses: ['Rice', 'Chewing gum', 'Confectionery'],
    maxDosage: 'Limited usage',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Humectants
  {
    id: 'glycerol-001',
    name: 'Glycerol',
    nameCN: '甘油',
    synonyms: ['E422', 'Glycerin', 'Glycerine', 'Propane-1,2,3-triol'],
    casNumber: '56-81-5',
    eNumber: 'E422',
    category: 'Humectants',
    subcategory: 'Polyol',
    description: 'A simple polyol compound used as a humectant, solvent, and sweetener.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 440,
      protein: 0,
      carbs: 99,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 7.0,
      density: 1.26,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E422', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 182.1320' },
      china: { gbStandard: 'GB 1886.295', compliant: true }
    },
    allergens: [
      { name: 'Animal', severity: 'low', icon: 'animal' }
    ],
    commonUses: ['Baked goods', 'Candy', 'Toothpaste', 'Cosmetics'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'sorbitol-001',
    name: 'Sorbitol',
    nameCN: '山梨糖醇',
    synonyms: ['E420', 'Glucitol', 'Sorbit'],
    casNumber: '50-70-4',
    eNumber: 'E420',
    category: 'Humectants',
    subcategory: 'Sugar Alcohol',
    description: 'A sugar alcohol with a sweet taste which the human body metabolizes slowly.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 270,
      protein: 0,
      carbs: 99,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.88,
      pH: 6.5,
      density: 1.49,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E420', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1835' },
      china: { gbStandard: 'GB 1886.187', compliant: true }
    },
    allergens: [],
    commonUses: ['Sugar-free products', 'Chewing gum', 'Toothpaste', 'Cosmetics'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Enzymes
  {
    id: 'amylase-001',
    name: 'Alpha-Amylase',
    nameCN: 'α-淀粉酶',
    synonyms: ['Enzyme', 'Diastase', '1,4-alpha-D-glucan glucanohydrolase'],
    casNumber: '9000-90-2',
    eNumber: 'E1100',
    category: 'Enzymes',
    subcategory: 'Carbohydrase',
    description: 'An enzyme that catalyzes the hydrolysis of starch into sugars.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 6.5,
      density: 1.1,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E1100', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1027' },
      china: { gbStandard: 'GB 1886.174', compliant: true }
    },
    allergens: [],
    commonUses: ['Baking', 'Brewing', 'Starch processing', 'Detergents'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'invertase-001',
    name: 'Invertase',
    nameCN: '转化酶',
    synonyms: ['Enzyme', 'Sucrase', 'Beta-fructofuranosidase'],
    casNumber: '9001-57-4',
    eNumber: 'E1103',
    category: 'Enzymes',
    subcategory: 'Carbohydrase',
    description: 'An enzyme that catalyzes the hydrolysis of sucrose into glucose and fructose.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 4.5,
      density: 1.1,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E1103', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1955' },
      china: { gbStandard: 'GB 1886.174', compliant: true }
    },
    allergens: [],
    commonUses: ['Confectionery', 'Soft centers', 'Invert sugar syrup'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Vitamins
  {
    id: 'vitamin-a-001',
    name: 'Retinol',
    nameCN: '维生素A',
    synonyms: ['Vitamin A', 'Retinyl Palmitate', 'Axerophthol'],
    casNumber: '68-26-8',
    eNumber: 'E160a',
    category: 'Vitamins',
    subcategory: 'Fat-Soluble Vitamin',
    description: 'A fat-soluble vitamin important for vision, immune function, and cell growth.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.20,
      pH: 7.0,
      density: 0.95,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1930' },
      china: { gbStandard: 'GB 14750', compliant: true }
    },
    allergens: [
      { name: 'Fish', severity: 'medium', icon: 'fish' }
    ],
    commonUses: ['Fortified foods', 'Infant formula', 'Dietary supplements'],
    maxDosage: 'RDA: 700-900 mcg',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'vitamin-d3-001',
    name: 'Cholecalciferol',
    nameCN: '维生素D3',
    synonyms: ['Vitamin D3', 'Colecalciferol', 'Calciol'],
    casNumber: '67-97-0',
    category: 'Vitamins',
    subcategory: 'Fat-Soluble Vitamin',
    description: 'A fat-soluble vitamin essential for calcium absorption and bone health.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.10,
      pH: 7.0,
      density: 0.97,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1950' },
      china: { gbStandard: 'GB 14755', compliant: true }
    },
    allergens: [
      { name: 'Lanolin', severity: 'low', icon: 'sheep' }
    ],
    commonUses: ['Fortified milk', 'Cereals', 'Dietary supplements'],
    maxDosage: 'RDA: 15-20 mcg',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Minerals
  {
    id: 'iron-001',
    name: 'Ferrous Sulfate',
    nameCN: '硫酸亚铁',
    synonyms: ['Iron(II) Sulfate', 'Green Vitriol', 'Copperas'],
    casNumber: '7720-78-7',
    category: 'Minerals',
    subcategory: 'Iron Salt',
    description: 'An iron salt used for iron fortification and as a dietary supplement.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: false,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.60,
      pH: 3.5,
      density: 1.9,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1315' },
      china: { gbStandard: 'GB 29211', compliant: true }
    },
    allergens: [],
    commonUses: ['Flour fortification', 'Infant formula', 'Dietary supplements'],
    maxDosage: 'RDA: 8-18 mg',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'calcium-001',
    name: 'Calcium Carbonate',
    nameCN: '碳酸钙',
    synonyms: ['Limestone', 'Chalk', 'Calcite'],
    casNumber: '471-34-1',
    category: 'Minerals',
    subcategory: 'Calcium Salt',
    description: 'A calcium salt used as a calcium supplement and anti-caking agent.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.05,
      pH: 9.0,
      density: 2.7,
      measurementTemp: 25
    },
    regulatory: {
      eu: { eNumber: 'E170', approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1191' },
      china: { gbStandard: 'GB 1886.214', compliant: true }
    },
    allergens: [],
    commonUses: ['Fortified foods', 'Antacid', 'Baking', 'Supplements'],
    maxDosage: 'RDA: 1000-1300 mg calcium',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Amino Acids
  {
    id: 'lysine-001',
    name: 'L-Lysine',
    nameCN: 'L-赖氨酸',
    synonyms: ['Lysine', '2,6-Diaminohexanoic Acid', 'Essential Amino Acid'],
    casNumber: '56-87-1',
    category: 'Amino Acids',
    subcategory: 'Essential Amino Acid',
    description: 'An essential amino acid that is a building block of proteins.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 400,
      protein: 100,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.85,
      pH: 6.0,
      density: 1.2,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.320' },
      china: { gbStandard: 'GB 1886.362', compliant: true }
    },
    allergens: [],
    commonUses: ['Food fortification', 'Animal feed', 'Dietary supplements'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'taurine-001',
    name: 'Taurine',
    nameCN: '牛磺酸',
    synonyms: ['2-Aminoethanesulfonic Acid', 'L-Taurine'],
    casNumber: '107-35-7',
    category: 'Amino Acids',
    subcategory: 'Sulfonic Acid',
    description: 'An amino sulfonic acid important for cardiovascular function and development.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: true,
    nutritional: {
      energy: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.90,
      pH: 5.0,
      density: 1.7,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.575' },
      china: { gbStandard: 'GB 14759', compliant: true }
    },
    allergens: [],
    commonUses: ['Energy drinks', 'Infant formula', 'Pet food', 'Supplements'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  // Fatty Acids
  {
    id: 'omega3-001',
    name: 'Omega-3 Fatty Acids',
    nameCN: 'Omega-3脂肪酸',
    synonyms: ['Fish Oil', 'EPA', 'DHA', 'Alpha-linolenic Acid'],
    casNumber: '6217-54-5',
    category: 'Fatty Acids',
    subcategory: 'Polyunsaturated Fatty Acid',
    description: 'Essential polyunsaturated fatty acids important for cardiovascular and brain health.',
    isGlutenFree: true,
    isVegan: false,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 900,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.20,
      pH: 7.0,
      density: 0.92,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 184.1911' },
      china: { gbStandard: 'GB 26400', compliant: true }
    },
    allergens: [
      { name: 'Fish', severity: 'high', icon: 'fish' }
    ],
    commonUses: ['Fortified foods', 'Dietary supplements', 'Infant formula'],
    maxDosage: 'AI: 1.1-1.6 g/day',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'mct-001',
    name: 'Medium Chain Triglycerides',
    nameCN: '中链甘油三酯',
    synonyms: ['MCT Oil', 'MCT', 'Caprylic/Capric Triglyceride'],
    casNumber: '73398-61-5',
    category: 'Fatty Acids',
    subcategory: 'Triglyceride',
    description: 'Triglycerides with medium-chain fatty acids (6-12 carbons) used for quick energy.',
    isGlutenFree: true,
    isVegan: true,
    isNatural: true,
    isSynthetic: false,
    nutritional: {
      energy: 860,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0
    },
    physicochemical: {
      waterActivity: 0.15,
      pH: 7.0,
      density: 0.93,
      measurementTemp: 25
    },
    regulatory: {
      eu: { approved: true },
      fda: { gras: true, cfrReference: '21 CFR 172.860' },
      china: { gbStandard: 'GB 1886.325', compliant: true }
    },
    allergens: [
      { name: 'Coconut', severity: 'low', icon: 'coconut' }
    ],
    commonUses: ['Sports nutrition', 'Medical foods', 'Weight management', 'Coffee'],
    maxDosage: 'GMP',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const categories = [
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
  'Fatty Acids'
] as const;
