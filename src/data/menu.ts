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

export const MENU: MenuItem[] = [
  // ====== CACHAPAS ======
  {
    name: 'Cachapa Altamira',
    description: 'Queso de mano, cochino frito, nata latina y guasacaca.',
    price: 14.00,
    category: 'cachapas',
    featured: true,
    badge: 'La de la casa',
    image: 'images/cachapa-altamira.jpg',
  },
  {
    name: 'Cachapa Cotamil',
    description: 'Queso de mano y ternera mechada.',
    price: 14.50,
    category: 'cachapas',
    featured: true,
    image: 'images/cachapa-cota-mil.jpg',
  },
  {
    name: 'Cachapa Bolívar',
    description: 'Queso de mano y nata latina.',
    price: 11.50,
    category: 'cachapas',
    vegetarian: true,
  },
  {
    name: 'Cachapa Sabas Nieves',
    description: 'Queso de mano y pollo mechado.',
    price: 14.00,
    category: 'cachapas',
  },
  {
    name: 'Cachapa Ávila',
    description: 'Queso de mano y reina pepiada.',
    price: 14.50,
    category: 'cachapas',
  },
  {
    name: 'Cachapa Soltera',
    description: 'Base de cachapa sola, perfecta para acompañar.',
    price: 9.00,
    category: 'cachapas',
    vegetarian: true,
  },

  // ====== AREPAS ======
  {
    name: 'Arepa Altamira',
    description: 'Cochino frito, queso gouda, plátano macho y aguacate.',
    price: 10.00,
    category: 'arepas',
    featured: true,
  },
  {
    name: 'Arepa Reina Pepiada',
    description: 'Pollo hervido mechado con crema de aguacate. La más icónica de Venezuela.',
    price: 9.00,
    category: 'arepas',
    featured: true,
    image: 'images/arepas-trio.jpg',
  },
  {
    name: 'Arepa Pelúa',
    description: 'Queso gouda y ternera mechada.',
    price: 9.00,
    category: 'arepas',
    image: 'images/arepa-pelua.jpg',
  },
  {
    name: 'Arepa Catira',
    description: 'Queso gouda y pollo mechado.',
    price: 9.00,
    category: 'arepas',
    image: 'images/arepa-catira.jpg',
  },
  {
    name: 'Arepa Dominó',
    description: 'Queso fresco latino y alubias negras. Blanco y negro como las fichas.',
    price: 8.50,
    category: 'arepas',
    vegetarian: true,
    image: 'images/arepa-domino.jpg',
  },
  {
    name: 'Arepa de Carne Mechada',
    description: 'Ternera mechada guisada al estilo criollo.',
    price: 8.50,
    category: 'arepas',
  },
  {
    name: 'Arepa de Pollo Mechado',
    description: 'Pollo mechado jugoso.',
    price: 8.50,
    category: 'arepas',
  },
  {
    name: 'Arepa Blanquita',
    description: 'Queso latino o gouda.',
    price: 8.00,
    category: 'arepas',
    vegetarian: true,
  },
  {
    name: 'Arepa Guerrera',
    description: 'Queso latino, plátano macho y nata.',
    price: 8.00,
    category: 'arepas',
    vegetarian: true,
  },

  // ====== TEQUEÑOS ======
  {
    name: 'Tequeños (5 uds · 6 cm)',
    description: 'A elegir: bacon y queso · chorizo pamplonés y queso · guayaba y queso · queso fresco latino · mixto.',
    price: 7.50,
    category: 'tequeños',
    featured: true,
    image: 'images/tequenos.jpg',
  },
  {
    name: 'Tequeños de Nutella (3 uds · 10 cm)',
    description: 'El cierre dulce de las fiestas venezolanas.',
    price: 7.50,
    category: 'tequeños',
    vegetarian: true,
  },

  // ====== EMPANADAS ======
  {
    name: 'Empanada Pabellón',
    description: 'Ternera mechada, alubias negras, queso fresco latino y plátano macho.',
    price: 6.50,
    category: 'empanadas',
    featured: true,
    badge: 'El plato nacional, en empanada',
    image: 'images/empanadas.jpg',
  },
  {
    name: 'Empanada Pelúa',
    description: 'Carne mechada y queso gouda.',
    price: 6.50,
    category: 'empanadas',
  },
  {
    name: 'Empanada Catira',
    description: 'Pollo mechado y queso gouda.',
    price: 6.50,
    category: 'empanadas',
  },
  {
    name: 'Empanada de Carne Molida',
    description: 'Carne molida guisada.',
    price: 6.00,
    category: 'empanadas',
  },
  {
    name: 'Empanada de Ternera Mechada',
    description: 'Ternera mechada al estilo criollo.',
    price: 6.00,
    category: 'empanadas',
  },
  {
    name: 'Empanada de Pollo Mechado',
    description: 'Pollo mechado jugoso.',
    price: 6.00,
    category: 'empanadas',
  },
  {
    name: 'Empanada Dominó',
    description: 'Alubias negras y queso.',
    price: 6.00,
    category: 'empanadas',
    vegetarian: true,
  },
  {
    name: 'Empanada de Cazón',
    description: 'Caella guisada, sabor a costa venezolana.',
    price: 6.00,
    category: 'empanadas',
  },
  {
    name: 'Empanada de Queso',
    description: 'Queso fresco latino.',
    price: 5.50,
    category: 'empanadas',
    vegetarian: true,
  },
  {
    name: 'Empanada Tajada',
    description: 'Queso fresco y plátano macho.',
    price: 5.50,
    category: 'empanadas',
    vegetarian: true,
  },

  // ====== BEBIDAS NATURALES (hechas al momento) ======
  { name: 'Guanábana', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales' },
  { name: 'Tamarindo', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales' },
  { name: 'Maracuyá', description: 'Batido natural hecho al momento.', price: 4.80, category: 'bebidas_naturales' },
  { name: 'Limonada de Maracuyá', description: 'Hecha al momento.', price: 4.50, category: 'bebidas_naturales' },
  { name: 'Tomate de árbol', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Mora', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Fresa', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Guayaba', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Mango', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Piña', description: 'Batido natural hecho al momento.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Papelón con limón', description: 'El refresco tradicional venezolano.', price: 4.20, category: 'bebidas_naturales' },
  { name: 'Limonada de Fresa', description: 'Hecha al momento.', price: 4.20, category: 'bebidas_naturales' },

  // ====== BEBIDAS SIN ALCOHOL ======
  { name: 'Frescolita', description: 'El refresco venezolano de siempre.', price: 3.00, category: 'bebidas' },
  { name: 'Frescolita de Uva', description: '', price: 3.00, category: 'bebidas' },
  { name: 'Malta Polar', description: '', price: 3.00, category: 'bebidas' },
  { name: 'Nestea Maracuyá', description: '', price: 2.50, category: 'bebidas' },
  { name: 'Agua con gas', description: '', price: 2.20, category: 'bebidas' },
  { name: 'Coca-Cola', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Coca-Cola Zero', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Fanta Naranja', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Fanta Limón', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Aquarius Limón', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Aquarius Naranja', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Nestea Limón', description: '', price: 2.00, category: 'bebidas' },
  { name: 'Agua', description: '', price: 1.50, category: 'bebidas' },

  // ====== CERVEZAS, VINO Y VERMUT ======
  { name: 'Smirnoff', description: '', price: 3.90, category: 'cervezas' },
  { name: 'Alhambra', description: '', price: 3.10, category: 'cervezas' },
  { name: 'Polar Premium', description: 'La cerveza de Venezuela.', price: 3.10, category: 'cervezas' },
  { name: 'Polar Pilsen', description: 'La cerveza de Venezuela.', price: 2.80, category: 'cervezas' },
  { name: 'Águila sin filtrar', description: '', price: 2.80, category: 'cervezas' },
  { name: 'Tinto de verano', description: '', price: 2.80, category: 'cervezas' },
  { name: 'Estrella Galicia', description: '', price: 2.50, category: 'cervezas' },
  { name: 'Radler', description: '', price: 2.50, category: 'cervezas' },
  { name: 'Estrella Galicia 0,0', description: '', price: 2.40, category: 'cervezas' },
  { name: 'Copa de vino', description: '', price: 4.20, category: 'cervezas' },
  { name: 'Vermut', description: '', price: 4.30, category: 'cervezas' },
];

export const CATEGORIES = [
  { id: 'cachapas', label: 'Cachapas', priority: 1, description: 'Pancakes de maíz tierno con sus rellenos' },
  { id: 'arepas', label: 'Arepas', priority: 2, description: 'La estrella de la cocina venezolana' },
  { id: 'tequeños', label: 'Tequeños', priority: 3, description: 'El aperitivo de las fiestas' },
  { id: 'empanadas', label: 'Empanadas', priority: 4, description: 'Crujientes, de maíz, al estilo venezolano' },
  { id: 'bebidas_naturales', label: 'Bebidas naturales', priority: 5, description: 'Batidos y jugos hechos al momento con sabor venezolano' },
  { id: 'bebidas', label: 'Refrescos', priority: 6, description: 'Clásicos venezolanos y de aquí' },
  { id: 'cervezas', label: 'Cervezas, vino y vermut', priority: 7 },
];

export const itemsByCategory = (cat: string) => MENU.filter(item => item.category === cat);
export const featuredItems = () => MENU.filter(item => item.featured);
