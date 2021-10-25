module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        '18':'4.5rem',
      },
      spacing:{
        '18':'4.5rem',
      },
      rotate:{
        '360':'360deg',
      }
    },
  },
  variants: {
    extend: {
      scale:['group-hover'],
      borderRadius:['hover']
    },
  },
  plugins: [
  ],
}
