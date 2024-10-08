import { Link } from "react-router-dom";
export const SidebarDashboard = () => {
    

    return (
        <div className="sidebar-dashboard py-3">
            <div className="shadow-sm h-100 box-sidebar ">
                <div className="sidebar-dashboard__title">
                    <Link to={'/dashboard'}><h5 className="p-3 m-0 text-primary">Welcome</h5></Link>
                    <hr className="m-0" />
                </div>
                <ul className="list-group">
                    <Link to={"/dashboard/receipts"} className="">Recibos</Link>
                    {/* <Link to={"/dashboard/staff"} className="">Personal</Link> */}
                    <Link to={"/dashboard/admin-users"} className="">Administrador de Usuarios</Link>
                </ul>

                {/* BOTTON OCULTO PARA ABRIR MODAL */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" id="click-modal" data-bs-target="#staticBackdrop" style={{display: 'none'}}>
                    Launch static backdrop modal
                </button>
                {/* BOTTON OCULTO PARA ABRIR MODAL */}

            </div>
        </div>
    );
};
