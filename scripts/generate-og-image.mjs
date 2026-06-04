/**
 * Genera /public/cover.jpg para Open Graph (1200x630).
 * JPG en lugar de PNG (mejor compatibilidad con WhatsApp/Instagram cache).
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'cover.jpg');

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

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="#000" opacity="0.15"/>

  <g transform="translate(80, 90)">
    <rect width="14" height="60" fill="#FCDB1E" rx="2"/>
    <rect x="14" width="14" height="60" fill="#003893"/>
    <rect x="28" width="14" height="60" fill="#CE1126" rx="2"/>
    <text x="60" y="28" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#F4A261" letter-spacing="2">COCINA VENEZOLANA</text>
    <text x="60" y="52" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="400" fill="#FAF6E8" opacity="0.7">BURJASSOT · VALENCIA</text>
  </g>

  <g transform="translate(870, 90)">
    <text x="260" y="30" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#F4A261" opacity="0.8" text-anchor="end" letter-spacing="2">VALORACIÓN GOOGLE</text>
    <text x="260" y="100" font-family="Georgia, 'Times New Roman', serif" font-size="80" font-weight="900" fill="#F4A261" text-anchor="end">4.8 ★</text>
    <text x="260" y="130" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" fill="#FAF6E8" opacity="0.6" text-anchor="end">200+ reseñas reales</text>
  </g>

  <text x="80" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="200" font-weight="900" fill="url(#brand)" letter-spacing="-5">Altamira</text>
  <text x="80" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-style="italic" font-weight="400" fill="#F4A261">Sabores de Caracas en Burjassot</text>

  <g transform="translate(80, 540)">
    <line x1="0" y1="-5" x2="50" y2="-5" stroke="#F4A261" stroke-width="3"/>
    <text y="25" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="500" fill="#FAF6E8" opacity="0.7">C. Rosa de Luxemburgo · 628 15 05 50</text>
  </g>

  <text x="1120" y="565" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" fill="#FAF6E8" opacity="0.4" text-anchor="end">altamiragcp.es</text>
</svg>`;

console.log('Generating OG image as JPG...');

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90, progressive: true, mozjpeg: true })
  .toFile(outputPath);

console.log(`✅ OG image generated: ${outputPath}`);
