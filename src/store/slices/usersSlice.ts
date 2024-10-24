
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemSearchUserResponse } from '../../types/response';
import { UserPagination, UserProfile, UsersState } from '../../types/redux-states';
import { NewUserInputsForm, QueryObject } from '../../types';




const initialState: UsersState = {
    users: [],
    pagination: {
        limit: 0,
        page: 1,
        total_items: 10,
        total_pages: 10,
    },
    userActive: {
        email: '',
        id: 0,
        role: '',
        dni: '',
        lastname: '',
        name: '',
        phone: '',
    },
    usersSelected: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers(state, action: PayloadAction<QueryObject>) { 
            console.log(state, action)
         },

        getUserById(state, action:PayloadAction<string>) { 
            console.log(state, action)
         },

        setUsers(state, action: PayloadAction<ItemSearchUserResponse[]>) {
            state.users = action.payload
        },

        setUserActive(state, action: PayloadAction<UserProfile>){
            state.userActive = {...action.payload }
        },

        newUser(state, action:PayloadAction<NewUserInputsForm>){
            console.log(state, action)
        },

        deleteUser(state, action: PayloadAction<number>) {
            console.log(state, action)
        },

        setPagination(state, action: PayloadAction<UserPagination>){
            state.pagination = { ...action.payload }
        },

        updateUser(state, action: PayloadAction<{id: number, data:NewUserInputsForm}>) {
            console.log(state, action)
        },

        cleanUserActive(state){
            state.userActive = {
                email: '',
                id: 0,
                role: '',
                dni: '',
                lastname: '',
                name: '',
                phone: '',
            }
        },

        cleanSelectedUsers(state) {
            state.usersSelected = []
        },

        toogleSelectUser(state, action: PayloadAction<{ id: number }>) {

            if(state.usersSelected.includes(action.payload.id)){
                state.usersSelected = state.usersSelected.filter(userId => userId !== action.payload.id)
            } else {
                state.usersSelected = [...state.usersSelected, action.payload.id]
            }
        },

        toogleSelectAllUsers(state, action: PayloadAction<boolean>) {
            state.usersSelected = action.payload
                ? state.users.map(user => user.id)
                : []
        },
    }
});

export const {
    getUsers,
    getUserById,
    setUsers,
    newUser,
    deleteUser,
    setUserActive,
    setPagination,
    updateUser,
    cleanUserActive,
    cleanSelectedUsers,
    toogleSelectUser,
    toogleSelectAllUsers
} = usersSlice.actions;

export default usersSlice.reducer;
