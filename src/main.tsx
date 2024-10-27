import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import AppLayout from "./routes/app-layout.tsx";
import ErrorPage from "./error-page.tsx";
import Companies from "./pages/companies.tsx";
import Vehicles from "./pages/vehicles.tsx";
import MenuLinks from "./utils/menu-links.ts";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: MenuLinks.dashboard,
                element: <Dashboard/>
            },
            {
                path: MenuLinks.companies,
                element: <Companies/>
            },
            {
                path: MenuLinks.vehicles,
                element: <Vehicles/>
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
