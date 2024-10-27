import {Menu} from "../types/common.ts";
import MenuLinks from "./menu-links.ts";

export const Menus: Menu[] = [
    {
        label: "Dashboard",
        path: MenuLinks.dashboard,
        icon: "dashboard"
    },
    {
        label: "Companies",
        path: MenuLinks.companies,
        icon: "company"
    },
    {
        label: "Vehicles",
        path: MenuLinks.vehicles,
        icon: "vehicle"
    },
]