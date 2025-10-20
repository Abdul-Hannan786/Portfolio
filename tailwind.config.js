// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000319',
        text: "#0000"
      },
      fontFamily: { // Use fontFamily here
        obviouslyBold: ["Obviously-Bold", 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        mona: ['mona', 'sans-serif']
      },
    },
  },
  plugins: [],
}