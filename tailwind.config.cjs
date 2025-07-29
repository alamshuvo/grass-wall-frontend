/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poopins: ['Poppins', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #B0DD1D, 0 0 10px #B0DD1D' },
          '50%': { boxShadow: '0 0 15px #B0DD1D, 0 0 25px #B0DD1D' },
        },
        dashedBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        
      },
      
      animation: {
        glow: "glowPulse 2s infinite ease-in-out",
        spinSlow: 'dashedBounce 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};