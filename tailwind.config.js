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
