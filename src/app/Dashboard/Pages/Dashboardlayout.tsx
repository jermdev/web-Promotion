import { Outlet } from "react-router-dom";



export const Dashboardlayout = () => {

    return ( 
        <>
            <div className=" w-full flex items-center ">

                <h1>Navegador</h1>
            </div>
            <Outlet />
        </>
    )
};
