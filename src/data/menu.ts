/**
 * Carta venezolana de Altamira GCP - Burjassot
 * Transcrita de la CARTA OFICIAL del restaurante (PDF, jul 2026).
 * PDF descargable en /carta-altamira.pdf (ES) y /carta-altamira-en.pdf (EN).
 */

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category:
    | 'cachapas'
    | 'arepas'
    | 'tequeños'
    | 'empanadas'
    | 'bebidas_naturales'
    | 'bebidas'
    | 'cervezas';
  allergens?: string[];
  image?: string;
  featured?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
  badge?: string;
}

// Etiquetas legibles de los 14 alérgenos de declaración obligatoria (Rgto. UE 1169/2011).
// Se muestran los alérgenos que CONTIENE cada plato (nunca se afirma ausencia de gluten,
// para no dar garantías de "sin gluten" en una cocina que maneja trigo).
export const ALLERGENS: Record<string, string> = {
  gluten: 'Gluten',
  lacteos: 'Lácteos',
  huevos: 'Huevos',
  pescado: 'Pescado',
  cacahuetes: 'Cacahuetes',
  crustaceos: 'Crustáceos',
  moluscos: 'Moluscos',
  frutos_secos: 'Frutos secos',
  soja: 'Soja',
  apio: 'Apio',
  mostaza: 'Mostaza',
  sulfitos: 'Sulfitos',
  sesamo: 'Sésamo',
  altramuces: 'Altramuces',
};

