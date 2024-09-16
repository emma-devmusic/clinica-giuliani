import { EditIcon } from "../icons";

interface Props {
    handleEdit: (key: any) => void;
}

export const TableActions = ({handleEdit}:Props) => {

    return (
        <div className="">
            <EditIcon onClick={handleEdit} className="table-actions fs-5" style={{
                cursor: "pointer",
                marginLeft: "10px",
            }}/>
        </div>
    );
};
