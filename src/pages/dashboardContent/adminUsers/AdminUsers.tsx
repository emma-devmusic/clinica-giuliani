import { useEffect, useState } from "react";
import { ContentLayout } from "../../../components/dashboard/contents/ContentLayout";
import { TableLayout } from "../../../components/tables/TableLayout";
import { TableRow } from "../../../components/tables/TableRow";
import { columnsUsers } from "./modules/columnsUsers";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getUsers } from "../../../store/slices/usersSlice";
import { Spinner } from "../../../components";

export const AdminUsers = () => {

    const dispatch = useAppDispatch()
    const { users } = useAppSelector(state => state.users)
    const { isLoading } = useAppSelector(state => state.ui)
    const [wasFetch, setWasFetch] = useState(false)


    useEffect(() => {
        if(users.length === 0 && !wasFetch){
            dispatch(getUsers(1))
            setWasFetch(true)
        }
    },[wasFetch])


    
    if(isLoading) return <Spinner />
    return (
        <ContentLayout title="Administrar Usuarios">

            <TableLayout columns={columnsUsers()}>
                <TableRow td={['hola', 'como', 'estan']} />
                <TableRow td={['hola', 'como', 'estan']} />
                <TableRow td={['hola', 'como', 'estan']} />
            </TableLayout>
            
        </ContentLayout>
    );
};
