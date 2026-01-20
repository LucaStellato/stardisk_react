import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import Icons from './Icons';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-black-custom p-2 sticky-top">
            <div className="container-fluid d-flex align-items-center flex-nowrap">
                <NavbarLogo />
                <NavbarLinks />
                <Icons />
            </div>
        </nav>
    );
}