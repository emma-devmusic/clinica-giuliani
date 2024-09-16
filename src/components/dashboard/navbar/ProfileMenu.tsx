import { Link } from "react-router-dom";
import { ProfileIcon } from "../../icons";
import { ProfileSettings } from "../../icons/ProfileSettings";
import { Logout } from "../../icons/Logout";
import { useAppDispatch } from "../../../store/store";
import { logout } from "../../../store/slices/authSlice";

export const ProfileMenu = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <button className='btn me-3' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <ProfileIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='profile-menu'>
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
            </ul>
        </>
    );
};
