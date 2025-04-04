import { createContext, useContext, useState, useEffect } from "react";

// Define themes with element-specific colors
const themes = {
    first: {// Lighter Blue
        "--background": "#F9FAFB", // Light Gray
        "--text-color": "#F9FAFB",
        "--output":"#181F32",// Black text
        "--output-text":"#FFFFFF",
        "--button-num-color": "#EAE3DB",
        "--button-text-color": "#647298",
        "--button-equal": "#D13F30",
        "--box-shadow":"#FDF2F8",
        "--body-color": "#3B4664",
        "--button-container": "#252D44",
        "--button-color-group-one": "#3D4450",
        "--button-color-group-two": "#FFFFFF",
        "--button-color-group-three":"#FFFFFF",
        "--box-shadow-text":"0 3px 0px 0px #414F76",
        "--box-shadow-number":"0 3px 0px 0px #A09C99",
        "--box-shadow-equal": "0 3px 0 0 #842C25",
        "--out-color": "#FFFFFF"


    },
    second: {
         // Darker Yellow
        "--background": "#1E293B", // Dark Gray
        "--text-color": "#E11D48",
        "--output":"#EFEFEF", ////  White text
        "--output-text":"#3D4450",
        "--button-num-color": "#EAE3DB",
        "--button-text-color": "#3A8288",
        "--button-equal": "#C85400",
        "--box-shadow":"#FDF2F8",
        "--toggle": "#FDF2F8",
        "--body-color": "#E7E7E7",
        "--button-container": "#D4CDCD",
        "--button-color-group-one":"#3A3935",
        "--button-color-group-two": "#FFFFFF",
        "--button-color-group-three":"#FFFFFF",
        "--box-shadow-text":"0 3px 0px 0px #306B70",
        "--box-shadow-number": "0 3px 0 0 #A09C99",
        "--box-shadow-equal": "0 3px 0 0 #8D410A",
        "--out-color": "#3A3935"


    },
    third: {
         // Dark Pink
        "--background": "#FDF2F8", // Light Pink
        "--text-color": "#831843",
        "--output":"#1D0836", // Dark Purple Text
        "--output-text":"#EFDF5A",
        "--button-num-color": "#331A4E",
        "--button-text-color": "#56077D",
        "--button-equal": "#00DFCC",
        "--box-shadow":"#FDF2F8",
        "--body-color": "#170629",
        "--button-container": "#1D0838",
        "--button-color-group-one":"#EFDF5A",
        "--button-color-group-two": "#E7E7E7",
        "--button-color-group-three": "#000000",
        "--box-shadow-text":"0 3px 0px 0px #A421D2",
        "--box-shadow-number":"0 3px 0px 0px #A421D2",
        "--box-shadow-equal": "0 3px 0 0 #70F2F2",
        "--out-color": "#EFDF5A"

    },
};

// Create a context
const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {},
});

// Provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("first");

    // Apply theme when it changes
    useEffect(() => {
        const root = document.documentElement;
        const selectedTheme = themes[theme];

        Object.keys(selectedTheme).forEach((key) => {
            root.style.setProperty(key, selectedTheme[key]);
        });

        //localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for consuming the theme
export const useTheme = () => useContext(ThemeContext);