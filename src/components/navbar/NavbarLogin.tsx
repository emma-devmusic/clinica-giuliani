import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import './navbar.css';

export const NavbarLogin = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow-sm d-flex justify-content-between" >
            <div className='d-flex align-itmes-center '>
                <Link to="/" className="navbar-brand d-flex align-items-center px-2">
                    <img src={logo} alt="Logo Clinica Giuliani" />
                </Link>
            </div>
        </nav>
    )
}
