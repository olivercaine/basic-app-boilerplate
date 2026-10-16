module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnbRed: '#FF385C',
        airbnbLightGray: '#F2F3F5',
        airbnbFooterBg: '#F9FAFB',
        airbnbDarkText: '#222222',
        airbnbSecondaryText: '#717171',
        airbnbBorder: '#DDDDDD',
      },
      borderRadius: {
        'xl': '1rem', // 16px
        'lg': '0.75rem', // 12px
        'full': '9999px', // For pill shapes
      },
    },
  },
  plugins: [],
}
