/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", // Adjust to match your project structure
    "./public/index.html",            // Include HTML files if applicable,
  ],
  theme: {
    extend: {
      width:{
        '500':'125rem',
        '120':'30rem'
      },
      spacing:{
        '120':'30rem'
      },
      fontFamily: {
        spartan: ["'League Spartan'", "sans-serif"], // Custom font alias
      },
    },
  },
  plugins: [],
  safelist:['bg-red-500','text-blue-500']
}