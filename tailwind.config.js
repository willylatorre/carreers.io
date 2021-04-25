module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        logo: '180px',
        card: '180px'
      },
      minWidth: {
        card: '180px'
      },
      height: {
        card: '280px'
      },
      colors: {
        border: 'rgba(0,0,0,0.1)'
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, minmax(180px, 232px))',
      },
      spacing: {
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
