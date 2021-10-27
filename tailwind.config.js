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
      },
      width:{
        '1/24':'4.1666667%',
        '23/24':'95.8333333%',
        'cont':'93.75%',
        'side':'7.25%,'
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
