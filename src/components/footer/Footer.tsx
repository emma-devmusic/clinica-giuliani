

export const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Address</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Servicios</h5>
                        <a className="btn btn-link" href="">Cardiología</a>
                        <a className="btn btn-link" href="">Neumonología</a>
                        <a className="btn btn-link" href="">Neurología</a>
                        <a className="btn btn-link" href="">Ortopedia</a>
                        <a className="btn btn-link" href="">Laboratorio</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Enlaces</h5>
                        <a className="btn btn-link" href="">Sobre Nosotros</a>
                        <a className="btn btn-link" href="">Contáctanos</a>
                        <a className="btn btn-link" href="">Servicios</a>
                        {/* <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Tu Correo"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Enviar</button>
                        </div>
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
                            <i>Potenciado por <a className="border-bottom" href="https://ding.com.ar" target="_blank">Ding</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
