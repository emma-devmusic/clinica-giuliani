import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import Session from "../classes/Session";
import { setUser } from "../store/slices/authSlice";

export const Dashboard = () => {

    const { user } = useAppSelector(state=>state.auth)
    const { isLoading } = useAppSelector(state=>state.ui)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!isLoading){
            if(user.id === undefined) {
              const userInSession = new Session().getUserSession()
              if(typeof userInSession !== 'undefined') {
                dispatch( setUser( userInSession ) )
              }
            }
        }
      }, [])


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
