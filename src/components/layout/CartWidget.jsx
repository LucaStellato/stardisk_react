import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartWidget() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget-wrapper" onClick={() => navigate('/cart')} style={{ cursor: 'pointer', position: 'relative' }}>
            <i className="bi bi-bag text-blue fs-4"></i>
            {totalItems > 0 && (
                <span key={totalItems} className="cart-badge bg-red text-white">
                    {totalItems}
                </span>
            )}
        </div>
    )
}