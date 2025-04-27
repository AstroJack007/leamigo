
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: 'rgb(32,107,81)' // This sets the default text color
      },
      colors: {
        'mint-bg': '#f5fffb',
        'mint-primary': '#30caa0',
        'mint-secondary': '#0b8f74',
        'mint-text': '#1b1f22',
        'mint-text-light': '#4a5056',
      },
    },
  },
  plugins: [],
};