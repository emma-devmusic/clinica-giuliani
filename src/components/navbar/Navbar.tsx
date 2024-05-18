import { Link } from "react-router-dom"
import logo from '../../assets/img/logo.png'
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <img src={logo} alt="Logo Clinica Giuliani" />
                {/* <h1 className="m-0 text-primary font-muller-heavy"><span>Clínica</span> <strong>G</strong>iuliani</h1> */}
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link">Inicio</Link>
                    <Link to="about" className="nav-item nav-link">Sobre Nosotros</Link>
                    <Link to="services" className="nav-item nav-link">Servicios</Link>
                    <Link to="team" className="nav-item nav-link">Equipo</Link>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                            <a href="feature.html" className="dropdown-item">Feature</a>
                            <a href="team.html" className="dropdown-item">Especialistas</a>
                            <a href="appointment.html" className="dropdown-item">Appointment</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div> */}
                    <Link to="contact" className="nav-item nav-link">Contáctanos</Link>
                </div>
                <Link to="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Agendar turno<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
    )
}
