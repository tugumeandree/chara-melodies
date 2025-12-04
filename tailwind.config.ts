/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette: Black, Gold, White
        primary: {
          black: '#000000',
          gold: '#D4AF37',
          'gold-light': '#F4E4B5',
          'gold-dark': '#B8941F',
          white: '#FFFFFF',
          'off-white': '#F5F5F5',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
          'light-secondary': '#F8F8F8',
          'dark-secondary': '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'music-pattern': "url('/patterns/music-notes.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-peaceful': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
};
