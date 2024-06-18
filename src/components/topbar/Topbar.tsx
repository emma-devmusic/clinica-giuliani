import { Link } from "react-router-dom"

export const Topbar = () => {
    return (
        <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>25 de mayo 541, Charata, Chaco</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center py-3">
                        <small className="far fa-clock text-primary me-2"></small>
                        <small>24hs los 7 días de la semana</small>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small className="fa fa-phone-alt text-primary me-2"></small>
                        <small>+54 9 3731 41-1724</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="https://www.facebook.com/clinica.giuliani" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-0" to="https://www.instagram.com/clinica.giuliani/" target="_blank"><i className="fab fa-instagram"></i></Link>
                        {/* <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a> */}
                        {/* <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
