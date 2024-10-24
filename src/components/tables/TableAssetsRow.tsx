import dayjs from "dayjs";
import { ItemGetAssetsResponose } from "../../types";
import { PDFIcon } from "../icons/PDFIcon";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ChangeEvent, useEffect, useState } from "react";
import { deleteAsset, toogleSelectAsset } from "../../store/slices/assetsSlice";
import { DeleteIcon } from "../icons/DeleteIcon";
import Swal from "sweetalert2";
import Session from "../../classes/Session";
// import { DownloadIcon } from "../icons/DownloadIcon";


interface Props {
    item: ItemGetAssetsResponose
}


export const TableAssetsRow = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    const { assetsSelected } = useAppSelector(state => state.assets)
    const { isAdmin } = useAppSelector(state => state.auth)
    const [checked, setChecked] = useState(false);

    const deleteAssetById = () => {
        Swal.fire({
            title: "Eliminar Archivo",
            text: "Este proceso no puede revertirse. ¿Estás seguro de realizar esta acción?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteAsset(item.id))

            }
        });

    }

    useEffect(() => {
        setChecked(assetsSelected.includes(item.id))
    }, [assetsSelected])

    const handleCheckUser = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!e.target.checked)
        dispatch(toogleSelectAsset({ id: item.id }))
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
            <td>{dayjs(item.period).format('MM/YYYY')}</td>
            <td>{item.asset_type}</td>
            <td>{dayjs(item.created_at).format('DD/MM/YYYY')}</td>
            <td>
                <div>
                    <a href={`${import.meta.env.VITE_API_BASE_URL}/${new Session().getRole()}/download_asset/${item.id}`} target="_blank">
                        <PDFIcon className="fs-3" />
                    </a>
                    {/* <a href={`${import.meta.env.VITE_API_BASE_URL}/admin/download_asset/${item.id}`}>
                        <DownloadIcon className="fs-5 ms-2 text-primary" style={{
                            cursor: "pointer",
                            marginLeft: "10px",
                        }} />
                    </a> */}
                    {
                        isAdmin &&
                        <DeleteIcon onClick={deleteAssetById} className="table-actions fs-5 text-danger" style={{
                            cursor: "pointer",
                            marginLeft: "15px",
                        }} />
                    }
                </div>
            </td>
        </tr>
    );
};
