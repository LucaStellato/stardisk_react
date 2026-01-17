import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import CartWidget from './CartWidget';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-yellow">
            <div className="container-fluid d-flex align-items-center">

                <NavbarLogo />
                <NavbarLinks />
                <CartWidget />

            </div>
        </nav>
    );
}