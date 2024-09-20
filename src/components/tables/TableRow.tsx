// import { ReactNode } from "react";

import { ChangeEvent, useEffect, useState } from "react";
import { TableActions } from "./TableActions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setUserActive, toogleSelectUser } from "../../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../types";
import { flu } from "../../helpers/helpers";

interface Props {
    td: UserProfile;
}


export const TableRow = ({ td }: Props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { usersSelected } = useAppSelector(state => state.users)
    const [checked, setChecked] = useState(false);
    
    
    const editUser = (id: number) => {
        dispatch(setUserActive(td))
        navigate('/dashboard/admin-users/' + id)
    }
    useEffect(() => {
        setChecked(usersSelected.includes(td.id))
    }, [usersSelected])

    const handleCheckUser = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!e.target.checked)
        dispatch(toogleSelectUser({id: td.id}))
    }


    return (
        <tr>
            <td>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={checked}
                        onChange={handleCheckUser}
                        id="flexCheckDefault"
                    />
                </div>
            </td>
            <td>{td.id}</td>
            <td>{`${flu(td.name)} ${flu(td.lastname)}`}</td>
            <td>{td.email}</td>
            <td><TableActions handleEdit={() => editUser(td.id)} /></td>
        </tr>
    );
};
