import {NavLink} from "react-router-dom";
import {Menus} from "../utils/menus.ts";
import {Menu} from "../types/common.ts";
import {ContainerOutlined, DashboardOutlined, TruckOutlined} from "@ant-design/icons";

const Icons = {
    company: <ContainerOutlined/>,
    dashboard: <DashboardOutlined />,
    vehicle: <TruckOutlined/>
}

export default function Sidebar() {
    return (
      <div className={"bg-white h-svh relative"}>
          <div className={"text-center p-5"}>
              <h3 className={"font-bold text-3xl"}>DVSA <span className={'font-light'}>Test</span></h3>
          </div>
        <div className={"py-5"}>
            <div className={"flex flex-col"}>
                {
                    Menus.map((menu: Menu, index) => (
                        <NavLink
                            className={({ isActive }) => isActive ? "menu-item-active" : "menu-item"}
                            key={index} to={menu.path}>
                            {menu.icon && Icons[menu.icon]}
                            {menu.label}
                        </NavLink>
                    ))
                }
            </div>
        </div>
          <div className={"logout"}>
              LOGOUT
          </div>
      </div>
    );
}