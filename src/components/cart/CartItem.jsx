export default function CartItem({ item, addToCart, decreaseQuantity, removeFromCart }) {

    const haSconto = item.discount > 0;
    const prezzoOriginale = parseFloat(item.full_price);
    const prezzoScontato = item.priceFinal;

    return (
        <div className="card mb-3 border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="card-body py-3">
                <div className="row align-items-center">

                    <div className="col-3 col-md-2">
                        <img
                            src={item.img_url || 'https://via.placeholder.com/100'}
                            alt={item.name}
                            className="img-fluid rounded shadow-sm border"
                            style={{ objectFit: 'cover', height: '70px', width: '70px' }}
                        />
                    </div>

                    <div className="col-9 col-md-4">
                        <h6 className="mb-0 fw-bold text-blue text-truncate">{item.name}</h6>
                        <small className="text-red fw-bold d-block">{item.artist_name || 'Gear'}</small>
                        {haSconto && <span className="badge bg-red mt-1 small">-{item.discount}%</span>}
                    </div>

                    <div className="col-6 col-md-3 d-flex flex-column align-items-center mt-3 mt-md-0">
                        <div className="d-flex align-items-center border rounded-pill bg-lightyellow px-2 shadow-sm">
                            <button className="btn btn-sm btn-link text-blue text-decoration-none fw-bold px-2" onClick={() => decreaseQuantity(item.product_id)}>−</button>
                            <span className="mx-2 fw-bold text-blue" style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                            <button className="btn btn-sm btn-link text-blue text-decoration-none fw-bold px-2" onClick={() => addToCart(item)}>+</button>
                        </div>
                        <small className="text-muted mt-1" style={{ fontSize: '0.65rem' }}>Stock: {item.amount}</small>
                    </div>

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
                            <button className="btn btn-link text-red p-0 mt-1 border-0" onClick={() => removeFromCart(item.product_id)}>
                                <i className="bi bi-trash3 fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}