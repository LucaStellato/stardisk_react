import { NavLink } from 'react-router-dom';

export default function NavbarLinks() {
    return (
        <>
            {/* Il bottone Toggler deve stare al livello della navbar */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Il contenuto che viene nascosto/mostrato */}
            <div className="collapse navbar-collapse fs-5 flex-grow-0" id="navbarNav">
                <ul className="navbar-nav text-blue fw-bold">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" to="/vinyls">Catalog</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}