import { NavBar } from "@/components/elements/NavBar";
import { Outlet } from "react-router-dom";



export const Dashboardlayout = () => {

    return ( 
        <>
            <NavBar />
            <Outlet />
        </>
    )
};
