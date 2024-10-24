
import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setLoading } from "../slices/uiSlice";
import Swal from "sweetalert2";
import { fetchData } from "../../services/fetchdata";
import { AxiosResponse } from "axios";
import { GetAssetsResponose } from "../../types";
import { getAssets, setAssets } from "../slices/assetsSlice";
import Session from "../../classes/Session";
// Middleware to handle assets requests
export const assetsMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);
        const session = new Session()
        const role = session.getRole().toLowerCase()
        if(action.type === 'assets/getAssets') {
            console.log(`assets?page=${action.payload.query.page}&${action.payload.query.term}`)
            const fetchToAssets = (role === 'admin') 
                ? `/admin/${action.payload.id}/assets?page=${action.payload.query.page}&${action.payload.query.term}`
                : `/employee/assets?page=${action.payload.query.page}&${action.payload.query.term}` 
            try {
                const resp:AxiosResponse<GetAssetsResponose> = await fetchData(
                    'GET',
                    fetchToAssets,
                    null
                )
                state.dispatch(setAssets(resp.data))
            } catch (error:any) {
                Swal.fire('Error', `${error.response}`, 'error')
            }
            state.dispatch(setLoading(false));
        }


        if(action.type === 'assets/deleteAsset') {
            try {
                state.dispatch(setLoading(true));
                await fetchData(
                    'DELETE',
                    `/admin/assets/${action.payload}`,
                    null
                )
                Swal.fire('Eliminado Exitosamente', `¡El Haber fue eliminado exitosamente!`,'success')
            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
            }
            state.dispatch(setLoading(false));
        }


        
        if(action.type === 'assets/newAsset') {
            const formData = new FormData();
            formData.append('file', action.payload.file)
            formData.append('user_id', action.payload.user_id)
            formData.append('period', action.payload.period)
            formData.append('asset_type', action.payload.asset_type)
            try {
                state.dispatch(setLoading(true));
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/upload_assets`, {
                    method: 'POST',
                    headers: { 'withCredentials': `true` },
                    body: formData,
                    credentials: 'include'
                });
                const data = await response.json();
                Swal.fire('Carga Exitosa', `¡La carga del Haber resultó exitosa!`, 'success')
                state.dispatch(getAssets({query: {term: '', page: 1}, id: data.user_id}))
            } catch (error:any) {
                Swal.fire('Error', `${error.response.message.error}`, 'error')
            }
            state.dispatch(setLoading(false));
        }

    }
}