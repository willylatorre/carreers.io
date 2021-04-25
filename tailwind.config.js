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
        logo: '150px',
        card: '180px',
        cplogo: '80px'
      },
      minWidth: {
        card: '180px'
      },
      height: {
        card: '280px',
        cplogo: '80px'
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
