/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // "a"
        'mobile' : '600px', //min-width 375px
        'pc' : '1440px'     //min-width 1440px
        
      },
    },
  },
  plugins: [],
}
// - Mobile: 375px
// - Desktop: 1440px
