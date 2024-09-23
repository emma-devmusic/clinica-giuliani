import { useEffect, useState } from 'react'
import { Searchbar } from '../../../../components/searchbar/Searchbar'
import { Spinner } from '../../../../components'
import { TableLayout } from '../../../../components/tables/TableLayout'
import { TableRow } from '../../../../components/tables/TableRow'
import { Pagination } from '../../../../components/pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { QueryObject } from '../../../../types'
import { setModal } from '../../../../store/slices/uiSlice'
import { columnsAssets } from '../modules/columns'
import { useParams } from 'react-router-dom'

export const AssetsTable = () => {

    const dispatch = useAppDispatch()
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const { pagination } = useAppSelector(state => state.users)
    const [queryObject, setQueryObject] = useState<QueryObject>({
        page: pagination.page,
        term: ''
    });

    useEffect(() => {
        console.log('Traer Haberes del usuario: ' + params.userId)
    },[])


    const handleModalOpen = () => {
        dispatch(setModal({ content: 'new_user', title: 'Nuevo Usuario', type: 'success' }))
    }

    return (
        <div>
            <div className="d-flex flex-column-reverse gap-2 flex-md-row justify-content-md-between align-items-md-center">
                <Searchbar queryObject={queryObject} setQueryObject={setQueryObject} action={console.log} />
                <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo Recibo</button>
            </div>
            {
                isLoading
                    ? <Spinner />
                    : <TableLayout columns={columnsAssets} style={{
                        overflowX: 'hidden'
                    }}>

                        <tr>assets</tr>
                         
                    </TableLayout>
            }
            <Pagination setQueryObject={setQueryObject} queryObject={queryObject} action={console.log} pagination={pagination}/>
        </div>
    )
}
