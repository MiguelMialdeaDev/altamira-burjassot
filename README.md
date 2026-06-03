# Altamira GCP — Web restaurante venezolano · Burjassot

Web single-page para **Altamira GCP**, restaurante venezolano en Burjassot (Valencia).

## Stack

- **Astro 5** SSG (perfect SEO + Lighthouse 100)
- **Tailwind CSS 4** (paleta tropical-venezolana custom)
- **Cloudflare Pages** (hosting gratuito)
- **Schema.org Restaurant** (Rich snippets Google)
- **WhatsApp Business** floating button para reservas

## Comandos

```bash
npm install         # instalar dependencias
npm run dev         # dev server localhost:4321
npm run build       # build producción a dist/
npm run preview     # preview build localmente
```

## Estructura

```
src/
├── data/
│   ├── config.ts       # ⚙️ DATOS RESTAURANTE — editar aquí
│   ├── menu.ts         # 🍽️ CARTA — platos + precios
│   └── reviews.ts      # ⭐ RESEÑAS — sustituir con reales Google Business
├── layouts/
│   └── BaseLayout.astro  # SEO + Schema.org + Open Graph
├── components/
│   ├── Nav.astro
│   ├── Hero.astro      # Foto plato + valoraciones + CTAs
│   ├── Carta.astro     # Destacados + carta completa por categorías
│   ├── Reviews.astro   # 6 reseñas + stats
│   ├── Ubicacion.astro # Mapa + horarios + WhatsApp "si te pierdes"
│   ├── Reservar.astro  # WhatsApp + teléfono
│   └── Footer.astro
└── pages/
    └── index.astro     # Single page assembled
```

## Datos que faltan PEDIR A CLIENTE

- [ ] Email reservas (config.ts → `email`)
- [ ] Coordenadas GPS exactas (config.ts → `coordinates`) — buscar en Google Maps
- [ ] Instagram + Facebook URLs (config.ts → `links`)
- [ ] Logo en alta resolución (poner en `public/images/logo.png`)
- [ ] Fotos REALES de:
  - Cachapas (hero principal)
  - Pabellón criollo
  - Tequeños
  - Local interior (ambiente)
  - Fachada exterior (para que la gente encuentre el sitio)
- [ ] Reseñas REALES (sustituir 6 placeholders en `reviews.ts`)
- [ ] Confirmar carta completa + precios actualizados
- [ ] Acceso Google Business Profile

## Deploy a Cloudflare Pages

1. Push código a GitHub
2. Conectar repo en Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `dist`
5. Auto-deploy en push a main

## Dominio sugerido

- `altamiragcp.es` (€10/año Cloudflare/Namecheap)
- DNS → Cloudflare Pages
- SSL auto

## SEO local

Después de deploy:
1. [ ] Submit `sitemap.xml` en Google Search Console
2. [ ] Verificar y optimizar Google Business Profile
3. [ ] Añadir keywords objetivo: "restaurante venezolano Burjassot", "cachapas Valencia", "arepas Burjassot"

## Mejoras vs eatbu.com (template actual)

| Aspecto | Eatbu (actual) | Esta web |
|---------|----------------|----------|
| Diseño | Template genérico | Custom branded venezolano |
| Performance | Carga JS pesado | SSG Astro = <1s LCP |
| SEO local | Genérico | Schema.org Restaurant + keywords ES |
| Reseñas destacadas | No | Carrusel + stats prominent |
| "Cómo llegar" | Solo mapa | Mapa + WhatsApp "si te pierdes" + cómo encontrarnos |
| WhatsApp directo | No | Floating button siempre visible |
| Identidad visual | Plantilla | Paleta tropical + bandera Venezuela sutil |
| Dominio propio | No | altamiragcp.es propio |
| Coste cliente | Suscripción mensual | €10/año (solo dominio) |

## Casos study LinkedIn (post-launch)

Plantilla post operator después de deploy:

> "De web de plantilla a web propia que vende:
>
> Altamira GCP en Burjassot tiene cachapas que enamoran y reseñas excelentes.
> Pero estaban escondidos detrás de una web template eatbu.com genérica.
>
> Construí una web propia con Astro 5 que:
> ✅ Identidad venezolana auténtica
> ✅ WhatsApp directo "si te pierdes"
> ✅ SEO local optimizado Burjassot
> ✅ Schema Restaurant = estrellas en Google
> ✅ Lighthouse 100 (rapidísima)
>
> Stack: Astro 5 + Tailwind + Cloudflare Pages
> Coste cliente: €10/año
> Tiempo: 10h trabajo
>
> ¿Conoces algún restaurante local que necesite web propia? Escríbeme."
