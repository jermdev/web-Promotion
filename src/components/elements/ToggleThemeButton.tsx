import { useEffect, useState } from "react";

export const ToggleThemeButton = (): JSX.Element => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        
        if (localStorage.theme === 'dark'  ) {
            document.documentElement.classList.add('dark');         
            document.documentElement.classList.add('stylesElementsDark');         
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.remove('stylesElementsDark');
        }

    }, [darkMode]);

    const toggleDarkMode = () => {

        setDarkMode(!darkMode);

        if ( darkMode ) {
            localStorage.theme = 'dark'            
        }else {
            localStorage.theme = 'light'
        }
    };

    return (
        <button onClick={toggleDarkMode} className="w-full hover:bg-slate-600">
            { localStorage.theme || 'light' }
        </button>
    )
}