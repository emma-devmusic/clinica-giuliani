
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { clearAuth } from "../slices/authSlice";
import { fetchData } from "../../services/fetchdata";
import Swal from "sweetalert2";

// Middleware to handle authentication requests
export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        // if (action.type === 'auth/login') {
        //     state.dispatch(setLoading(true));
        //     try {
        //         const loginResp: AxiosResponse<LoginResponse> = await fetchData('POST', 'login', action.payload)
        //         state.dispatch(setUser({ username: action.payload.username, user_id: loginResp.data.user_id }))
        //     } catch (error) {
        //         Swal.fire('Error', `${error}`, 'error')
        //         location.replace('/login')
        //     }
        //     state.dispatch(setLoading(false));
        // }

        if (action.type === 'auth/logout') {
            try {
                state.dispatch(setLoading(true));
                await fetchData('POST', 'logout', null)
                state.dispatch( clearAuth() )
                location.replace('/login')
            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
                state.dispatch(setLoading(false));
            }
        }

    }
}


