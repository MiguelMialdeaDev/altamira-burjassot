/**
 * Reseñas reales (PLACEHOLDER hasta cliente comparta acceso Google Business).
 * Sustituir con reviews reales del Google Business Profile / TripAdvisor.
 */

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  source: 'google' | 'tripadvisor' | 'justeat' | 'ubereats';
  highlight?: string;
}

// PLACEHOLDER realistic venezolano - cambiar con reseñas REALES
export const REVIEWS: Review[] = [
  {
    author: 'María L.',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'La Cachapa Altamira me transportó directo a Caracas. Queso de mano auténtico, maíz dulce perfecto. Ya es nuestro venezolano de cabecera en Valencia.',
    source: 'google',
    highlight: 'directo a Caracas',
  },
  {
    author: 'Javier R.',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Tequeños espectaculares, pabellón criollo como en casa de mi abuela. Buenísimo y muy bien de precio. El sitio es pequeño pero acogedor.',
    source: 'google',
    highlight: 'como en casa de mi abuela',
  },
  {
    author: 'Ana P.',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Costó encontrarlo (zona discreta) pero merece la pena cada minuto. Arepa Reina Pepiada cremosa, fresca, perfecta. Volveremos seguro.',
    source: 'tripadvisor',
    highlight: 'merece la pena cada minuto',
  },
  {
    author: 'Carlos M.',
    rating: 5,
    date: 'Hace 1 semana',
    text: 'Cachapa Bolívar con cochino frito → top. Quesillo de postre → de los mejores que he probado fuera de Venezuela. Servicio cercano y rápido.',
    source: 'google',
    highlight: 'top',
  },
  {
    author: 'Lucía G.',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Llevamos a mi padre venezolano y casi llora con el primer bocado del pabellón. Eso lo dice todo. Papelón con limón natural buenísimo.',
    source: 'tripadvisor',
    highlight: 'casi llora con el primer bocado',
  },
  {
    author: 'David S.',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Recomendado por un amigo venezolano. Acertó de pleno. Tres leches caseras, yuca con guasacaca tremenda. Trato amabilísimo.',
    source: 'google',
    highlight: 'acertó de pleno',
  },
];

export const reviewStats = () => {
  const total = REVIEWS.length;
  const avg = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / total;
  return { total, avg: avg.toFixed(1) };
};
