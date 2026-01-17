import { Link } from 'react-router-dom';

export default function NavbarLogo() {
    return (
        <div className="d-flex justify-content-start">
            <Link to="/" className="navbar-brand p-3 d-flex align-items-center">
                <img src="/StarDISK-final-logo.png" alt="StarDISK Logo" className="img-fluid" style={{ height: '60px', width: 'auto' }} />
            </Link>
        </div>
    )
}