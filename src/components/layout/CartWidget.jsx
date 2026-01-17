import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function CartWidget() {
    const { cartCount } = useCart();

    return (
        <div className='flex-1 d-flex justify-content-end'>
            <div className="cart-section text-end pe-3">
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
    );
}