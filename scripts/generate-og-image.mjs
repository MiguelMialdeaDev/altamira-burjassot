/**
 * Genera /public/og-image.png para Open Graph (1200x630).
 * Diseño: gradient tropical + tipografía elegante + bandera Venezuela + rating.
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#264653"/>
      <stop offset="60%" stop-color="#7B3F00"/>
      <stop offset="100%" stop-color="#1A1A1A"/>
    </linearGradient>

    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#F4A261" opacity="0.08"/>
    </pattern>

    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FAF6E8"/>
      <stop offset="100%" stop-color="#F4A261"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Subtle overlay -->
  <rect width="1200" height="630" fill="#000" opacity="0.15"/>

  <!-- Top label + bandera Venezuela -->
  <g transform="translate(80, 90)">
    <rect width="14" height="60" fill="#FCDB1E" rx="2"/>
    <rect x="14" width="14" height="60" fill="#003893"/>
    <rect x="28" width="14" height="60" fill="#CE1126" rx="2"/>
    <text x="60" y="28" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#F4A261" letter-spacing="2">COCINA VENEZOLANA</text>
    <text x="60" y="52" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="400" fill="#FAF6E8" opacity="0.7">BURJASSOT · VALENCIA</text>
  </g>

  <!-- Rating top right -->
  <g transform="translate(870, 90)">
    <text x="260" y="30" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#F4A261" opacity="0.8" text-anchor="end" letter-spacing="2">VALORACIÓN GOOGLE</text>
    <text x="260" y="100" font-family="Georgia, 'Times New Roman', serif" font-size="80" font-weight="900" fill="#F4A261" text-anchor="end">4.8 ★</text>
    <text x="260" y="130" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" fill="#FAF6E8" opacity="0.6" text-anchor="end">200+ reseñas reales</text>
  </g>

  <!-- Main title -->
  <text x="80" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="200" font-weight="900" fill="url(#brand)" letter-spacing="-5">Altamira</text>

  <!-- Subtitle -->
  <text x="80" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-style="italic" font-weight="400" fill="#F4A261">Sabores de Caracas en Burjassot</text>

  <!-- Bottom line: dirección -->
  <g transform="translate(80, 540)">
    <line x1="0" y1="-5" x2="50" y2="-5" stroke="#F4A261" stroke-width="3"/>
    <text y="25" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="500" fill="#FAF6E8" opacity="0.7">C. Rosa de Luxemburgo · 628 15 05 50</text>
  </g>

  <!-- Bottom right URL -->
  <text x="1120" y="565" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" fill="#FAF6E8" opacity="0.4" text-anchor="end">altamiragcp.es</text>
</svg>`;

console.log('Generating OG image...');

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`✅ OG image generated: ${outputPath}`);

// Also generate a 512x512 social square as favicon backup
const faviconPath = join(__dirname, '..', 'public', 'favicon-512.png');

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7B3F00"/>
      <stop offset="100%" stop-color="#1A1A1A"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)" rx="100"/>
  <text x="256" y="360" font-family="Georgia, 'Times New Roman', serif" font-size="380" font-weight="900" fill="#F4A261" text-anchor="middle">A</text>
  <g transform="translate(176, 60)">
    <rect width="50" height="14" fill="#FCDB1E" rx="2"/>
    <rect x="50" width="50" height="14" fill="#003893"/>
    <rect x="100" width="50" height="14" fill="#CE1126" rx="2"/>
  </g>
</svg>`;

await sharp(Buffer.from(faviconSvg))
  .png()
  .toFile(faviconPath);

console.log(`✅ Favicon 512 generated: ${faviconPath}`);
