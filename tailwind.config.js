/** @type {import('tailwindcss').Config} */
module.exports = { 
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          outline_gray: "#98908B",
          text_gray: "#696868",
          bg_white_clr: "#F8F4F0",
          brand_black: "#201F24",
          green: "#277C78",
          dark_green : "#1A6965",
          darker_green : "#1C5B59"
        },
      },
      backgroundImage: {
        "search-icon": "url('./assets/Icons/search-button.png')",
        "filter" : "url('./assets/Icons/filter.png')",
        "category" : "url('./assets/Icons/category 2.png')",
        "next" : "url('./assets/Icons/next.png')",
        "previous" : "url('./assets/Icons/prev.png')",
      },
      keyframes: {
        slideLeft : {
          "0%" : { transform : "translateX(-100%)", opacity: "0"},
          "100%" : {transform : "translateX(0)", opacity : "1"}
        },
        slideDown : {
          "0%" : {transform : "translateY(-100%)", opacity : "0%"},
          "100%" : {transform : "translateY(0)", opacity : "1"},
        },
        slideUp : {
          "0%" : {transform : "translateY(100%)", opacity : "0%"},
          "100%" : {transform : "translateY(0)", opacity : "1"},
        },
        expand : {
          "0%" : {width : "3rem"},
          "100%" : {width : "14rem"},
        },
        visible : {
          "0%" : {opacity : "0"},
          "100%" : {opacity : "1"}
        },
        slideDown_med : {
          "0%" : {transform : "translateY(-20%)", opacity : "0%"},
          "100%" : {transform : "translateY(0)", opacity : "1"},
        },
        slideUp_med : {
          "0%" : {transform : "translateY(20%)", opacity : "0%"},
          "100%" : {transform : "translateY(0)", opacity : "1"},
        },
       

      },
      animation : {
        slideLeft: "slideLeft 1s 0.2s ease-in-out forwards ",
        slideDown_2 : "slideDown 0.5s 0.2s ease-in-out forwards ",
        slideDown_4 : "slideDown 0.7s 0.2s ease-in-out forwards",
        slideDown_6 : "slideDown 0.9s 0.2s ease-in-out forwards",
        slideDown_8 : "slideDown 1.1s 0.2s ease-in-out forwards",
        slideUp_2 : "slideUp 0.9s 0.2s ease-in-out forwards",
        slideUp_4 : "slideUp 1.1s 0.2s ease-in-out forwards",
        expand : "expand 0.5s  ease-in-out forwards",
        visible : "visible 0.8s  ease-in-out forwards",
        slideDown_12 : "slideDown_med 0.5s 0.2s ease-in-out forwards ",
        slideUp_12 : "slideUp_med 0.5s 0.2s ease-in-out forwards ",
        
      },
    },
  },
  plugins: [],
};

