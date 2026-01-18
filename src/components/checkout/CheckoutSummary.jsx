import { useNavigate } from 'react-router-dom';

export default function CheckoutSummary({ cart, totaleProdotti, costoSpedizione, totaleFinale, isSpedizioneGratuita, termsAccepted, handleSubmit }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-4 rounded shadow-sm sticky-top border border-light" style={{ top: '20px', zIndex: 10 }}>
            <h4 className="fw-bold mb-4 text-blue text-uppercase">Order summary</h4>

            <div className="py-3 mb-3 border-top border-bottom" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul className="list-unstyled mb-0">
                    {cart.map((item) => (
                        <li key={item.product_id} className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex align-items-center" style={{ maxWidth: '70%' }}>
                                <img src={item.img_url} alt={item.name} className="rounded shadow-sm me-3" style={{ width: '45px', height: '45px', objectFit: 'cover', flexShrink: 0 }} />
                                <div>
                                    <h6 className="mb-0 fw-bold text-blue small text-truncate">{item.name}</h6>
                                    <small className="text-muted d-block text-truncate">
                                        {item.quantity}x - {item.artist_name || item.brand}
                                    </small>
                                </div>
                            </div>
                            <span className="text-blue fw-bold small">
                                €{((item.priceFinal || parseFloat(item.full_price)) * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="d-flex text-blue justify-content-between mb-2 ">
                <span className="small">Subtotal:</span>
                <span className="fw-bold small">€{totaleProdotti.toFixed(2)}</span>
            </div>

            <div className="d-flex text-blue justify-content-between mb-4">
                <span className="small">Shipping:</span>
                <span className={`fw-bold small ${isSpedizioneGratuita ? 'text-success' : ''}`}>
                    {isSpedizioneGratuita ? 'FREE' : `€${costoSpedizione.toFixed(2)}`}
                </span>
            </div>

            <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-4">
                <span className="fw-bold text-blue mb-0">TOTAL:</span>
                <span className="fw-bold text-blue mb-0 ">€{totaleFinale.toFixed(2)}</span>
            </div>

            <button className="btn bg-yellow text-blue w-100 fw-bold py-3 shadow-sm border-0 text-uppercase" onClick={handleSubmit} disabled={!termsAccepted}
            >
                Confirm and Pay
            </button>

            <button className="btn btn-link text-muted w-100 mt-3 small text-decoration-none" onClick={() => navigate('/cart')}>
                ← Back to cart
            </button>
        </div>
    );
}