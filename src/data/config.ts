/**
 * Configuración del restaurante Altamira GCP.
 * COCINA VENEZOLANA en Burjassot. Edita aquí todos los datos.
 */

export const RESTAURANT = {
  // Identidad
  name: 'Altamira GCP',
  shortName: 'Altamira',
  tagline: 'Sabores de Caracas en el corazón de Burjassot',
  description: 'Auténtica cocina venezolana en Burjassot. Cachapas, arepas, tequeños y los platos de casa que Venezuela trajo a Valencia. Sin atajos, con cariño.',

  // Contacto
  phone: '+34 628 15 05 50',
  phoneDisplay: '628 15 05 50',
  whatsapp: '34628150550', // Sin + ni espacios para wa.me
  email: '', // [PEDIR A CLIENTE]

  // Ubicación
  address: 'Carrer del Pintor Velázquez, 42',
  postalCode: '46100',
  city: 'Burjassot',
  region: 'Valencia',
  country: 'España',
  coordinates: {
    lat: 39.5076, // [VERIFICAR EN GOOGLE MAPS]
    lng: -0.4106,
  },

  // Horarios VERIFICADOS (de búsqueda real)
  hours: {
    lunes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    martes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    miercoles: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    jueves: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    viernes: { lunch: { open: '10:00', close: '16:00' }, dinner: { open: '19:30', close: '23:00' } },
    sabado: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
    domingo: { lunch: { open: '09:00', close: '16:00' }, dinner: { open: '19:00', close: '23:30' } },
  },

  // Redes y delivery (verificados)
  links: {
    eatbu: 'https://altamira.eatbu.com',
    tripadvisor: 'https://www.tripadvisor.es/Restaurant_Review-g1063698-d34104186-Reviews-Altamira_GCP-Burjassot_Province_of_Valencia_Valencian_Community.html',
    justeat: 'https://www.just-eat.es/restaurants-altamira-gcp-burjassot/menu',
    ubereats: 'https://www.ubereats.com/es-en/store/altamira-gcp/dC-lG6FyQuCPbogK25hVFg',
    instagram: '', // [PEDIR A CLIENTE]
    facebook: '', // [PEDIR A CLIENTE]
    googleMaps: 'https://maps.google.com/?q=Carrer+del+Pintor+Velázquez+42+Burjassot',
    googleBusiness: '', // [VERIFICAR / OPTIMIZAR]
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
