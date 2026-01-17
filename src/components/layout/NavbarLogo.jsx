import { Link } from 'react-router-dom';

export default function NavbarLogo() {
    return (
        <div className="flex-1 d-flex justify-content-start">
            <Link to="/" className="navbar-brand p-3">
                <img src="/StarDISK-final-logo.png" style={{ height: '60px' }} alt="StarDISK Logo" />
            </Link>
        </div>
    );
}