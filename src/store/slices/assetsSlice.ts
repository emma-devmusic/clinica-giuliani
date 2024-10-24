
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssetState, GetAssetsResponose, HaberesTypes, QueryObject } from '../../types';




const initialState: AssetState = {
    assets: {
        items: [],
        limit: 0,
        page: 1,
        total_items: 0,
        total_pages: 0,
    } as GetAssetsResponose,
    assetsSelected: []
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        getAssetsById(state, action: PayloadAction<string | number>) {
            console.log(state, action)
        },

        getAssets(state, action: PayloadAction<{ query: QueryObject, id: number }>) {
            console.log(state, action)
        },

        setAssets(state, action: PayloadAction<GetAssetsResponose>) {
            state.assets = action.payload
        },

        newAsset(state, action: PayloadAction<{ file: File | null, user_id: number, period: string, asset_type: HaberesTypes | '' }>) {
            console.log(state, action)
        },

        deleteAsset(state, action: PayloadAction<number>) {
            console.log(state, action)
        },

        cleanSelectedAssets(state) {
            state.assetsSelected = []
        },

        clearAssetsState(state) {
            state.assets = {} as GetAssetsResponose;
            state.assetsSelected = []
        },

        toogleSelectAsset(state, action: PayloadAction<{ id: number }>) {

            if (state.assetsSelected.includes(action.payload.id)) {
                state.assetsSelected = state.assetsSelected.filter(assetId => assetId !== action.payload.id)
            } else {
                state.assetsSelected = [...state.assetsSelected, action.payload.id]
            }
        },

        toogleSelectAllAssets(state, action: PayloadAction<boolean>) {
            state.assetsSelected = action.payload
                ? state.assets.items.map(asset => asset.id)
                : []
        },
    }
});

export const {
    getAssetsById,
    getAssets,
    setAssets,
    deleteAsset,
    cleanSelectedAssets,
    newAsset,
    clearAssetsState,
    toogleSelectAsset,
    toogleSelectAllAssets
} = assetsSlice.actions;

export default assetsSlice.reducer;
