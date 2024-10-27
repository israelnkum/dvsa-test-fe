import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar.tsx";
import Header from "./header.tsx";

export default function AppLayout() {
    return (
      <div className={'flex'}>
          <div className={'w-[300px] shadow-xl'}>
              <Sidebar/>
          </div>
          <div className={'grow bg-gray-100'}>
              <Header/>
              <div className={"p-5"}>
                  <Outlet/>
              </div>
          </div>
      </div>
    );
}