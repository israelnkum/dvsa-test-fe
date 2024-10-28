import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import AppLayout from "./routes/app-layout.tsx";
import ErrorPage from "./error-page.tsx";
import Companies from "./pages/companies.tsx";
import Vehicles from "./pages/vehicles.tsx";
import MenuLinks from "./utils/menu-links.ts";
import Dashboard from "./pages/dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./utils/api.ts";
import { persistor, store } from "./state/store.ts";
import Login from "./pages/auth/login.tsx";
import ParkingBays from "./pages/parking-bays/parking-bays.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: "",
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
            {
                path: MenuLinks.parkingBays,
                element: <ParkingBays/>
            },
        ]
    },
]);

injectStore(store);

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
    // </StrictMode>,
);
