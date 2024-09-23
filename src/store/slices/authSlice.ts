
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserProfile } from '../../types/redux-states';


export interface AuthState {
    user: UserProfile;
    isAdmin: boolean;
    isAuthenticated: boolean;
}


const initialState:AuthState = {
    user: {
        dni: '',
        email: '',
        id: 0,
        lastname: '',
        name: '',
        phone: '',
        role: ''
    } as UserProfile,
    isAdmin: false,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        getUserProfile() {},

        setUser(state, action: PayloadAction<UserProfile>) {
            state.user = action.payload
            state.isAdmin = action.payload.role === 'admin'
            state.isAuthenticated = true;
        },

        clearAuth(state) {
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.user = initialState.user;
        },

        logout() {}
    }
});

export const {
    getUserProfile,
    setUser,
    clearAuth,
    logout
} = authSlice.actions;

export default authSlice.reducer;
