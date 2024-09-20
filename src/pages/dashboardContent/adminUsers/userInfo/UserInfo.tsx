import { useAppDispatch, useAppSelector } from "../../../../store/store";

export const UserInfo = () => {

    const { userActive } = useAppSelector(state=> state.users)

    return (
        <div>
            Información del Usuario
            <hr />
            <div>{JSON.stringify({...userActive})}</div>
        </div>
    );
};
