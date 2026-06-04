/**
 * Configuración del restaurante Altamira GCP.
 * COCINA VENEZOLANA en Burjassot.
 * Datos verificados desde la web oficial https://altamiragcp.eatbu.com
 */

export const RESTAURANT = {
  // Identidad
  name: 'Altamira GCP',
  shortName: 'Altamira',
  tagline: 'Sabores de Caracas, hechos a mano en Burjassot',
  description: 'Restaurante venezolano en Burjassot. De Caracas a Buenos Aires a Valencia: tres ciudades, una misma cocina. Cachapas, arepas, pabellón criollo, tequeños y todo el sabor de casa.',

  // Contacto
  phone: '+34 628 15 05 50',
  phoneDisplay: '628 15 05 50',
  whatsapp: '34628150550',
  email: '',

  // Ubicación
  address: 'C. Rosa de Luxemburgo',
  addressNumber: '',
  postalCode: '46100',
  city: 'Burjassot',
  region: 'Valencia',
  country: 'España',
  coordinates: {
    lat: 39.5061747,
    lng: -0.4207724,
  },

  // Horarios
  hours: {
    lunes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    martes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    miercoles: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    jueves: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    viernes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    sabado: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
    domingo: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
  },

  paymentMethods: ['Efectivo', 'Tarjeta contactless'],

  links: {
    eatbu: 'https://altamiragcp.eatbu.com',
    tripadvisor: 'https://www.tripadvisor.es/Restaurant_Review-g1063698-d34104186-Reviews-Altamira_GCP-Burjassot_Province_of_Valencia_Valencian_Community.html',
    justeat: 'https://www.just-eat.es/restaurants-altamira-gcp-burjassot/menu',
    ubereats: 'https://www.ubereats.com/es-en/store/altamira-gcp/dC-lG6FyQuCPbogK25hVFg',
    instagram: '',
    facebook: '',
    googleMaps: 'https://maps.google.com/?q=Rosa+de+Luxemburgo+46100+Burjassot',
    googleBusiness: '',
  },

  priceRange: '€€',
  cuisineType: 'Cocina venezolana',
  rating: {
    value: 4.9,
    count: 200,
    source: 'Google + TripAdvisor',
  },

  flag: {
    yellow: '#FCDB1E',
    blue: '#003893',
    red: '#CE1126',
  },
};

// Multi-page nav structure
export const SECTIONS = [
  { id: 'home', label: 'Inicio', path: '/' },
  { id: 'historia', label: 'Historia', path: '/historia/' },
  { id: 'carta', label: 'Carta', path: '/carta/' },
  { id: 'reseñas', label: 'Reseñas', path: '/resenas/' },
  { id: 'encuentranos', label: 'Encuéntranos', path: '/encuentranos/' },
  { id: 'reservar', label: 'Reservar', path: '/reservar/' },
];

/**
 * Helper para generar URLs con base path correcto.
 * En GitHub Pages: base='/altamira-burjassot/', en local dev='/'
 */
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  return `${base}${cleanPath}`;
};

// Helper WhatsApp
export const whatsappLink = (mensaje?: string) => {
  const text = encodeURIComponent(mensaje || '¡Hola! Me gustaría reservar mesa en Altamira GCP');
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${text}`;
};
