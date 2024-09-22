import { useParams } from "react-router-dom";
import { ContentLayout } from "../../../../components/dashboard/contents/ContentLayout";
import { AssetsTable } from "./AssetsTable";
import { UserCard } from "./UserCard";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { getUserById } from "../../../../store/slices/usersSlice";

export const UserInfo = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const { userActive } = useAppSelector(state => state.users)

    useEffect(() => {
        if (userActive.id === 0) {
            dispatch( getUserById(params.userId ?? '') )
        }
    }, [])

    return (
        <ContentLayout title="Información De Usuario">
            <div className="row">
                <div className="col-lg-8">
                    <h6 className="mt-2 mb-2">Haberes</h6>
                    <hr className="mb-4" />
                    <AssetsTable />
                </div>
                <div className="col-lg-4">
                    <UserCard />
                </div>
            </div>
        </ContentLayout>
    );
};
