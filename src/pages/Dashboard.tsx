import { Outlet, useNavigate } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import Session from "../classes/Session";
import { setUser } from "../store/slices/authSlice";

export const Dashboard = () => {

    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (user.name === '') {
            const userSession = new Session().getUserSession()
            if (userSession && userSession?.name !== '') {
                dispatch(setUser(userSession))
            } else {
                navigate('/login')
            }
        }
    }, [user])


    return (
        <>
            <DashboardLayout >
                <div className="content-container">
                    <Outlet />
                </div>
            </DashboardLayout>

        </>
    );
};
