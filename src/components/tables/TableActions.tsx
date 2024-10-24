import { EditIcon } from "../icons";
import { DeleteIcon } from "../icons/DeleteIcon";

interface Props {
    handleEdit: (key: any) => void;
    handleDelete: (key: any) => void;
}

export const TableActions = ({handleEdit, handleDelete}:Props) => {

    return (
        <div className="">
            <EditIcon onClick={handleEdit} className="table-actions fs-5" style={{
                cursor: "pointer",
                marginLeft: "10px",
            }}/>
            <DeleteIcon onClick={handleDelete} className="table-actions fs-5 text-danger" style={{
                cursor: "pointer",
                marginLeft: "10px",
            }}/>
        </div>
    );
};
