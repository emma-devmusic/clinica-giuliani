import { Link } from "react-router-dom"
import logo2 from '../../assets/img/logo2.png';

export const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Dirección</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>25 de mayo 541, Charata, Chaco</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+54 9 3731 42-0049</p>
                        {/* <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p> */}
                        <div className="d-flex pt-2">
                            {/* <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-twitter"></i></a> */}
                            {/* <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-youtube"></i></a> */}
                            <Link className="btn btn-outline-light btn-social rounded-circle" to="https://www.facebook.com/clinica.giuliani" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social rounded-circle" to="https://www.instagram.com/clinica.giuliani/" target="_blank"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Servicios</h5>
                        <Link className="btn btn-link" to="services/cardiologia">Cardiología</Link>
                        <Link className="btn btn-link" to="services/traumatologia">Traumatología</Link>
                        <Link className="btn btn-link" to="services/ecografias">Ecografías</Link>
                        <Link className="btn btn-link" to="services/otorrinolaringologia">Otorrinolaringología</Link>
                        <Link className="btn btn-link" to="services/laboratorio">Laboratorio</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Enlaces</h5>
                        <Link className="btn btn-link" to="/about">Sobre Nosotros</Link>
                        <Link className="btn btn-link" to="/team">Equipo</Link>
                        <Link className="btn btn-link" to="/services">Servicios</Link>
                        {/* <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={logo2} alt="logo en blanco" className="w-100 h-100"/>

                        {/* <h5 className="text-light mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Tu Correo"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Enviar</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Clinica Giuliani</a>, Todos Los Derechos Reservados.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                            {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br/> */}
                            <i>Powered by <a className="border-bottom" href="https://ding.com.ar" target="_blank">Ding</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
