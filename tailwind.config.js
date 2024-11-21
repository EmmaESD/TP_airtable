/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers de votre projet
  ],
  theme: {
    colors: {
      pinkLight: "#F7DAC6",
      grey: "#D4D5CF",
      bgGrey: "#E5E6DE",
      chipPink: "#FF928A",
      chipBlue: "#3CC3DF",
      chipGreen: "#6FD195",
      dark: "#000000",
      white: "#FFFFFF",
      pinkHover: "#E0C3B0",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // définit Roboto comme police sans-serif par défaut
      },
      backgroundImage: {
        phone: "url('/public/assets/phone.jpg')",
      },
    },
  },
  plugins: [],
};
