import { createContext, useState } from "react"


export const ColorModeContext = createContext()

export const Theme = ({ children }) => {
    const [darkMode, setDarkMode, lightMode, setlightMode] = useState(0);

    const ToggleSwitch = () => {
        setDarkMode(!darkMode)
        setlightMode(!lightMode)
    }

    return (
        <ColorModeContext.Provider value={{ darkMode,lightMode, ToggleSwitch }}>
            {children}
        </ColorModeContext.Provider>
    )
    
}

