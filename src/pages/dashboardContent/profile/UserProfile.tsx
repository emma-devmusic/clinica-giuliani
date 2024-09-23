import { PhoneIcon, ProfileIcon, EmailIcon, DocumentIcon, AdminIcon, EmployeeIcon } from "../../../components/icons";
import { flu } from "../../../helpers/helpers";
import { useAppSelector } from "../../../store/store";
import './styles.css'


export const UserProfile = () => {


    const { user } = useAppSelector(state => state.auth)

    return (
        <div className="">
            <div className="p-2 mb-3" style={{maxWidth: '600px', margin: '0 auto'}}>
                {/* Profile widget */}
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="align-items-end profile-head d-flex gap-3">
                           
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-4 text-white fs-3">{user.name}</h4>
                                {/* <p className="small m-0">
                                    <i className="fas fa-map-marker-alt mr-2"></i>{user.email}
                                </p>
                                <p className="small mb-4">
                                    <i className="fas fa-map-marker-alt mr-2"></i>{user.phone}
                                </p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                                <small className="text-muted">
                                    <i className="fas fa-image mr-1"></i>Photos
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Followers
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Following
                                </small>
                            </li>
                        </ul>
                    </div> */}
                    <div className="px-4 py-3 mt-4">
                        <h5 className="mb-2">Tu Información</h5>
                        <div className="p-4 rounded shadow-sm  list-group">
                            <p className="m-0 d-flex align-items-center gap-2"><ProfileIcon /> {`${flu(user.name)} ${flu(user.lastname)}`}</p>
                            <hr />
                            <p className="m-0 d-flex align-items-center gap-2"><DocumentIcon className="fs-3"/> {user.dni}</p>
                            <hr />
                            <p className="m-0 d-flex align-items-center gap-2"><PhoneIcon className="fs-3"/> {user.phone}</p>
                            <hr />
                            <p className="m-0 d-flex align-items-center gap-2"><EmailIcon className="fs-3" /> {user.email}</p>
                            <hr />
                            <p className="m-0 d-flex align-items-center gap-2">
                                {
                                    user.role === 'admin'
                                    ? <><AdminIcon className="fs-3"/> Administrador</> 
                                    : <><EmployeeIcon className="fs-3" /> Empleado</>
                                }
                            </p>
                        </div>
                    </div>
                    {/* <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Recent photos</h5>
                            <a href="#" className="btn btn-link text-muted">Show all</a>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-2 pr-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 1"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 mb-2 pl-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 2"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 pr-lg-1 mb-2">
                                <img
                                    src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    alt="Photo 3"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 pl-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 4"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

