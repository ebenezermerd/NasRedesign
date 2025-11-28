// ESM export because package.json has "type": "module"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
       animation: {
        'marquee-continuous': 'marquee-continuous 10s linear infinite',
      },
    },
    keyframes: {
      'marquee-continuous': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }, 
      },
    },
  },
  plugins: [],
};
