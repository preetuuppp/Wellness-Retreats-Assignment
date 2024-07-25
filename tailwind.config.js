// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-rgb': 'rgb(224, 217, 207)',
      },
    },
  },
  plugins: [],
};
