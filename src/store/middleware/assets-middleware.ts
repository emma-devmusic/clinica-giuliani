
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import Swal from "sweetalert2";
// Middleware to handle assets requests
export const assetsMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        if(action.type === 'assets/getAssets') {
            try {
                state.dispatch(setLoading(true));

            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
            }
            state.dispatch(setLoading(false));
        }
        
    }
}