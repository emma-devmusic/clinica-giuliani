
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalState } from '../../types';


const initialState = {
    isLoading: false,
    modal: {
        type: 'info',
        title: '',
        content: '',
    }
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setModal(state, action: PayloadAction<ModalState>) {
            state.modal = action.payload;
            document.getElementById('click-modal')?.click()
        },
    }
});

export const {
    setLoading,
    setModal
} = authSlice.actions;

export default authSlice.reducer;