export const MENU: MenuItem[] = [
  // ====== CACHAPAS (masa de maíz) ======
  {
    name: 'Cachapa Altamira',
    description: 'Queso de mano, cochino frito, nata latina y guasacaca.',
    price: 14.00,
    category: 'cachapas',
    featured: true,
    badge: 'La de la casa',
    image: 'images/cachapa-altamira.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Cachapa Cotamil',
    description: 'Queso de mano y ternera mechada.',
    price: 14.50,
    category: 'cachapas',
    featured: true,
    image: 'images/cachapa-cota-mil.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Cachapa Bolívar',
    description: 'Queso de mano y nata latina.',
    price: 11.50,
    category: 'cachapas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Cachapa Sabas Nieves',
    description: 'Queso de mano y pollo mechado.',
    price: 14.00,
    category: 'cachapas',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Cachapa Ávila',
    description: 'Queso de mano y reina pepiada.',
    price: 14.50,
    category: 'cachapas',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Cachapa Soltera',
    description: 'Base de cachapa sola, perfecta para acompañar.',
    price: 9.00,
    category: 'cachapas',
    vegetarian: true,
    allergens: ['gluten', 'huevos'],
  },

  // ====== AREPAS (masa de maíz) ======
  {
    name: 'Arepa Altamira',
    description: 'Cochino frito, queso gouda, plátano macho y aguacate.',
    price: 10.00,
    category: 'arepas',
    featured: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Arepa Reina Pepiada',
    description: 'Pollo hervido mechado con crema de aguacate. La más icónica de Venezuela.',
    price: 9.00,
    category: 'arepas',
    featured: true,
    image: 'images/arepas-trio.jpg',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Arepa Pelúa',
    description: 'Queso gouda y ternera mechada.',
    price: 9.00,
    category: 'arepas',
    image: 'images/arepa-pelua.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Arepa Catira',
    description: 'Queso gouda y pollo mechado.',
    price: 9.00,
    category: 'arepas',
    image: 'images/arepa-catira.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Arepa Dominó',
    description: 'Queso fresco latino y alubias negras. Blanco y negro como las fichas.',
    price: 8.50,
    category: 'arepas',
    vegetarian: true,
    image: 'images/arepa-domino.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Arepa de Carne Mechada',
    description: 'Ternera mechada guisada al estilo criollo.',
    price: 8.50,
    category: 'arepas',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Arepa de Pollo Mechado',
    description: 'Pollo mechado jugoso.',
    price: 8.50,
    category: 'arepas',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Arepa Blanquita',
    description: 'Queso latino o gouda.',
    price: 8.00,
    category: 'arepas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Arepa Guerrera',
    description: 'Queso latino, plátano macho y nata.',
    price: 8.00,
    category: 'arepas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },

  // ====== TEQUEÑOS (masa de trigo) ======
  {
    name: 'Tequeños (5 uds · 6 cm)',
    description: 'A elegir: bacon y queso · chorizo pamplonés y queso · guayaba y queso · queso fresco latino · mixto.',
    price: 7.50,
    category: 'tequeños',
    featured: true,
    image: 'images/tequenos.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Tequeños de Nutella (3 uds · 10 cm)',
    description: 'El cierre dulce de las fiestas venezolanas.',
    price: 7.50,
    category: 'tequeños',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos', 'frutos_secos', 'soja'],
  },

  // ====== EMPANADAS (masa de maíz, fritas) ======
  {
    name: 'Empanada Pabellón',
    description: 'Ternera mechada, alubias negras, queso fresco latino y plátano macho.',
    price: 6.50,
    category: 'empanadas',
    featured: true,
    badge: 'El plato nacional, en empanada',
    image: 'images/empanadas.jpg',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Empanada Pelúa',
    description: 'Carne mechada y queso gouda.',
    price: 6.50,
    category: 'empanadas',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Empanada Catira',
    description: 'Pollo mechado y queso gouda.',
    price: 6.50,
    category: 'empanadas',
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Empanada de Carne Molida',
    description: 'Carne molida guisada.',
    price: 6.00,
    category: 'empanadas',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Empanada de Ternera Mechada',
    description: 'Ternera mechada al estilo criollo.',
    price: 6.00,
    category: 'empanadas',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Empanada de Pollo Mechado',
    description: 'Pollo mechado jugoso.',
    price: 6.00,
    category: 'empanadas',
    allergens: ['gluten', 'huevos'],
  },
  {
    name: 'Empanada Dominó',
    description: 'Alubias negras y queso.',
    price: 6.00,
    category: 'empanadas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Empanada de Cazón',
    description: 'Caella guisada, sabor a costa venezolana.',
    price: 6.00,
    category: 'empanadas',
    allergens: ['gluten', 'huevos', 'pescado'],
  },
  {
    name: 'Empanada de Queso',
    description: 'Queso fresco latino.',
    price: 5.50,
    category: 'empanadas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },
  {
    name: 'Empanada Tajada',
    description: 'Queso fresco y plátano macho.',
    price: 5.50,
    category: 'empanadas',
    vegetarian: true,
    allergens: ['gluten', 'lacteos', 'huevos'],
  },

  // ====== BEBIDAS NATURALES (hechas al momento) ======
  { name: 'Guanábana', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales', allergens: [] },
  { name: 'Tamarindo', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales', allergens: [] },
  { name: 'Maracuyá', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales', allergens: [] },
  { name: 'Limonada de Maracuyá', description: 'Hecha al momento.', price: 4.50, category: 'bebidas_naturales', allergens: [] },
  { name: 'Tomate de árbol', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Mora', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Fresa', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Guayaba', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Mango', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Piña', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Papelón con limón', description: 'El refresco tradicional venezolano.', price: 4.20, category: 'bebidas_naturales', allergens: [] },
  { name: 'Limonada de Fresa', description: 'Hecha al momento.', price: 4.20, category: 'bebidas_naturales', allergens: [] },

  // ====== BEBIDAS SIN ALCOHOL ======
  { name: 'Frescolita', description: 'El refresco venezolano de siempre.', price: 3.00, category: 'bebidas', allergens: [] },
  { name: 'Frescolita de Uva', description: '', price: 3.00, category: 'bebidas', allergens: [] },
  { name: 'Malta Polar', description: 'Malta de cebada, sin alcohol.', price: 3.00, category: 'bebidas', allergens: ['gluten'] },
  { name: 'Nestea Maracuyá', description: '', price: 2.50, category: 'bebidas', allergens: [] },
  { name: 'Agua con gas', description: '', price: 2.20, category: 'bebidas', allergens: [] },
  { name: 'Coca-Cola', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Coca-Cola Zero', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Fanta Naranja', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Fanta Limón', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Aquarius Limón', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Aquarius Naranja', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Nestea Limón', description: '', price: 2.00, category: 'bebidas', allergens: [] },
  { name: 'Agua', description: '', price: 1.50, category: 'bebidas', allergens: [] },

  // ====== CERVEZAS, VINO Y VERMUT ======
  { name: 'Smirnoff', description: '', price: 3.90, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Alhambra', description: '', price: 3.10, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Polar Premium', description: 'La cerveza de Venezuela.', price: 3.10, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Polar Pilsen', description: 'La cerveza de Venezuela.', price: 2.80, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Águila sin filtrar', description: '', price: 2.80, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Tinto de verano', description: '', price: 2.80, category: 'cervezas', allergens: ['sulfitos'] },
  { name: 'Estrella Galicia', description: '', price: 2.50, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Radler', description: '', price: 2.50, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Estrella Galicia 0,0', description: '', price: 2.40, category: 'cervezas', allergens: ['gluten'] },
  { name: 'Copa de vino', description: '', price: 4.20, category: 'cervezas', allergens: ['sulfitos'] },
  { name: 'Vermut', description: '', price: 4.30, category: 'cervezas', allergens: ['sulfitos'] },
];

// `allergens` a nivel de categoría: se muestran junto al título de la sección
// (como la carta oficial), no repetidos en cada plato. Cada plato solo enseña
// sus alérgenos ESPECÍFICOS extra (p. ej. lácteos del queso, pescado del cazón).
export const CATEGORIES = [
  { id: 'cachapas', label: 'Cachapas', priority: 1, description: 'Pancakes de maíz tierno con sus rellenos', allergens: ['gluten', 'huevos'] },
  { id: 'arepas', label: 'Arepas', priority: 2, description: 'La estrella de la cocina venezolana', allergens: ['gluten', 'huevos'] },
  { id: 'tequeños', label: 'Tequeños', priority: 3, description: 'El aperitivo de las fiestas', allergens: ['gluten', 'lacteos', 'huevos'] },
  { id: 'empanadas', label: 'Empanadas', priority: 4, description: 'Crujientes, de maíz, al estilo venezolano', allergens: ['gluten', 'huevos'] },
  { id: 'bebidas_naturales', label: 'Bebidas naturales', priority: 5, description: 'Batidos y jugos hechos al momento con sabor venezolano', allergens: [] },
  { id: 'bebidas', label: 'Refrescos', priority: 6, description: 'Clásicos venezolanos y de aquí', allergens: [] },
  { id: 'cervezas', label: 'Cervezas, vino y vermut', priority: 7, allergens: [] },
];

export const itemsByCategory = (cat: string) => MENU.filter(item => item.category === cat);
export const featuredItems = () => MENU.filter(item => item.featured);
