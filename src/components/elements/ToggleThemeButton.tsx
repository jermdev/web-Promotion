import { useEffect, useState } from "react";

export const ToggleThemeButton = (): JSX.Element => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        
        if (localStorage.theme === 'dark'  ) {
            document.documentElement.classList.add('dark');      
        } else {
            document.documentElement.classList.remove('dark');
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
        <button onClick={toggleDarkMode} className="w-full hover:bg-primary-2000">
            { localStorage.theme || 'light' }
        </button>
    )
}