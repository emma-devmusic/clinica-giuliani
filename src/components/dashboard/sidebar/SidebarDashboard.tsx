import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Logout } from "../../icons";
import { logout } from "../../../store/slices/authSlice";
export const SidebarDashboard = () => {

    const dispatch = useAppDispatch()
    const { isAdmin, user } = useAppSelector(state => state.auth)
    const handleLogout = () => dispatch(logout())
    
    return (
        <div className="sidebar-dashboard py-3">
            <div className="shadow-sm h-100 box-sidebar ">
                <div className="d-flex justify-content-between flex-column h-100">
                    <div>
                        <div className="sidebar-dashboard__title">
                            <Link to={'/dashboard'}><h5 className="p-3 m-0 text-primary">Welcome</h5></Link>
                            <hr className="m-0" />
                        </div>
                        <ul className="list-group">
                            {
                                isAdmin 
                                    ? <Link to={"/dashboard/assets/select-user"} className="">Recibos</Link>
                                    : <Link to={`/dashboard/assets/${user.id}`} className="">Recibos</Link>

                            }
                            <Link to={"/dashboard/profile"} className="">Perfil</Link>
                            {isAdmin && <Link to={"/dashboard/admin-users"} className="">Administrador de Usuarios</Link>}
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group on-sidebar">
                            <Link to="#" onClick={handleLogout}>
                                <div className="d-flex gap-2 align-items-center">
                                    <Logout className="fs-5" />
                                    Salir
                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* BOTTON OCULTO PARA ABRIR MODAL */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" id="click-modal" data-bs-target="#staticBackdrop" style={{ display: 'none' }}>
                    Launch static backdrop modal
                </button>
                {/* BOTTON OCULTO PARA ABRIR MODAL */}
            </div>
        </div>
    );
};
