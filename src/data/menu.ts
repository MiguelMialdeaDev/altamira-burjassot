/**
 * Carta venezolana de Altamira GCP - Burjassot
 * Precios VERIFICADOS de plataformas delivery (Just Eat / Uber Eats).
 * Cliente confirma carta completa y prices actualizados.
 */

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'cachapas' | 'arepas' | 'pabellon' | 'entrantes' | 'tequeños' | 'bebidas' | 'postres' | 'menu_dia';
  allergens?: string[];
  image?: string;
  featured?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
  badge?: string; // ej: "El más pedido", "Recomendación de la casa"
}

export const MENU: MenuItem[] = [
  // ====== CACHAPAS (estrella de la casa) ======
  {
    name: 'Cachapa Altamira',
    description: 'Nuestra cachapa de la casa. Maíz tierno + queso de mano + nata + el toque secreto de Altamira.',
    price: 15.60,
    category: 'cachapas',
    featured: true,
    badge: 'La de la casa',
    allergens: ['lácteos', 'gluten'],
    glutenFree: false,
  },
  {
    name: 'Cachapa Bolívar',
    description: 'Cachapa con cochino frito venezolano, queso de mano y nata. Sabor potente y casero.',
    price: 14.00,
    category: 'cachapas',
    featured: true,
    badge: 'Más pedida',
    allergens: ['lácteos'],
  },
  {
    name: 'Cachapa Cota Mil',
    description: 'Cachapa con carne mechada, queso fundido y aguacate. Como en Caracas.',
    price: 15.60,
    category: 'cachapas',
    featured: true,
    allergens: ['lácteos'],
  },
  {
    name: 'Cachapa Soltera',
    description: 'La clásica. Cachapa de maíz dulce sola, perfecta para acompañar.',
    price: 6.50,
    category: 'cachapas',
    vegetarian: true,
    allergens: ['gluten'],
  },

  // ====== AREPAS ======
  {
    name: 'Arepa Reina Pepiada',
    description: 'La arepa más icónica de Venezuela. Pollo + aguacate + mayonesa. Cremosa.',
    price: 8.50,
    category: 'arepas',
    featured: true,
    allergens: ['huevo', 'lácteos'],
  },
  {
    name: 'Arepa Pelúa',
    description: 'Carne mechada + queso amarillo fundido. Tradición caraqueña.',
    price: 8.50,
    category: 'arepas',
    allergens: ['lácteos'],
  },
  {
    name: 'Arepa Dominó',
    description: 'Caraotas negras + queso blanco rallado. Blanco y negro como las fichas.',
    price: 7.50,
    category: 'arepas',
    vegetarian: true,
    allergens: ['lácteos'],
  },
  {
    name: 'Arepa Catira',
    description: 'Pollo guisado con queso amarillo. Suave y reconfortante.',
    price: 8.50,
    category: 'arepas',
    allergens: ['lácteos'],
  },

  // ====== PABELLÓN Y PLATOS FUERTES ======
  {
    name: 'Pabellón Criollo',
    description: 'El plato nacional de Venezuela. Carne mechada, caraotas negras, arroz blanco y plátano frito.',
    price: 13.50,
    category: 'pabellon',
    featured: true,
    badge: 'Plato nacional',
    glutenFree: true,
  },
  {
    name: 'Pabellón con Huevo',
    description: 'El pabellón clásico coronado con huevo frito. "A caballo".',
    price: 14.50,
    category: 'pabellon',
    allergens: ['huevo'],
    glutenFree: true,
  },

  // ====== TEQUEÑOS Y ENTRANTES ======
  {
    name: 'Tequeños (8 unidades)',
    description: 'Bastones de masa rellenos de queso blanco fundido. El aperitivo más venezolano.',
    price: 9.50,
    category: 'tequeños',
    featured: true,
    vegetarian: true,
    allergens: ['gluten', 'lácteos'],
  },
  {
    name: 'Tequeños de Chocolate',
    description: 'La versión dulce. Bastones rellenos de chocolate fundido.',
    price: 7.50,
    category: 'tequeños',
    vegetarian: true,
    allergens: ['gluten', 'lácteos'],
  },
  {
    name: 'Fingers de Pollo',
    description: 'Tiras de pollo crujientes con salsas a elegir.',
    price: 9.50,
    category: 'entrantes',
    allergens: ['gluten'],
  },
  {
    name: 'Yuca Frita con Guasacaca',
    description: 'Yuca crujiente con la salsa verde venezolana de aguacate y cilantro.',
    price: 7.00,
    category: 'entrantes',
    vegetarian: true,
    glutenFree: true,
  },
  {
    name: 'Plátano Maduro Frito con Queso',
    description: 'Plátano maduro caramelizado con queso de mano fundido.',
    price: 6.50,
    category: 'entrantes',
    vegetarian: true,
    glutenFree: true,
    allergens: ['lácteos'],
  },

  // ====== POSTRES ======
  {
    name: 'Quesillo Venezolano',
    description: 'El "flan" venezolano. Más cremoso, más denso, con caramelo casero.',
    price: 5.50,
    category: 'postres',
    vegetarian: true,
    allergens: ['lácteos', 'huevo'],
  },
  {
    name: 'Tres Leches',
    description: 'Bizcocho empapado en tres tipos de leche. Suave y casero.',
    price: 5.50,
    category: 'postres',
    vegetarian: true,
    allergens: ['lácteos', 'huevo', 'gluten'],
  },

  // ====== BEBIDAS TÍPICAS ======
  {
    name: 'Papelón con Limón',
    description: 'Refresco venezolano de panela y limón. Natural, dulce, refrescante.',
    price: 3.50,
    category: 'bebidas',
    vegetarian: true,
    glutenFree: true,
  },
  {
    name: 'Chicha Venezolana',
    description: 'Bebida tradicional de arroz, leche y canela. Casera.',
    price: 4.00,
    category: 'bebidas',
    vegetarian: true,
    allergens: ['lácteos'],
  },
];

export const CATEGORIES = [
  { id: 'cachapas', label: '🌽 Cachapas', priority: 1, description: 'Pancakes de maíz tierno con sus rellenos' },
  { id: 'arepas', label: '🫓 Arepas', priority: 2, description: 'La estrella del desayuno venezolano' },
  { id: 'pabellon', label: '🍛 Pabellón', priority: 3, description: 'El plato nacional' },
  { id: 'tequeños', label: '🧀 Tequeños', priority: 4, description: 'El aperitivo de las fiestas' },
  { id: 'entrantes', label: 'Entrantes', priority: 5 },
  { id: 'postres', label: 'Postres', priority: 6 },
  { id: 'bebidas', label: 'Bebidas típicas', priority: 7 },
];

// Helper: filtrar por categoría
export const itemsByCategory = (cat: string) => MENU.filter(item => item.category === cat);

// Helper: items destacados
export const featuredItems = () => MENU.filter(item => item.featured);
