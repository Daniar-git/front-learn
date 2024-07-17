import React, { createContext } from 'react'
import {theme} from "./theme";

type ThemeContextProvidersProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children}: ThemeContextProvidersProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}