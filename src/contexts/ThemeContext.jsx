import { createContext, useContext, useState, useEffect } from "react";

// Define themes with element-specific colors
const themes = {
    first: {// Lighter Blue
        "--background": "#F9FAFB", // Light Gray
        "--text-color": "#F9FAFB", // Black text
        "--button-color": "#3B82F6",
        "--box-shadow":"#FDF2F8",
        "--body-color": "#111827"
    },
    second: {
         // Darker Yellow
        "--background": "#1E293B", // Dark Gray
        "--text-color": "#E11D48", // White text
        "--button-color": "#F59E0B",
        "--box-shadow":"#FDF2F8",
        "--toggle": "#FDF2F8",
        "--body-color": "#F59E0B"
    },
    third: {
         // Dark Pink
        "--background": "#FDF2F8", // Light Pink
        "--text-color": "#831843", // Dark Purple Text
        "--button-color": "#E11D48",
        "--box-shadow":"#FDF2F8",
        "--body-color": "#E11D48"
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