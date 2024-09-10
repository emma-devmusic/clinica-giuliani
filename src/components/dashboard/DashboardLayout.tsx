import { ReactNode, useRef } from "react";
import { SidebarDashboard } from "./sidebar/SidebarDashboard";
import './styles.css';
import { NavbarDashboard } from "./navbar/NavbarDashboard";
import { FooterDashboard } from "./footer/FooterDashboard";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {

    const refLayout = useRef<HTMLDivElement>(null)

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
