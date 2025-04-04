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
        output: "var(--output)",
        outputBg: "var(--output--bg)",
        outputText: "var(--output-text)",
        button_num: "var(--button-num-color)",
        button_text:"var(--button-text-color)",
        button_equal:"var(--button-equal)",
        boxShadow:"var(--box-shadow)",
        toggle:"var(--toggle)",
        body:"var(--body-color)",
        header:"var(--header-color)",
        buttonContainer:"var(--button-container)",
        buttonColorGroupOne: "var(--button-color-group-one)",
        buttonColorGroupTwo: "var(--button-color-group-two)",
        buttonColorGroupThree: "var(--button-color-group-three)",
        outColor:"var(--out-color)"
        
      
      },
      boxShadow:{
        'text': 'var(--box-shadow-text)',
        'number': 'var(--box-shadow-number)',
        'equal': 'var(--box-shadow-equal)'
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