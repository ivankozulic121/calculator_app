/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", // Adjust to match your project structure
    "./public/index.html",            // Include HTML files if applicable,
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        textC: "var(--text-color)",
        button: "var(--button-color)",
        boxShadow:"var(--box-shadow)",
        toggle:"var(--toggle)",
        body:"var(--body-color)",
        header:"var(--header-color)",
        buttonContainer:"var(--button-container-color)",
      },
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