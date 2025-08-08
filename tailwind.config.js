/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      colors: {
        neon: {
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#22d3ee'
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(168,85,247,0.6), 0 0 60px -20px rgba(236,72,153,0.5)',
      },
      backgroundImage: {
        'radial-faded': 'radial-gradient(1200px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.25), transparent 40%), radial-gradient(900px circle at calc(var(--x,50%)*0.8) calc(var(--y,50%)*0.8), rgba(34,211,238,0.2), transparent 35%)',
      }
    },
  },
  plugins: [],
}
