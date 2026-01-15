import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export default function Header() {
    const { cart } = useCart();

    const cartCount = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-yellow">
                <div className="container-fluid d-flex align-items-center">
                    <Link to={`/`} className="navbar-brand p-3 flex-1 d-flex justify-content-start"><img src="/StarDISK-final-logo.png" style={{ height: '60px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav text-blue fw-bold">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/vinyls">
                                    Catalog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>

                        </ul>
                    </div>
                    <div className='flex-1 d-flex justify-content-end'>
                        <div className="cart-section text-end">
                            <Link to="/cart" className="cart-icon-wrapper">
                                <i className="bi bi-bag text-blue fs-4 p-3"></i>

                                {cartCount > 0 && (
                                    <span className="cart-badge">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}