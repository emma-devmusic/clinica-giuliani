import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toogleSelectAll } from "../../store/slices/usersSlice";
import './styles.css'




interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    columns: string[];
    children: ReactNode[] | ReactNode;
}



export const TableLayout = (props: TableProps) => {

    const dispatch = useAppDispatch()
    const { users, usersSelected } = useAppSelector(state => state.users)
    const [allCheck, setAllCheck] = useState(false);

    useEffect(() => {
        (usersSelected.length < users.length)
            ? setAllCheck(false)
            : setAllCheck(true);
    }, [usersSelected])


    const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
        setAllCheck(event.target.checked);
        dispatch(toogleSelectAll(event.target.checked));
    }

    return (
        <div style={{overflowX: 'auto'}}>
            <table className="table-cms table mt-4 mb-4" {...props}>
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={allCheck}
                                    id="flexCheckDefault"
                                    onChange={handleCheckAll}
                                />
                            </div>
                        </th>
                        {
                            props.columns.map((column, index) => (
                                <th scope="col" key={index}>{column}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    );
};
