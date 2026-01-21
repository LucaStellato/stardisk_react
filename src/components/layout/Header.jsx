import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import Icons from './Icons';
import { NavLink } from 'react-router-dom';

export default function Header() {

    // Funzione per chiudere il menu mobile manualmente al click sui link
    const closeMenu = () => {
        const menu = document.getElementById('navbarNav');
        if (menu && menu.classList.contains('show')) {
            // Rimuoviamo la classe 'show' di Bootstrap per chiudere la tendina
            menu.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-black-custom py-2 sticky-top">
            <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">

                {/* 1. LOGO: Allineato a sinistra */}
                <div className="order-1 flex-1 d-flex justify-content-start align-items-center">
                    <NavbarLogo />
                </div>

                {/* 2. ICONS DESKTOP: Visibili solo da SM in su, a destra */}
                <div className="order-lg-3 flex-1 d-none d-sm-flex justify-content-end align-items-center">
                    <Icons />
                </div>

                {/* 3. TOGGLER/NAVBAR LINKS: Il pulsante hamburger visibile solo su mobile */}
                <div className="order-2 order-lg-2 flex-1 d-flex justify-content-end d-lg-none">
                    <NavbarLinks />
                </div>
            </div>

            {/* MENU COLLASSABILE */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fw-bold text-uppercase text-white py-3 py-lg-0 text-center justify-content-center gap-lg-5">

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/vinyls"
                            onClick={closeMenu}
                        >
                            Vinyls
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/aboutus"
                            onClick={closeMenu}
                        >
                            About Us
                        </NavLink>
                    </li>

                    {/* 4. ICONS MOBILE: Visibili solo su schermi molto piccoli (XS) */}
                    <li className="nav-item d-sm-none mt-3">
                        <div className="d-flex justify-content-center" onClick={closeMenu}>
                            <Icons />
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    );
}