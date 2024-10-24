// import { ReactNode } from "react";

import { ChangeEvent, useEffect, useState } from "react";
import { TableActions } from "./TableActions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteUser, setUserActive, toogleSelectUser } from "../../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../types";
import { flu } from "../../helpers/helpers";
import Swal from "sweetalert2";
import { getAssets } from "../../store/slices/assetsSlice";

interface Props {
    td: UserProfile;
}


export const TableRow = ({ td }: Props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isAdmin } = useAppSelector(state => state.auth)
    const { usersSelected } = useAppSelector(state => state.users)
    const [checked, setChecked] = useState(false);


    const editUser = (id: number) => {
        dispatch(setUserActive(td))
        navigate('/dashboard/admin-users/' + id)
        dispatch(getAssets({ query: {page: 1, term: ''}, id: td.id }))
    }
    const deleteUserById = (id: number) => {
        Swal.fire({
            title: "Eliminar Usuario",
            text: "Este proceso no puede revertirse. ¿Estás seguro de realizar esta acción?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id))
            }
        });
    }
    useEffect(() => {
        setChecked(usersSelected.includes(td.id))
    }, [usersSelected])

    const handleCheckUser = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!e.target.checked)
        dispatch(toogleSelectUser({ id: td.id }))
    }


    return (
        <tr>
            {
                isAdmin &&
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
            }
            <td>{td.id}</td>
            <td>{`${flu(td.name)} ${flu(td.lastname)}`}</td>
            <td>{td.email}</td>
            <td>
                <TableActions
                    handleEdit={() => editUser(td.id)}
                    handleDelete={() => deleteUserById(td.id)}
                />
            </td>
        </tr>
    );
};
