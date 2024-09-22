import { useEffect, useState } from "react";
import { ContentLayout } from "../../../components/dashboard/contents/ContentLayout";
import { TableLayout } from "../../../components/tables/TableLayout";
import { TableRow } from "../../../components/tables/TableRow";
import { columnsUsers } from "./modules/columns";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getUsers } from "../../../store/slices/usersSlice";
import { Searchbar } from "../../../components/searchbar/Searchbar";
import { Pagination } from "../../../components/pagination/Pagination";
import { setModal } from "../../../store/slices/uiSlice";
import { QueryObject } from "../../../types";
import { Spinner } from "../../../components";



export const AdminUsers = () => {

    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { users, pagination } = useAppSelector(state => state.users)
    
    const [queryObject, setQueryObject] = useState<QueryObject>({
        page: pagination.page,
        term: ''
    });

    useEffect(() => {
        if (users.length === 0) dispatch(getUsers(queryObject))
    }, [])

    // useEffect(() => {
    //     if (users.length === 0) setIsLoading(true)
    //     if (users.length !== 0) setIsLoading(false)
    // }, [users])


    const handleModalOpen = () => {
        dispatch(setModal({ content: 'new_user', title: 'Nuevo Usuario', type: 'success' }))
    }


    return (
        <ContentLayout title="Administrar Usuarios" >
            <div className="d-flex flex-column-reverse gap-2 flex-md-row justify-content-md-between align-items-md-center">
                <Searchbar queryObject={queryObject} setQueryObject={setQueryObject} action={getUsers}/>
                <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo Usuario</button>
            </div>
            {
                isLoading
                    ? <Spinner />
                    : <TableLayout columns={columnsUsers()} style={{
                        overflowX: 'hidden'
                    }}>
                        {
                            users.map((user, index) => (
                                <TableRow key={index} td={user} />
                            ))
                        }
                    </TableLayout>
            }
            <Pagination setQueryObject={setQueryObject} queryObject={queryObject} action={getUsers}/>
        </ContentLayout>
    );
};
