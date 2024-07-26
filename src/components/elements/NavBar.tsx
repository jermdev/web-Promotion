import { NavLink } from "react-router-dom";
import { ToggleThemeButton } from "./ToggleThemeButton";
 
export const NavBar = (): JSX.Element => {
    return (

        <div className="container text-slate-100 flex justify-center h-full bg-slate-500 rounded-bl-lg rounded-br-lg mb-2">
            
            <div>

                <header className="flex justify-center mt-1">
                    <h1>Promocion 5C JESUS - SE</h1>
                </header>

                <ToggleThemeButton />

                <nav className="flex justify-around my-1">

                    <NavLink 
                    to="/Home"
                    className={({isActive})=> 
                        isActive ? "active": ""
                    }
                    >Home</NavLink>
                    <NavLink to="/students">students</NavLink>

                </nav>

            </div>

        </div>
    );
}
 