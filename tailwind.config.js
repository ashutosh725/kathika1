/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '4rem',
         
        },  
      },
      colors: {
        // primary: "#2596be",
        // secondary: "#5ce1e6",
        // heading: "#01173c",
        body: "#efe7da",
      },
      fontFamily: {
        Yeseva: ['Yeseva One', 'serif'],
        Alice:  ['Heebo', 'serif'],
       
      
        
      },
    },
  },
  plugins: [],
};
