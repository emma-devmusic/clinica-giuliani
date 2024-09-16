
import { PayloadAction, createSlice } from '@reduxjs/toolkit';




const initialState= {
    assets: [],
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        
    }
});

export const {
} = assetsSlice.actions;

export default assetsSlice.reducer;
