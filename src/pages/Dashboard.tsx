import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export const Dashboard = () => {
    return (
        <>
            <DashboardLayout >
                <div className="container content-container">
                    <Outlet />
                </div>
            </DashboardLayout>
            
        </>
    );
};
