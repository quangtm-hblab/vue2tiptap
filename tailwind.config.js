module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgGray: '#F4F4F4',
        txtGray: '#ACACAC',
        Orange: '#D95716',
        Mint: '#77B3B3',
        nfMint: '#00838D',
        White: '#ffffff',
      }
    },
  },
  variants: {
    extend: {},
  },
  prefix: 'cmt-',
  plugins: [],
  mode: 'jit',
}
