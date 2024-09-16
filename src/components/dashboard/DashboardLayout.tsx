import { ReactNode, useRef } from "react";
import { SidebarDashboard } from "./sidebar/SidebarDashboard";
import { NavbarDashboard } from "./navbar/NavbarDashboard";
import { FooterDashboard } from "./footer/FooterDashboard";
import { useAppSelector } from "../../store/store";
import { Spinner } from "../spinner/Spinner";
import './styles.css';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {

    const { isLoading } = useAppSelector(state => state.ui)
    const refLayout = useRef<HTMLDivElement>(null)


    if (isLoading) return <Spinner />
    return (
        <div className="dashboard show-sidebar" ref={refLayout}>
            <NavbarDashboard refLayout={refLayout} />
            <div className="d-flex h-100">
                <SidebarDashboard />
                <div className="w-100 content-dashboard">
                    {children}
                    <FooterDashboard />
                </div>
            </div>
        </div>
    );
};
