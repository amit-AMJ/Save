module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        neonGlow: {
          '0%': { 'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de' },
          '100%': { 'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00de, 0 0 40px #ff00de' },
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'radial-gradient': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}