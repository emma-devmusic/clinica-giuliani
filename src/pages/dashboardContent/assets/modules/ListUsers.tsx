
import { useNavigate } from "react-router-dom";
import { cleanUserActive, setUserActive } from "../../../../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { ItemSearchUserResponse } from "../../../../types";

interface Props {
    items: ItemSearchUserResponse[]
}


export const ListUsers = ({ items }: Props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { userActive } = useAppSelector(state => state.users)

    const handleSelectUser = (user: ItemSearchUserResponse) =>{
        if(user.id === userActive.id){
            dispatch(cleanUserActive())
        } else {
            dispatch(setUserActive(user))
            navigate(`/dashboard/assets/${userActive.id}`)
        }

    } 
        
    

return (
    <div className="list-group">
        {
            items.map((user) => (
                <button key={user.id} className={`list-group-item list-group-item-action ${userActive.id === user.id && 'active'}`} onClick={() => handleSelectUser(user)}>
                    {user.name + " " + user.lastname}
                </button>
            ))
        }
    </div>
);
};
