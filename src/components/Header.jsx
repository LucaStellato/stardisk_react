import HomePage from '../pages/HomePage'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-yellow">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand p-3 " href="#"><img src="/StarDISK-final-logo.png" style={{ height: '60px' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 pe-3" id="navbarNav">
                        <ul className="navbar-nav text-blue ms-auto fw-bold">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/vinyls">
                                    Catalog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}