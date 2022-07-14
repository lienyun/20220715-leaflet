/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage:(theme) =>({
        "hero-pattern": "url('./assets/pattern-bg.png')"
        
      })
    },
  },
  plugins: [],
  purge:[
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ]
}
