import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { newAsset } from '../../../../store/slices/assetsSlice';
import dayjs from 'dayjs';
import { HaberesTypes } from '../../../../types';



export const NewAsset = () => {

    const { modal: { content } } = useAppSelector(state => state.ui)
    const { userActive } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM'));
    const [assetType, setAssetType] = useState<HaberesTypes | ''>('');

    // Manejar el cambio de archivo
    const handleSubmitAsset = (e: any) => {
        e.preventDefault();
        const values = {
            file: pdfFile,
            user_id: userActive.id,
            period: `${selectedDate}-01`,
            asset_type: assetType
        }
        document.getElementById('close-modal-ding')?.click()
        dispatch(newAsset(values))
    }
    const resetForm = () => {
        setPdfFile(null);
        setSelectedDate(dayjs().format('YYYY-MM'));
        setAssetType('');
    }

    useEffect(() => {
        // Resetear el formulario cuando se cierra el modal
        if (content === 'new_asset') resetForm();
    }, [])

    return (
        <>
            <div className="onboarding-gray mt-4 ms-3 me-3">
                Aviso o descripción para la carga de un Haber.
            </div>
            <form action="" onSubmit={handleSubmitAsset} >
                <div className="modal-body mb-3">
                    <div className="mb-3 mt-3">
                        <label htmlFor="dni" className='mb-1'>PDF</label>
                        <input
                            type="file"
                            className="form-control bg-white"
                            placeholder="h" id="dni"
                            required
                            onChange={(e: any) => setPdfFile(e.target.files[0])}
                        />
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="month"
                            id='period'
                            className="form-control"
                            required
                            value={selectedDate}
                            onChange={(e: any) =>
                                setSelectedDate(dayjs(e.target.value, 'YYYY-MM').format('YYYY-MM'))
                            }
                        />
                        <label htmlFor="period">Periodo</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="asset_type"
                            required
                            onChange={(e: any) => setAssetType(e.target.value)}
                        >
                            <option value="">-</option>
                            <option value="Sueldo">Sueldo</option>
                            <option value="Aguinaldo">Aguinaldo</option>
                            <option value="Complementaria">Complementaria</option>
                            <option value="Adicional Sanidad">Adicional Sanidad</option>
                        </select>
                        <label htmlFor="asset_type">Tipo de Haber</label>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" >Guardar</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        id="close-modal-ding"
                        onClick={resetForm}
                    >Cancelar</button>
                </div>
            </form>
        </>
    );
};
