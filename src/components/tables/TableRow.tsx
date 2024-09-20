// import { ReactNode } from "react";

import { ChangeEvent, useEffect, useState } from "react";
import { TableActions } from "./TableActions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toogleSelectUser } from "../../store/slices/usersSlice";

interface Props {
    td: any;
}


export const TableRow = ({ td }: Props) => {

    const editUser = (id: number) => {
        console.log('Editando usuario', id);
    }

    const dispatch = useAppDispatch()
    const { usersSelected } = useAppSelector(state => state.users)
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        setChecked(usersSelected.includes(td[0]))
    }, [usersSelected])

    const handleCheckUser = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!e.target.checked)
        dispatch(toogleSelectUser({id: td[0]}))
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
            <td>{td[0]}</td>
            <td>{td[1]}</td>
            <td>{td[2]}</td>
            <td><TableActions handleEdit={editUser} /></td>
        </tr>
    );
};
