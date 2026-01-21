import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
    const { wishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    return (
        <div className="detail-wall py-5 min-vh-100">
            <div className="container-lg py-5">

                <div className="modern-white-frame shadow-frame-dark w-100" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="inner-dark-canvas p-4 p-md-5">

                        <div className="text-center mb-5">
                            <h1 className="fw-bold text-white text-uppercase tracking-widest m-0 h2">
                                Wishlist
                            </h1>
                            <div className="accent-line mx-auto mt-2"></div>
                        </div>

                        {wishlist.length === 0 ? (
                            <div className="text-center py-5">
                                <p className="text-secondary mb-5 pb-4 fs-5">Your wishlist is now empty.</p>
                                <Link to="/vinyls" className="btn-add-collection fw-semibold text-black fs-5 text-uppercase px-5 py-2 mt-5">
                                    Go to vinyls
                                </Link>
                            </div>
                        ) : (
                            <div className="d-flex flex-column gap-5">
                                {wishlist.map((product) => (
                                    <div key={product.product_id} className="row align-items-center border-bottom border-secondary">

                                        <div className="col-12 col-md-4 mb-3 mb-md-0 pb-5">
                                            <div className=" justify-content-start text-center">
                                                <Link to={`/product/${product.slug}`}>
                                                    <img
                                                        src={product.img_url || 'https://via.placeholder.com/400'}
                                                        alt={product.name}
                                                        className=" img-fluid shadow-sm"
                                                        style={{ width: '150px', aspectRatio: '1/1', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                                <div className=" mt-2" style={{ width: '100px' }}></div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-8">
                                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pb-5 gap-4">

                                                <div className="text-center text-md-start">
                                                    <h5 className="text-white text-uppercase mb-1 tracking-widest m-0">
                                                        {product.name}
                                                    </h5>
                                                    <p className="text-gold small m-0">
                                                        {product.artist_name || product.brand}
                                                    </p>
                                                </div>

                                                <div className="d-flex align-items-center  gap-3">
                                                    <button
                                                        className="btn-add-collection py-2 px-4 rounded-3 text-success"
                                                        style={{ fontSize: '1rem' }}
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        <i className="bi bi-bag"></i>
                                                    </button>
                                                    <button
                                                        className="btn-add-collection py-2 px-4 rounded-3 text-danger"
                                                        style={{ fontSize: '1rem' }}
                                                        onClick={() => toggleWishlist(product)}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

                <div className="mt-4 text-center mt-5 pt-2">
                    <Link to="/vinyls" className=" text-white text-decoration-none fs-1 tracking-widest">
                        <i className="bi bi-arrow-left me-2"></i> BACK TO VINYLS
                    </Link>
                </div>

            </div>
        </div>
    );
}