
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { clearAuth, setUser } from "../slices/authSlice";

// Middleware to handle authentication requests
export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        if (action.type === 'auth/login') {
            state.dispatch( setLoading(true) );
            setTimeout(() => {
                state.dispatch( setUser({ username: action.payload.email }))
                state.dispatch( setLoading(false) );
            }, 2000)

        }

        if (action.type === 'auth/logout') {
            state.dispatch( setLoading(true) );
            setTimeout(() => {
                state.dispatch( clearAuth() )
                location.replace('/login')
                state.dispatch( setLoading(false) );
            }, 2000)
        }

    }
}


