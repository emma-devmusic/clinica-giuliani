import { ReactNode } from "react";
import './styles.css'




interface TableProps {
    columns: string[];
    children: ReactNode[] | ReactNode;
}



export const TableLayout = ({ columns, children }: TableProps) => {

    return (
        <table className="table-cms table ">
            <thead>
                <tr>
                    <th scope="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                    </th>
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
    );
};
