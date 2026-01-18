import { useCart } from '../../contexts/CartContext';

export default function ProductInfo({ product }) {
    const { addToCart } = useCart();
    const isTurntable = product.category === 'turntable';

    return (
        <div className="col-12 col-md-6 p-md-5 d-flex align-items-center pb-3 mb-5">
            {/* CORNICE BIANCA */}
            <div className='p-5 m-5 w-100'>
                <div className="modern-white-frame shadow-frame-dark w-100">

                    {/* INTERNO NERO */}
                    <div className="inner-dark-canvas p-4 p-md-5">

                        {/* NOME PRODOTTO */}
                        <div className="mb-4 text-center">
                            <h1 className="fw-bold text-white m-0 h2 text-uppercase tracking-widest">
                                {product.name}
                            </h1>
                            <div className="accent-line mx-auto mt-2"></div>
                        </div>

                        {/* INFO PRINCIPALI */}
                        <div className="product-details-grid mt-5">
                            <div className="mb-4">
                                <span className="detail-label">{isTurntable ? 'BRAND' : 'ARTIST'}</span>
                                <p className="detail-value text-gold">{isTurntable ? product.brand : product.artist_name}</p>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <span className="detail-label">{isTurntable ? 'COLOR' : 'RELEASE'}</span>
                                    <p className="detail-value">{isTurntable ? product.color : product.release_year}</p>
                                </div>
                                <div className="text-end">
                                    <span className="detail-label">GENRE</span>
                                    <p className="detail-value">{product.genre_name || 'Hardware'}</p>
                                </div>
                            </div>

                            {isTurntable && (
                                <div className="mb-4">
                                    <span className="detail-label">TECHNICAL DESCRIPTION</span>
                                    <p className="detail-text">{product.description}</p>
                                </div>
                            )}
                        </div>

                        {/* PREZZO ED ETICHETTA */}
                        <div className="price-section mt-1 pt-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="detail-label">PRICE</span>
                                    <div className="d-flex align-items-baseline gap-2">
                                        <span className="fs-2 fw-bold text-white">
                                            {product.discount > 0
                                                ? (product.full_price * (1 - product.discount / 100)).toFixed(2)
                                                : product.full_price}€
                                        </span>
                                        {product.discount > 0 && (
                                            <span className="text-decoration-line-through text-secondary small">{product.full_price}€</span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="badge-stock">STOCK: {product.amount}</span>
                                </div>
                            </div>
                        </div>

                        {/* BOTTONE ACTION */}
                        <button
                            className="btn-add-collection w-100 mt-2"
                            onClick={() => addToCart(product)}
                            disabled={product.amount === 0}
                        >
                            {product.amount === 0 ? 'NOT AVAILABLE' : 'ADD TO COLLECTION'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}