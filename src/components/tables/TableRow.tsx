// import { ReactNode } from "react";

import { TableActions } from "./TableActions";

interface Props {
    td: any;
}


export const TableRow = ({ td }: Props) => {

    const editUser = (id: number) => {
        console.log('Editando usuario', id);
    }

    return (
        <tr>
            <td>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                </div>
            </td>
            <td>{td[0]}</td>
            <td>{td[1]}</td>
            <td>{td[2]}</td>
            <td><TableActions handleEdit={editUser} /></td>
        </tr>
    );
};
