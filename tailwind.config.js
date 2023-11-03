/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '88': '22rem',
        '104': '26rem',
        '116': '29rem',
        '120': '30rem',

      },
      height:{
        '90': '21rem'
      },

      backgroundColor: {
        'custom-green': 'green-600',
      },
      maxWidth:{
        'max-w-0xl':'616px',
        'max-h-0xl':'462px'
      },
    },
  },
  plugins: [],
}

