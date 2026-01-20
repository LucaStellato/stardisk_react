import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import Icons from './Icons';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-black-custom p-2 sticky-top">
            <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">
                <div className="order-1 order-lg-3 flex-1 d-flex align-items-center">
                    <Icons />
                </div>
                <div className="order-2 order-lg-1 flex-1 d-flex justify-content-center justify-content-lg-start align-items-center">
                    <NavbarLogo />
                </div>
                <div className="order-3 order-lg-2 flex-1 d-flex justify-content-end justify-content-lg-center align-items-center">
                    <NavbarLinks />
                </div>

            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fw-bold text-uppercase text-white py-3 py-lg-0 text-center justify-content-center gap-lg-5">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/vinyls">Vinyls</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}