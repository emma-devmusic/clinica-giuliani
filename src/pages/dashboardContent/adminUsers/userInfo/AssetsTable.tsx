import { useEffect, useState } from 'react'
import { Searchbar } from '../../../../components/searchbar/Searchbar'
import { Spinner } from '../../../../components'
import { TableLayout } from '../../../../components/tables/TableLayout'
import { Pagination } from '../../../../components/pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { QueryObject } from '../../../../types'
import { setModal } from '../../../../store/slices/uiSlice'
import { columnsAssets } from '../modules/columns'
import { cleanSelectedAssets, deleteAsset, getAssets, toogleSelectAllAssets } from '../../../../store/slices/assetsSlice'
import { TableAssetsRow } from '../../../../components/tables/TableAssetsRow'
import { DeleteIcon } from '../../../../components/icons/DeleteIcon'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import { setUserActive } from '../../../../store/slices/usersSlice'



export const AssetsTable = () => {

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const { user, isAdmin } = useAppSelector(state => state.auth)
    // const { userActive } = useAppSelector(state => state.users)
    const { isLoading } = useAppSelector(state => state.ui)
    const { assets, assetsSelected } = useAppSelector(state => state.assets)
    const [queryObject, setQueryObject] = useState<QueryObject>({
        page: assets.page,
        term: ''
    });

    useEffect(() => {
        if(!isAdmin) dispatch(setUserActive(user))        
    },[])

    useEffect(() => {
        dispatch(cleanSelectedAssets())
        // if(userActive.dni) dispatch(getAssets({ query: {page: 1, term: ''}, id: userActive.id }))
    }, [])

    const handleDeleteSelected = () => {
        Swal.fire({
            title: `Eliminar ${assetsSelected.length} Archivos`,
            text: "Este proceso no puede revertirse. ¿Estás seguro de realizar esta acción?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                assetsSelected.forEach(item => {
                    dispatch(deleteAsset(item))
                });

            }
        });
    }

    const handleModalOpen = () => {
        dispatch(setModal({ content: 'new_asset', title: 'Nuevo Recibo', type: 'success' }))
    }

    return (
        <div>
            <div className="d-flex flex-column-reverse gap-2 flex-md-row justify-content-md-between align-items-md-end relative">
                <Searchbar queryObject={queryObject} setQueryObject={setQueryObject} action={getAssets} />
                {
                    !pathname.includes('assets') &&
                    <button className="btn btn-primary new-asset-button" onClick={handleModalOpen} style={{
                        position: 'absolute',
                        top: '6px',
                        right: '10px'
                    }}>Nuevo Recibo</button>
                }
            </div>
            {
                isLoading
                    ? <Spinner />
                    : assets.items?.length > 0
                        ? <TableLayout
                            items={assets.items}
                            itemsSelected={assetsSelected}
                            columns={columnsAssets}
                            toogleSelectAll={toogleSelectAllAssets}
                        >
                            {
                                assets.items.map(item =>
                                    <TableAssetsRow item={item} key={item.id} />
                                )
                            }
                        </TableLayout>
                        : <div>
                            <hr />
                            <p className="text-center my-5">No hay recibos registrados.</p>
                            <hr />
                        </div>

            }
            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-3'>
                <p className='my-2' style={{ fontSize: '.9rem' }}>Total seleccionados: <i className='text-primary'>{assetsSelected.length}</i></p>
                {
                    assetsSelected.length > 0 && (
                        <button className='btn btn-outline-danger pt-2' onClick={handleDeleteSelected} style={{
                            fontSize: '.9rem'
                        }}>
                            <DeleteIcon className='fs-6 mb-1' /> Eliminar Selección
                        </button>
                    )
                }
            </div>
            <Pagination setQueryObject={setQueryObject} queryObject={queryObject} action={getAssets} pagination={assets.page} forAssets />
        </div>
    )
}
