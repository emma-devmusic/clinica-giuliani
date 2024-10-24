import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import './styles.css'




interface TableProps {
    columns: string[];
    children: ReactNode[] | ReactNode;
    items: any;
    itemsSelected: any;
    toogleSelectAll: any;
}



export const TableLayout = ({ columns, children, items, itemsSelected, toogleSelectAll }: TableProps) => {

    const dispatch = useAppDispatch()
    const { isAdmin } = useAppSelector(state => state.auth)
    const [allCheck, setAllCheck] = useState(false);

    useEffect(() => {
        (itemsSelected.length < items.length)
            ? setAllCheck(false)
            : setAllCheck(true);
    }, [itemsSelected])

    useEffect(() => {
        setAllCheck(false)
    }, [])

    const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
        setAllCheck(event.target.checked);
        dispatch(toogleSelectAll(event.target.checked));
    }

    return (
        <div style={{ overflow: 'auto' }}>
            <table className="table-cms table mt-4 mb-4" style={{ minWidth: '600px' }}>
                <thead>
                    <tr>
                        {
                            isAdmin &&
                            <th>
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
                        }
                        {
                            columns.map((column, index) => (
                                <th scope="col" key={index}>{column}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
};
