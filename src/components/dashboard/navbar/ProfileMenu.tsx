import { useNavigate } from "react-router-dom";
import { ProfileIcon } from "../../icons";
import { useAppSelector } from "../../../store/store";

export const ProfileMenu = () => {

    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.auth)
    const handleProfile = () => navigate('/dashboard/profile')

    return (
        <>
            <div className="d-flex align-items-center">
                <p className="m-0 fs-5">¡Hola {user.name}!</p>
                <button className='btn me-3' onClick={handleProfile}>
                    <ProfileIcon />
                </button>
            </div>
            {/* <button className='btn me-3' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <ProfileIcon />
            </button> */}
            {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='profile-menu'>
                <li>
                    <Link className="dropdown-item" to="/dashboard/profile">
                        <div className="d-flex gap-2 align-items-center">
                            <ProfileSettings className="fs-5 text-secondary" />
                            Perfil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="#" onClick={handleLogout}>
                        <div className="d-flex gap-2 align-items-center">
                            <Logout className="fs-5 text-secondary" />
                            Salir
                        </div>
                    </Link>
                </li>
            </ul> */}
        </>
    );
};
