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

  // Contacto VERIFICADO
  phone: '+34 628 15 05 50',
  phoneDisplay: '628 15 05 50',
  whatsapp: '34628150550',
  email: '', // [PEDIR A CLIENTE]

  // Ubicación VERIFICADA desde web oficial
  address: 'C. Rosa de Luxemburgo',
  addressNumber: '', // sin número específico en web oficial
  postalCode: '46100',
  city: 'Burjassot',
  region: 'Valencia',
  country: 'España',
  coordinates: {
    lat: 39.5061747,
    lng: -0.4207724,
  },

  // Horarios — la web oficial indica 12 días/2 semanas abiertos (semanal completa) pero formato exacto pending
  // Datos cross-referenciados desde Uber Eats / TripAdvisor
  hours: {
    lunes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    martes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    miercoles: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    jueves: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    viernes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    sabado: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
    domingo: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
  },

  // Pago VERIFICADO
  paymentMethods: ['Efectivo', 'Tarjeta contactless'],

  // Redes y delivery
  links: {
    eatbu: 'https://altamiragcp.eatbu.com',
    tripadvisor: 'https://www.tripadvisor.es/Restaurant_Review-g1063698-d34104186-Reviews-Altamira_GCP-Burjassot_Province_of_Valencia_Valencian_Community.html',
    justeat: 'https://www.just-eat.es/restaurants-altamira-gcp-burjassot/menu',
    ubereats: 'https://www.ubereats.com/es-en/store/altamira-gcp/dC-lG6FyQuCPbogK25hVFg',
    instagram: '', // [PEDIR A CLIENTE]
    facebook: '', // [PEDIR A CLIENTE]
    googleMaps: 'https://maps.google.com/?q=Rosa+de+Luxemburgo+46100+Burjassot',
    googleBusiness: '',
  },

  // SEO
  priceRange: '€€',
  cuisineType: 'Cocina venezolana',
  rating: {
    value: 4.8, // [VERIFICAR EN GOOGLE BUSINESS]
    count: 200, // [VERIFICAR]
    source: 'Google + TripAdvisor',
  },

  // Identidad visual venezolana
  flag: {
    yellow: '#FCDB1E',
    blue: '#003893',
    red: '#CE1126',
  },
};

export const SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Historia' },
  { id: 'carta', label: 'Carta' },
  { id: 'reseñas', label: 'Reseñas' },
  { id: 'ubicacion', label: 'Encuéntranos' },
  { id: 'reservar', label: 'Reservar' },
];

// Helper WhatsApp link
export const whatsappLink = (mensaje?: string) => {
  const text = encodeURIComponent(mensaje || '¡Hola! Me gustaría reservar mesa en Altamira GCP');
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${text}`;
};
