import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

export default function CartPage() {
    const {
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        totaleProdotti,
        costoSpedizione,
        totaleFinale,
        isSpedizioneGratuita
    } = useCart();

    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <section className='bg-graffiti'>
                <div className="container pt-5 text-center d-flex justify-content-center align-items-center schizzi" style={{ minHeight: 'calc(100vh - 300px)' }}>
                    <div className="alert alert-light p-5 border h-100 text-blue shadow">
                        <h3 className="mb-3 fw-bold">Your cart is empty.</h3>
                        <p className="text-muted">You haven't added any vinyl to your collection yet.</p>
                        <button className="btn bg-blue text-yellow fw-bold btn-lg mt-3" onClick={() => navigate('/')}>
                            Back to shop
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='bg-graffiti'>
            <div className="container pt-5 pb-5 schizzi" style={{ minHeight: 'calc(100vh - 300px)' }}>
                <h2 className="mb-4 fw-bold text-uppercase text-blue pb-4">Your cart</h2>

                <div className="row">
                    {/* Colonna Prodotti */}
                    <div className="col-lg-7">
                        {cart.map((item) => (
                            <CartItem
                                key={item.product_id}
                                item={item}
                                addToCart={addToCart}
                                decreaseQuantity={decreaseQuantity}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </div>

                    {/* Colonna Riepilogo */}
                    <CartSummary
                        cart={cart}
                        totaleProdotti={totaleProdotti}
                        costoSpedizione={costoSpedizione}
                        totaleFinale={totaleFinale}
                        isSpedizioneGratuita={isSpedizioneGratuita}
                    />
                </div>
            </div>
        </section>
    );
}