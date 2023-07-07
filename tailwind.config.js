/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          50: '#AE0001',
          100: '#740001',
          150: '#EEBA30',
          200: '#D3A625',
        },
        slytherin: {
          50: '#2a623d',
          100: '#1a472a',
          150: '#5d5d5d',
          200: '#aaaaaa',
        },
        ravenclaw: {
          50: '#0e1a40',
          100: '#222f5b',
          150: '#bebebe',
          200: '#946b2d',
        },
        hufflepuff: {
          50: '#ecb939',
          100: '#f0c75e',
          150: '#726255',
          200: '#372e29',
        },
      },
    },
  },
  plugins: [],
}
