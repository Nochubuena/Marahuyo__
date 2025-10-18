/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
      },
      colors: {
        'marahuyo-blue': 'rgba(53, 74, 131, 1)',
        'marahuyo-red': 'rgba(204, 75, 81, 1)',
        'marahuyo-yellow': 'rgba(242, 199, 87, 1)',
        'marahuyo-beige': 'rgba(236, 226, 214, 1)',
        'marahuyo-pink': 'rgba(249, 222, 220, 1)',
      }
    },
  },
  plugins: [],
}
