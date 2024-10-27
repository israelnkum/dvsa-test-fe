import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.tsx";
import Header from "./header.tsx";
import { useAppSelector } from "../hooks";
import { Affix } from "antd";
import PageCrumbs from "../components/page-crumbs.tsx";
import { useLocation } from "react-router";

export default function AppLayout() {
    const token = useAppSelector((state) => state.authSlice.token);

    const { pathname } = useLocation();

    if (!token) {
        window.location.replace("/login")
        return null;
    }

    return (
        <div className={'flex'}>
            <div className={'min-w-[250px] shadow-xl hidden md:block'}>
                <Affix offsetTop={0}>
                    <Sidebar/>
                </Affix>
            </div>
            <div className={'grow bg-gray-100'}>
                <Affix offsetTop={0}>
                    <Header/>
                </Affix>
                {
                    pathname !== "/dashboard" && <PageCrumbs/>
                }

                <div className={"p-5"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}