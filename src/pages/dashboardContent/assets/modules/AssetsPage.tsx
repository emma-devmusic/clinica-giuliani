import { ContentLayout } from "../../../../components/dashboard/contents/ContentLayout";
import { useAppSelector } from '../../../../store/store';
import { AssetsTable } from "../../adminUsers/userInfo/AssetsTable";

export const AssetsPage = () => {

    const { userActive } = useAppSelector(state=> state.users)

    return (
        <ContentLayout title={`Lista de haberes de ${userActive.name} ${userActive.lastname}`}>
            <AssetsTable />
        </ContentLayout>
    );
};
