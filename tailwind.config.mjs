/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada Venezuela cálido tropical
        venezuela: {
          yellow: '#FCDB1E',
          blue: '#003893',
          red: '#CE1126',
        },
        tropical: {
          mango: '#F4A261',
          maiz: '#E9C46A',
          tierra: '#7B3F00',
          jungla: '#264653',
          coco: '#FAF6E8',
        },
        cream: '#FAF6E8',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
