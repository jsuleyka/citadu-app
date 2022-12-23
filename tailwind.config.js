/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      sm: ['16px', '20px'],
      base: ['17px', {
        lineHeight: '120%',
        letterSpacing: '1.1px'
      }],
      lg: ['20px', '28px'],
      xl: ['48px', '130%'],
      // 2xl: ['24px', '32px'],
      // 3xl: ['24px', '32px'],
      // 4xl: ['24px', '32px'],
      // 5xl: ['48px', '86.5%'],
    },
    extend: {
      colors: {
        primary: '#FC554F',
        danger: '#ff5f40',
        info: {
          100: '#234e52',
          200: '#285e61'
        }
      },
    },
  },
  plugins: [],
}


// npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch