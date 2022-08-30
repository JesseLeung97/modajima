import lightTheme from "./lightTheme.module.css";
import darkTheme from "./darkTheme.module.css";
import { createContext, FunctionalComponent } from "preact";
import { useContext, useLayoutEffect, useState } from "preact/hooks";

type TTheme = "light" | "dark";
type TThemeContext = { theme: {}; toggleTheme: () => void };

const ThemeContext = createContext<TThemeContext>(
    {} as TThemeContext
);

const useTheme = (): TThemeContext => {
    return useContext(ThemeContext);
}

const ThemeManager: FunctionalComponent = ({ children }) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [colorTheme, setColorTheme] = useState<TTheme>(prefersDark ? "dark" : "light");


    const switchTheme = () => {
        document.documentElement.classList.remove(colorTheme === "dark" ? darkTheme.dark_theme : lightTheme.light_theme);
        document.documentElement.classList.add(colorTheme === "dark" ? lightTheme.light_theme : darkTheme.dark_theme);
        setColorTheme(colorTheme === "dark" ? "light" : "dark");
    }

    useLayoutEffect(() => {
        document.documentElement.classList.add(prefersDark ? darkTheme.dark_theme : lightTheme.light_theme);
    }, [prefersDark]);

    return (
        <ThemeContext.Provider value={{theme: colorTheme, toggleTheme: switchTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {
    ThemeManager,
    useTheme
}