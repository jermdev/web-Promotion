import { Root } from "@/Root.tsx";
import { Dashboard } from "@/app/pages/Dashboard";
import { FriendsPage } from "@/app/pages/FriendsPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'alumnos',
                element: <FriendsPage /> 

            }

        ]
    }
])