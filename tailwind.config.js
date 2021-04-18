module.exports = {
  //purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1440px",
        xl: "2000px",
      },
      colors: {
        plaxc: "#515ABC",
        plaxtextg: "#85888a",
        plaxtextg2: "#b6b7b8",
        plaxtext: "#24282c",
        plaxbutton: "#0c1115",
        plaxb: "#3a6fff",
        plaxg: "#e7e7e7",
        plaxg2: "#fbfbfb",
        newbg: "#202020",
        newbg2: "#373737",
        newbg3: "#1F1F1F",
        newbg4: "#313131",
        footer: "#4A4A4A",
      },
    },
  },
  variants: {},
  plugins: [],
};
