
import { useAppSelector } from '../../../../store/store'


export const UserCard = () => {

    const { userActive } = useAppSelector(state => state.users)


    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title"><h6 className="mt-2">Datos del usuario</h6></div>
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
