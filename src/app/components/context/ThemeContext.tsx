"use client"
import { PropsWithChildren, createContext, useContext, useState } from "react";
// define the props
export type Themes = "dark" | "light" ;
export type ThemeState = {
    theme: Themes;
    setTheme(theme: Themes): void;
};

// 1. create a context with ThemeState and initialize it to null
export const ThemeContext = createContext<ThemeState | null>(null);

const useTheme = (): ThemeState => {
    // 2. use the useContext hook
    const context = useContext(ThemeContext);

    // 3. Make sure it's not null!
    if (!context) {
        throw new Error("Please use ThemeProvider in parent component");
    }

    return context;
};

export const ThemeContextProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState<Themes>("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default useTheme;
