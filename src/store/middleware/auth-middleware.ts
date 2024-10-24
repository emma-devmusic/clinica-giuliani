
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { clearAuth, setUser } from "../slices/authSlice";
import { fetchData } from "../../services/fetchdata";
import Swal from "sweetalert2";
import { AxiosResponse } from "axios";
import { UserProfile } from "../../types/redux-states";
import Session from "../../classes/Session";
import { cleanSelectedUsers, cleanUserActive } from "../slices/usersSlice";
import { cleanSelectedAssets, clearAssetsState } from "../slices/assetsSlice";


// Middleware to handle authentication requests
export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        if (action.type === 'auth/getUserProfile') {
            try {
                // state.dispatch(setLoading(true));
                const user: AxiosResponse<UserProfile> = await fetchData('GET', `${action.payload}/profile`, null)
                new Session().saveUserSession(user.data)
                state.dispatch(setUser({ ...user.data }))
                state.dispatch(setLoading(false));

            } catch (error: any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
                state.dispatch(setLoading(false));
            }
        }

        if (action.type === 'auth/logout') {
            try {
                state.dispatch(setLoading(true));
                await fetchData('POST', 'logout', null)
                state.dispatch(clearAuth())
                state.dispatch(cleanUserActive())
                state.dispatch(cleanSelectedUsers())
                state.dispatch(cleanSelectedAssets())
                state.dispatch(clearAssetsState())
                new Session().deleteSession()
                state.dispatch(setLoading(false));
            } catch (error: any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
                state.dispatch(setLoading(false));
            }
        }

    }
}


