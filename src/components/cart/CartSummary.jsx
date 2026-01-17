import { useNavigate } from 'react-router-dom';

export default function CartSummary({ cart, totaleProdotti, costoSpedizione, totaleFinale, isSpedizioneGratuita }) {
    const navigate = useNavigate();

    return (
        <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="bg-white p-4 rounded shadow-sm sticky-top border border-light" style={{ top: '100px' }}>
                <h4 className="fw-bold mb-4 text-blue text-uppercase">Order summary</h4>

                <div className="py-3 mb-3 border-top border-bottom" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <ul className="list-unstyled mb-0">
                        {cart.map((item) => (
                            <li key={item.product_id} className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '0.9rem' }}>
                                <div className="text-blue text-truncate me-3" style={{ maxWidth: '70%' }}>
                                    <span className="fw-bold text-yellow">{item.quantity}x</span> {item.name}
                                </div>
                                <span className="text-blue fw-semibold">
                                    €{((item.priceFinal || parseFloat(item.full_price)) * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="d-flex text-blue justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">€{totaleProdotti.toFixed(2)}</span>
                </div>

                <div className="d-flex text-blue justify-content-between mb-4">
                    <span>Shipping:</span>
                    <span className={`fw-bold ${isSpedizioneGratuita ? 'text-success' : ''}`}>
                        {isSpedizioneGratuita ? 'FREE' : `€${costoSpedizione.toFixed(2)}`}
                    </span>
                </div>

                <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-4">
                    <span className="fw-bold h5 text-blue mb-0">TOTAL:</span>
                    <span className="fw-bold h3 text-blue mb-0">€{totaleFinale.toFixed(2)}</span>
                </div>

                <button className="btn bg-yellow text-blue w-100 fw-bold mb-3 py-2 shadow-sm border-0" onClick={() => navigate('/checkout')}>
                    PROCEED TO CHECKOUT
                </button>

                <button className="btn btn-outline-secondary w-100 fw-bold shadow-sm" onClick={() => navigate('/')}>
                    ← KEEP BUYING
                </button>

                <div className="text-center mt-3">
                    {isSpedizioneGratuita ? (
                        <small className="text-yellow fw-bold">Congrats! You have free shipping! 🎉</small>
                    ) : (
                        <small className="text-secondary">Free shipping for orders over <strong>€50.00</strong></small>
                    )}
                </div>
            </div>
        </div>
    );
}