import { NavLink } from 'react-router-dom';

export default function NavbarLinks() {
    return (
        <>
            <button
                className="navbar-toggler custom-toggler text-yellow border-0 shadow-none p-0 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fw-bold text-uppercase text-white py-3 py-lg-0">
                    <li className="nav-item me-lg-5">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item me-lg-5">
                        <NavLink className="nav-link" to="/vinyls">
                            Vinyls
                        </NavLink>
                    </li>
                    <li className="nav-item me-lg-5">
                        <NavLink className="nav-link" to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div> */}
        </>
    );
}