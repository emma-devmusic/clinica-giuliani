
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface AuthState {
    user: any;
    isAdmin: boolean;
    isAuthenticated: boolean;
}


const initialState:AuthState = {
    user: {},
    isAdmin: false,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login(state, action: PayloadAction< {email: string; password: string;} >) {},

        setUser(state, action: PayloadAction<{ username: string }>) {
            state.user = action.payload
            state.isAdmin = true;
            state.isAuthenticated = true;
        },

        clearAuth(state) {
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.user = {};
        },

        logout() {}
    }
});

export const {
    login,
    setUser,
    clearAuth,
    logout
} = authSlice.actions;

export default authSlice.reducer;
