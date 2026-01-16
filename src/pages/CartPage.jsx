import { useCart } from '../../contexts/CartContext'; // Controlla che il percorso sia corretto
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    // Calcolo del totale generale basato sul prezzo scontato (priceFinal)
    const totaleGenerale = cart.reduce((acc, item) => {
        const prezzoDaUsare = item.priceFinal || parseFloat(item.full_price);
        return acc + (prezzoDaUsare * item.quantity);
    }, 0);

    // Schermata se il carrello è vuoto
    if (cart.length === 0) {
        return (
            <section className='bg-graffiti'>
                <div className="container pt-5 text-center d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 300px)' }}>
                    <div className="alert alert-light p-5 border h-100 text-blue">
                        <h3 className="mb-3">Your cart is empty.</h3>
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
            <div className="container pt-5 pb-5" style={{ minHeight: 'calc(100vh - 300px)' }}>
                <h2 className="mb-4 fw-bold text-uppercase text-blue pb-4">Your cart</h2>

                <div className="row">
                    {/* --- COLONNA SINISTRA: ELENCO PRODOTTI --- */}
                    <div className="col-lg-7">
                        {cart.map((item) => {
                            const haSconto = item.discount > 0;
                            const prezzoOriginale = parseFloat(item.full_price);
                            const prezzoScontato = item.priceFinal;

                            return (
                                <div key={item.product_id} className="mb-3 border-0">
                                    <div className="card-body">
                                        <div className="row align-items-center pe-4">

                                            {/* 1. Immagine */}
                                            <div className="col-3 col-md-2">
                                                <img
                                                    src={item.img_url || 'https://via.placeholder.com/100'}
                                                    alt={item.name}
                                                    className="img-fluid rounded shadow-sm"
                                                    style={{ objectFit: 'cover', height: '90px', width: '90px' }}
                                                />
                                            </div>

                                            {/* 2. Dettagli */}
                                            <div className="col-9 col-md-4">
                                                <h6 className="mb-0 fw-bold text-truncate text-blue">{item.name}</h6>
                                                <small className="text-yellow fw-bold d-block">{item.artist_name || 'Turntable'}</small>
                                                {haSconto && (
                                                    <span className="badge bg-danger mt-1">Discount {item.discount}%</span>
                                                )}
                                            </div>

                                            {/* 3. Controlli Quantità */}
                                            <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center">
                                                {/* Contenitore compatto */}
                                                <div className="d-flex align-items-center border rounded-pill bg-white px-1 shadow-sm" style={{ width: 'fit-content' }}>
                                                    <button
                                                        className="btn btn-sm btn-link text-blue text-decoration-none px-2 py-0"
                                                        onClick={() => decreaseQuantity(item.product_id)}
                                                        style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                                                    >
                                                        −
                                                    </button>

                                                    <span className="mx-2 fw-bold text-blue" style={{ fontSize: '0.9rem', minWidth: '15px text-center' }}>
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        className="btn btn-sm btn-link text-blue text-decoration-none px-2 py-0"
                                                        onClick={() => addToCart(item)}
                                                        style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Testo disponibilità più discreto */}
                                                <div className="mt-1">
                                                    <small className="text-blue fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                                                        {item.amount} Available.
                                                    </small>
                                                </div>
                                            </div>

                                            {/* 4. Prezzi e Rimozione */}
                                            <div className="col-6 col-md-3 text-end ">
                                                <div className="mb-1 d-flex justify-content-end align-items-center">
                                                    {haSconto ? (
                                                        <>
                                                            <span className="text-secondary text-decoration-line-through me-3 small">
                                                                €{prezzoOriginale.toFixed(2)}
                                                            </span>
                                                            <span className="fw-bold text-blue me-3 fs-5">
                                                                €{prezzoScontato.toFixed(2)}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="fw-bold h5 text-blue me-3 fs-5">€{prezzoOriginale.toFixed(2)}</span>
                                                    )}
                                                    <button
                                                        className="btn btn-link text-danger p-0 mb-2"
                                                        onClick={() => removeFromCart(item.product_id)}
                                                        style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
                                                        <i class="bi bi-trash3 fs-4 fw-bold text-red"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- COLONNA DESTRA: RIEPILOGO --- */}
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <div className="border-0 px-5 sticky-top" style={{ top: '20px' }}>
                            <h4 className="fw-bold mb-4 text-yellow">Order summary</h4>

                            <div className="d-flex text-blue justify-content-between mb-2">
                                <span>Total products:</span>
                                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                            </div>

                            {/* --- NUOVA SEZIONE: LISTA DELLA SPESA --- */}
                            <div className="py-3 mb-3 border-top border-bottom" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                <ul className="list-unstyled mb-0">
                                    {cart.map((item) => (
                                        <li key={item.product_id} className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '0.9rem' }}>
                                            <div className="text-blue text-truncate me-3" style={{ maxWidth: '70%' }}>
                                                <span className="fw-bold">{item.quantity}x</span> {item.name}
                                            </div>
                                            <span className="text-blue fw-semibold">
                                                €{((item.priceFinal || parseFloat(item.full_price)) * item.quantity).toFixed(2)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* -------------------------------------- */}

                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold h5 text-blue">TOTAL:</span>
                                <span className="fw-bold h4 text-blue">€{totaleGenerale.toFixed(2)}</span>
                            </div>

                            <button className="btn bg-yellow text-blue w-100 fw-bold mb-3 shadow-sm" onClick={() => navigate('/checkout')}>
                                Proceed with the order
                            </button>

                            <button className="btn bg-blue text-yellow fw-bold w-100 shadow-sm" onClick={() => navigate('/')}>
                                Keep buying
                            </button>

                            <div className="text-center mt-3">
                                <small className="text-secondary">Free shipping for orders over €50</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CartPage;