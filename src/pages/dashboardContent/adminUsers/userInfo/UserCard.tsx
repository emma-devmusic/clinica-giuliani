
import { EditIcon } from '../../../../components/icons'
import { useAppSelector } from '../../../../store/store'


export const UserCard = () => {

    const { userActive } = useAppSelector(state => state.users)


    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title d-flex align-items-center justify-content-between m-0">
                    <h6 className="mt-2">Datos</h6> 
                    <div>
                        <EditIcon className='fs-5'/>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="flex">
                    <p><strong>Email:</strong> <i>{userActive.email}</i></p>
                    <p><strong>Teléfono:</strong> <i>{userActive.phone}</i></p>
                    <p><strong>DNI:</strong> <i>{userActive.dni}</i></p>
                    <p><strong>Nombre:</strong> <i>{userActive.name}</i></p>
                    <p><strong>Apellido:</strong> <i>{userActive.lastname}</i></p>
                </div>
            </div>
        </div>
    )
}
