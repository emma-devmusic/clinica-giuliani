
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import { fetchData } from "../../services/fetchdata";
import { AxiosResponse } from "axios";
import { SearchUserResponse } from "../../types/response";
import { setUsers } from "../slices/usersSlice";
import Swal from "sweetalert2";
// Middleware to handle authentication requests
export const usersMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);


        if(action.type === 'users/getUsers') {
            try {
                state.dispatch( setLoading(true));
                console.log('LLAMADA A LA API - GET USERS')
                const users: AxiosResponse<SearchUserResponse> = await fetchData( 'GET', `admin/users?page=${action.payload}`, null );
                console.log(users)
                state.dispatch( setUsers([...users.data.items]))
            } catch (error:any) {
                Swal.fire('error', `${error}`, 'error');
            }
            state.dispatch( setLoading(false));
        }

        
    }
}


