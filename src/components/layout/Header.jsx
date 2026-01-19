import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import CartWidget from './CartWidget';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-2 sticky-top">
            <div className="container-fluid d-flex align-items-center flex-nowrap">
                <NavbarLogo />
                <NavbarLinks />
                <CartWidget />
            </div>
        </nav>
    );
}