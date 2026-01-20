
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
    const { wishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    return (
        <div className="detail-wall py-5 min-vh-100">
            <div className="container py-5">

                <div className="modern-white-frame shadow-frame-dark w-100" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="inner-dark-canvas p-4 p-md-5">

                        <div className="text-center mb-5">
                            <h1 className="fw-bold text-white text-uppercase tracking-widest m-0 h2">
                                Private Collection
                            </h1>
                            <div className="accent-line mx-auto mt-2"></div>
                            <p className="text-gold mt-3 small tracking-widest">
                                {wishlist.length} {wishlist.length === 1 ? 'MASTERPIECE' : 'MASTERPIECES'} SAVED
                            </p>
                        </div>

                        {wishlist.length === 0 ? (
                            <div className="text-center py-5">
                                <p className="text-muted mb-4 fs-5">Your wall is currently empty.</p>
                                <Link to="/catalog" className="btn-add-collection px-5 py-2">
                                    BROWSE CATALOG
                                </Link>
                            </div>
                        ) : (
                            <div className="d-flex flex-column gap-5">
                                {wishlist.map((product) => (
                                    <div key={product.product_id} className="row align-items-center border-bottom border-secondary pb-4">

                                        {/* COLONNA SINISTRA: IMMAGINE E MENSOLA */}
                                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                                            <div className="vinyl-scene justify-content-start">
                                                <Link to={`/product/${product.slug}`}>
                                                    <img
                                                        src={product.img_url || 'https://via.placeholder.com/400'}
                                                        alt={product.name}
                                                        className="vinyl-on-wall img-fluid shadow-sm"
                                                        style={{ width: '150px', aspectRatio: '1/1', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                                <div className="vinyl-holder mt-2" style={{ width: '100px' }}></div>
                                            </div>
                                        </div>

                                        {/* COLONNA DESTRA: TESTI E BOTTONI */}
                                        <div className="col-12 col-md-8 text-center text-md-start">
                                            <h5 className="text-white text-uppercase mb-1 tracking-widest">
                                                {product.name}
                                            </h5>
                                            <p className="text-gold small mb-3">{product.artist_name || product.brand}</p>

                                            <div className="d-flex justify-content-center justify-content-md-start gap-3">
                                                <button
                                                    className="btn-add-collection py-2 px-4 border-0"
                                                    style={{ fontSize: '0.75rem', backgroundColor: '#fff', color: '#000', minWidth: '120px' }}
                                                    onClick={() => addToCart(product)}
                                                >
                                                    <i className="bi bi-bag me-2"></i> ADD TO CART
                                                </button>
                                                <button
                                                    className="btn-add-collection py-2 px-3"
                                                    style={{ fontSize: '0.75rem', border: '1px solid #D05335', color: '#D05335' }}
                                                    onClick={() => toggleWishlist(product)}
                                                >
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/catalog" className="text-white text-decoration-none small tracking-widest opacity-50 hover-opacity-100">
                        <i className="bi bi-arrow-left me-2"></i> BACK TO CATALOG
                    </Link>
                </div>

            </div>
        </div>
    );
}