import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function CartWidget() {
    const { cartCount } = useCart();

    return (
        <div className="d-flex justify-content-end align-items-center">
            <Link to="/cart" className="position-relative d-inline-block text-decoration-none">
                <i className="bi bi-bag text-blue fs-3"></i>
                {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: '0.65rem' }}>
                        {cartCount}
                        <span className="visually-hidden">
                            items in cart
                        </span>
                    </span>
                )}
            </Link>
        </div>
    )
}