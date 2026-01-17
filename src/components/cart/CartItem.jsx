export default function CartItem({ item, addToCart, decreaseQuantity, removeFromCart }) {
    const haSconto = item.discount > 0;
    const prezzoOriginale = parseFloat(item.full_price);
    const prezzoScontato = item.priceFinal;

    return (
        <div className="card mb-3 border-0 shadow-sm rounded">
            <div className="card-body">
                <div className="row align-items-center">
                    {/* Immagine */}
                    <div className="col-3 col-md-2 text-center">
                        <img
                            src={item.img_url || 'https://via.placeholder.com/100'}
                            alt={item.name}
                            className="img-fluid rounded shadow-sm"
                            style={{ objectFit: 'cover', height: '80px', width: '80px' }}
                        />
                    </div>

                    {/* Dettagli */}
                    <div className="col-9 col-md-4">
                        <h6 className="mb-0 fw-bold text-truncate text-blue">{item.name}</h6>
                        <small className="text-yellow fw-bold d-block">{item.artist_name || 'Turntable'}</small>
                        {haSconto && <span className="badge bg-danger mt-1 small">-{item.discount}%</span>}
                    </div>

                    {/* Quantità */}
                    <div className="col-6 col-md-3 d-flex flex-column align-items-center mt-3 mt-md-0">
                        <div className="d-flex align-items-center border rounded-pill bg-white px-2 shadow-sm">
                            <button className="btn btn-sm btn-link text-blue text-decoration-none fw-bold" onClick={() => decreaseQuantity(item.product_id)}>−</button>
                            <span className="mx-2 fw-bold text-blue small">{item.quantity}</span>
                            <button className="btn btn-sm btn-link text-blue text-decoration-none fw-bold" onClick={() => addToCart(item)}>+</button>
                        </div>
                        <small className="text-muted mt-1" style={{ fontSize: '0.65rem' }}>{item.amount} Available</small>
                    </div>

                    {/* Prezzo e Trash */}
                    <div className="col-6 col-md-3 text-end mt-3 mt-md-0">
                        <div className="d-flex flex-column align-items-end">
                            {haSconto ? (
                                <>
                                    <span className="text-secondary text-decoration-line-through small">€{prezzoOriginale.toFixed(2)}</span>
                                    <span className="fw-bold text-blue fs-5">€{prezzoScontato.toFixed(2)}</span>
                                </>
                            ) : (
                                <span className="fw-bold text-blue fs-5">€{prezzoOriginale.toFixed(2)}</span>
                            )}
                            <button className="btn btn-link text-danger p-0 mt-1" onClick={() => removeFromCart(item.product_id)}>
                                <i className="bi bi-trash3 fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}