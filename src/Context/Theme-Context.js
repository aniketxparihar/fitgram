import { useContext, createContext, useState, useEffect } from "react";


const ThemeContext = createContext();
const ThemeProvider = (props) => {
    const [themeObject, setThemeObject] = useState({ primary: "var(--light)", text: "var(--dark)", secondary: "#1e293b" });
    const [theme, setTheme] = useState("dark");
    const themeHandler = (toggleTheme) => {
        setTheme(toggleTheme);
    }
    useEffect(() => {
        theme === "light" ? setThemeObject({ primary: "var(--light)", text: "var(--dark)", secondary: "#f1f5f9" }) : setThemeObject({ primary: "var(--dark)", text: "var(--light)", secondary: "#1e293b" })
    }, [theme])
    return (
        <ThemeContext.Provider value={{ themeObject, theme, themeHandler }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };