import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import '../styles.css';
import { RefObject } from 'react';
import { MenuHambur } from '../../icons';
import { ProfileMenu } from './ProfileMenu';
export const NavbarDashboard = ({ refLayout }: { refLayout: RefObject<HTMLDivElement> }) => {

    const handleToggleSidebar = () => {
        refLayout.current?.classList.toggle('show-sidebar')
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn shadow-sm d-flex justify-content-between" data-wow-delay="0.1s">
            <div className='d-flex align-itmes-center '>
                <button
                    onClick={handleToggleSidebar}
                    className='btn fs-2 d-flex align-itmes-center text-primary ms-3'
                >
                    <MenuHambur className='mt-3' />
                </button>
                <Link to="/" className="navbar-brand d-flex align-items-center px-2">
                    <img src={logo} alt="Logo Clinica Giuliani" />
                    {/* <h1 className="m-0 text-primary font-muller-heavy"><span>Clínica</span> <strong>G</strong>iuliani</h1> */}
                </Link>
            </div>
            <div className='position-relative'>
                <ProfileMenu />
            </div>
        </nav>
    )
}
