import { useEffect, useState } from "react";
import { ContentLayout } from "../../../components/dashboard/contents/ContentLayout";
import { TableLayout } from "../../../components/tables/TableLayout";
import { TableRow } from "../../../components/tables/TableRow";
import { columnsUsers } from "./modules/columns";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { cleanSelectedUsers, cleanUserActive, deleteUser, getUsers, toogleSelectAllUsers } from "../../../store/slices/usersSlice";
import { Searchbar } from "../../../components/searchbar/Searchbar";
import { Pagination } from "../../../components/pagination/Pagination";
import { setModal } from "../../../store/slices/uiSlice";
import { QueryObject } from "../../../types";
import { Spinner } from "../../../components";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import Swal from "sweetalert2";



export const AdminUsers = () => {

    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { users, pagination, usersSelected } = useAppSelector(state => state.users)

    const [queryObject, setQueryObject] = useState<QueryObject>({
        page: pagination.page,
        term: ''
    });

    useEffect(() => {
        dispatch(cleanSelectedUsers())
        if (users.length === 0) dispatch(getUsers(queryObject))
    }, [])

    useEffect(() => {
        if (users.length === 0) setIsLoading(true)
        if (users.length !== 0) setIsLoading(false)
    }, [users])

    const handleDeleteSelected = () => {
        Swal.fire({
            title: `Eliminar ${usersSelected.length} Usuarios`,
            text: "Este proceso no puede revertirse. ¿Estás seguro de realizar esta acción?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                usersSelected.forEach(item => {
                    dispatch(deleteUser(item))
                });

            }
        });
    }

    const handleNewUser = () => {
        dispatch(cleanUserActive())
        dispatch(setModal({ content: 'new_user', title: 'Nuevo Usuario', type: 'success' }))
    }


    return (
        <ContentLayout title="Administrar Usuarios" >
            <div className="d-flex flex-column-reverse gap-2 flex-md-row justify-content-md-between align-items-md-center">
                <Searchbar queryObject={queryObject} setQueryObject={setQueryObject} action={getUsers} />
                <button className="btn btn-primary" onClick={handleNewUser}>Nuevo Usuario</button>
            </div>
            {
                isLoading
                    ? <Spinner />
                    : <TableLayout
                        items={users}
                        itemsSelected={usersSelected}
                        columns={columnsUsers()}
                        toogleSelectAll={toogleSelectAllUsers}
                    >
                        {
                            users.map((user, index) => (
                                <TableRow key={index} td={user} />
                            ))
                        }
                    </TableLayout>
            }
            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-3'>
                <p className='my-2' style={{ fontSize: '.9rem' }}>Total seleccionados: <i className='text-primary'>{usersSelected.length}</i></p>
                {
                    usersSelected.length > 0 && (
                        <button className='btn btn-outline-danger pt-2' onClick={handleDeleteSelected} style={{
                            fontSize: '.9rem'
                        }}>
                            <DeleteIcon className='fs-6 mb-1' /> Eliminar Selección
                        </button>
                    )
                }
            </div>
            <Pagination setQueryObject={setQueryObject} queryObject={queryObject} action={getUsers} pagination={pagination} />
        </ContentLayout>
    );
};
