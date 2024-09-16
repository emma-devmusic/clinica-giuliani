
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemSearchUserResponse } from '../../types/response';
import { UsersState } from '../../types/redux-states';




const initialState: UsersState = {
    users: [],
    userActive: {
        email: '',
        id: 0,
        role: '',
        username: ''
    },
    usersSelected: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers(state, action: PayloadAction<string | number>) { },
        
        setUsers(state, action: PayloadAction<ItemSearchUserResponse[]>) {
            state.users = action.payload
        },
    }
});

export const {
    getUsers,
    setUsers
} = usersSlice.actions;

export default usersSlice.reducer;
