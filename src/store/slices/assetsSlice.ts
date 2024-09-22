
import { createSlice, PayloadAction } from '@reduxjs/toolkit';




const initialState = {
    assets: [],
    assetsSelected: []
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        getAssetsById(state, action:PayloadAction<string | number>) {},

        // toogleSelectAssets(state, action: PayloadAction<{ id: number }>) {

        //     if(state.assetsSelected.includes(action.payload.id)){
        //         state.assetsSelected = state.assetsSelected.filter(userId => userId !== action.payload.id)
        //     } else {
        //         state.assetsSelected = [...state.assetsSelected, action.payload.id]
        //     }
        // },
    }
});

export const {
    getAssetsById
} = assetsSlice.actions;

export default assetsSlice.reducer;
