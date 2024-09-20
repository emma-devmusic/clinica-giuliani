
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { clearAuth, setUser } from "../slices/authSlice";
import { fetchData } from "../../services/fetchdata";
import Swal from "sweetalert2";
import { AxiosResponse } from "axios";
import { UserProfile } from "../../types/redux-states";
import Session from "../../classes/Session";

// Middleware to handle authentication requests
export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        if(action.type === 'auth/getUserProfile') {
            try {
                state.dispatch(setLoading(true));
                const user: AxiosResponse<UserProfile> = await fetchData('GET', 'admin/profile', null)
                new Session().saveUserSession(user.data)
                state.dispatch(setUser({...user.data}))
            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
            }
            state.dispatch(setLoading(false));
        }


        if (action.type === 'auth/logout') {
            try {
                state.dispatch(setLoading(true));
                await fetchData('POST', 'logout', null)
                state.dispatch( clearAuth() )
                new Session().deleteSession()
                location.replace('/login')
            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
            }
            state.dispatch(setLoading(false));
        }

    }
}


