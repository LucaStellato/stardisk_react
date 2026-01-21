import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';

export default function Icons() {
    const { totalWish } = useWishlist()
    const { cart } = useCart();
    const navigate = useNavigate();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <div
                className="cart-widget-wrapper ms-auto me-3"
                onClick={() => navigate('/wishlist')}
                style={{ cursor: 'pointer', position: 'relative' }}>
                <i className="bi bi-heart text-white fs-4"></i>
                {totalWish > 0 && (
                    <span key={totalWish} className="wish-badge">
                        {totalWish}
                    </span>
                )}
            </div>
            <div className="cart-widget-wrapper me-3" onClick={() => navigate('/cart')} style={{ cursor: 'pointer', position: 'relative' }}>
                <i className="bi bi-bag text-white fs-4"></i>
                {totalItems > 0 && (
                    <span key={totalItems} className="cart-badge bg-red text-white">
                        {totalItems}
                    </span>
                )}
            </div>
        </>

    )
}