
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { fetchData } from "../../services/fetchdata";
import { AxiosResponse } from "axios";
import { ItemSearchUserResponse, SearchUserResponse } from "../../types/response";
import { getUserById, getUsers, setPagination, setUserActive, setUsers } from "../slices/usersSlice";
import Swal from "sweetalert2";
// Middleware to handle authentication requests
export const usersMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);


        if (action.type === 'users/getUsers') {
            try {
                console.log('LLAMADA A LA API - GET USERS')
                const users: AxiosResponse<SearchUserResponse> = await fetchData(
                    'GET',
                    `admin/users?page=${action.payload.page}&term=${action.payload.term}`,
                    null);
                console.log(users)
                state.dispatch(setUsers([...users.data.items]))
                state.dispatch(setPagination({
                    limit: users.data.limit,
                    page: users.data.page,
                    total_items: users.data.total_items,
                    total_pages: users.data.total_pages,
                }))
            } catch (error: any) { Swal.fire('error', `${error}`, 'error'); }
        }

        if (action.type === 'users/getUserById') {
            try {
                const user: AxiosResponse<ItemSearchUserResponse> = await fetchData(
                    'GET',
                    `admin/users/${action.payload}`,
                    null);
                state.dispatch(setUserActive(user.data))
            } catch (error) { Swal.fire('error', `${error}`, 'error'); }
            state.dispatch(setLoading(false));

        }

        if (action.type === 'users/newUser') {
            try {
                state.dispatch(setLoading(true));
                console.log('LLAMADA A LA API - CREATE USER')
                await fetchData('POST', 'admin/users', action.payload);
                state.dispatch(getUsers({ page: 1, term: '' }));
                Swal.fire('Usuario Creado', 'Nuevo usuario cargado correctamente', 'success')
            } catch (error: any) {
                Swal.fire('Error', `${error.response.data.error} | No pueden existir 2 usuarios con el mismo teléfono, email o DNI`, 'error');
            }
            state.dispatch(setLoading(false));
        }


        if(action.type === 'users/updateUser') {
            console.log(action.payload)
            // return
            try {
                state.dispatch(setLoading(true));
                console.log('LLAMADA A LA API - UPDATE USER')
                await fetchData('PATCH', `admin/users/${action.payload.id}`, action.payload.data);
                state.dispatch(getUsers({ page: 1, term: '' }));
                Swal.fire('Usuario Actualizado', 'Usuario actualizado correctamente', 'success')
                state.dispatch(getUserById(action.payload.id))
            } catch (error: any) { Swal.fire('error', `${error}`, 'error'); }
            state.dispatch(setLoading(false));
        }


        if(action.type === 'users/deleteUser') {
            try {
                state.dispatch(setLoading(true));
                console.log('LLAMADA A LA API - DELETE USER')
                await fetchData('DELETE', `admin/users/${action.payload}`, null);
                state.dispatch(getUsers({ page: 1, term: '' }));
                Swal.fire('Usuario Eliminado', 'Usuario eliminado correctamente', 'success')
            } catch (error: any) { Swal.fire('error', `${error}`, 'error'); }
            state.dispatch(setLoading(false));
        }
    }
}


