import { useEffect, useState } from "react";
import { ContentLayout } from "../../../../components/dashboard/contents/ContentLayout";
import { Searchbar } from "../../../../components/searchbar/Searchbar";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { QueryObject } from "../../../../types";
import { ListUsers } from ".././modules/ListUsers";
import { getUsers } from "../../../../store/slices/usersSlice";
import { Pagination } from "../../../../components/pagination/Pagination";


export const SelectingUser = () => {

    const { users, pagination } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const [queryObject, setQueryObject] = useState<QueryObject>({
        page: pagination.page,
        term: ''
    });

    useEffect(() => {
        if (users.length === 0) dispatch(getUsers(queryObject))
    }, [])


    return (
        <ContentLayout title="Selecciona un usuario para ver sus haberes">
            <div className="mb-4">
                <Searchbar 
                    queryObject={queryObject} 
                    setQueryObject={setQueryObject} 
                    action={getUsers} 
                />
            </div>
            <ListUsers items={users} />
            <div className="mt-4">
                <Pagination 
                    setQueryObject={setQueryObject} 
                    queryObject={queryObject} 
                    action={getUsers} 
                    pagination={pagination} 
                />
            </div>
        </ContentLayout>
    );
};
