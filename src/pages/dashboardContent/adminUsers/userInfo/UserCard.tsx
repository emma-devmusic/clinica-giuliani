
import { EditIcon } from '../../../../components/icons'
import { setModal } from '../../../../store/slices/uiSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/store'


export const UserCard = () => {

    const { userActive } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const handleUpdateUser = () => {
        dispatch(setModal({
            title: 'Actualizar Usuario',
            content: 'update_user',
            type: 'info'
        }))
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title d-flex align-items-center justify-content-between m-0">
                    <h6 className="mt-2">Datos</h6> 
                    <button className='btn btn-primary' onClick={handleUpdateUser}>
                        <EditIcon className='fs-5'/>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="flex">
                    <p><strong>Email:</strong> <i>{userActive.email}</i></p>
                    <p><strong>Teléfono:</strong> <i>{userActive.phone}</i></p>
                    <p><strong>DNI:</strong> <i>{userActive.dni}</i></p>
                    <p><strong>Nombre:</strong> <i>{userActive.name}</i></p>
                    <p><strong>Apellido:</strong> <i>{userActive.lastname}</i></p>
                    <p><strong>Rol:</strong> <i>{userActive.role === 'admin' ? 'Administrador': 'Empleado'}</i></p>
                </div>
            </div>
        </div>
    )
}
