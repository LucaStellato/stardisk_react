import { NavLink } from 'react-router-dom';

export default function NavbarLinks() {
    return (
        <>
            <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse fs-5 flex-grow-0" id="navbarNav">
                <ul className="navbar-nav text-white fw-bold">
                    <li className="nav-item me-lg-4">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item me-lg-4">
                        <NavLink className="nav-link" to="/vinyls">
                            Catalog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}