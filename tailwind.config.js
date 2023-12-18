/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'frozenGlass': '#ffffff30',
      'white' : '#fff',
      'black' : '#393939',
      'gray' : '#4B4B4B',
      'lightGray' : '#F6F6F6',
      'darkGray' : '#2D2D2D',
      'lighterGray' : '#ADADAD',
      'mainOrange' : '#DA7339',
      'blue' : '#3C67A7'
    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
      logo: ['Fredoka'],
      heading:['DM Sans']
    }, 
    extend: {
      spacing: {
        '90' : '22rem',
      },
    },
  },
  plugins: [],
}

