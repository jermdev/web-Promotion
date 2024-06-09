import { Root } from "@/Root.tsx";
import { Dashboardlayout } from "@/app/Dashboard/Pages";
import { StudentsPages } from "@/app/Students/Pages";
import { HomePage } from "@/app/Home/Pages";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Dashboardlayout />,
                children: [
                    {
                        path: 'Home',
                        element: <HomePage />
                    },    
                    {
                        path: 'students',
                        element: <StudentsPages />
        
                    }
                ]
            },

        ]
    }
])