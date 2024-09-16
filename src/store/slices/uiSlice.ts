
import { PayloadAction, createSlice } from '@reduxjs/toolkit';




const initialState= {
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    }
});

export const {
    setLoading,
} = authSlice.actions;

export default authSlice.reducer;
