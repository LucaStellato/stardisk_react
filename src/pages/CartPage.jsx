import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { Link } from 'react-router-dom';

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
            <div className="detail-wall py-5 min-vh-100">
                <div className="container py-5">

                    <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                            <div
                                className="modern-white-frame shadow-frame-dark w-100 m-0 m-md-auto"
                                style={{ maxWidth: '800px' }}
                            >
                                <div className="inner-dark-canvas w-100 p-3 p-md-5">

                                    <div className="text-center mb-5">
                                        <h1 className="fw-bold text-white w-100 text-uppercase tracking-widest m-0 h2">
                                            Cart
                                        </h1>
                                        <div className="accent-line mx-auto mt-2 w-25"></div>
                                    </div>

                                    <div className="text-center py-5">
                                        <p className="text-secondary mb-5 pb-4 fs-5">
                                            Your cart is empty.
                                        </p>
                                        <Link
                                            to="/vinyls"
                                            className="btn-add-collection fw-semibold text-black fs-5 text-uppercase px-5 py-2 w-100 w-md-auto"
                                        >
                                            Go to vinyls catalog
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-4 text-center mt-5 pt-2">
                        <Link to="/vinyls" className="text-white text-decoration-none fs-1 tracking-widest fw-semibold">
                            <i className="bi bi-arrow-left me-2"></i> BACK TO VINYLS
                        </Link>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <section className='detail-wall'>
            <div className="container pt-md-3 pb-3" style={{ minHeight: 'calc(100vh - 300px)' }}>
                <div className="modern-white-frame shadow-frame-dark w-100 h-100 my-5 w-25 text-center">
                    <div className="inner-dark-canvas h-100 w-100 p-2">
                        <div className="p-1 border-bottom border-secondary border-opacity-25">
                            <h1 className="fw-bold text-white m-0 tracking-widest">
                                CART
                            </h1>
                            <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                        </div>
                    </div>
                </div>

                <div className="row">

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