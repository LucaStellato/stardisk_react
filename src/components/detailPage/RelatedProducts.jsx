import { Link } from "react-router-dom";

export default function RelatedProducts({ products }) {
    if (!products || products.length === 0) return null;

    return (
        <section className="container py-5 mt-3">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h2 className="fw-bold text-red d-inline-block px-4 py-2 text-uppercase">
                        Related Products
                    </h2>
                </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
                {products.map(prod => (
                    <div key={prod.product_id} className="col p-3">
                        {/* LINK CHE INCARTA TUTTA LA CARD */}
                        <Link
                            to={`/products/${prod.slug}`}
                            className="related-item-wrapper h-100 d-flex flex-column text-decoration-none"
                        >

                            {/* IMMAGINE LIBERA (Sopra) */}
                            <div className="related-img-container mb-2">
                                <img
                                    src={prod.img_url}
                                    alt={prod.name}
                                    className="img-fluid shadow-sm related-img-hover w-100"
                                    style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                />
                            </div>

                            {/* TARGHETTA TESTO (Sotto) */}
                            <div className="d-flex justify-content-center align-items-center pt-2">
                                <div className="modern-white-frame shadow-frame-dark p-2 mt-auto w-50">
                                    <div className="inner-dark-canvas p-2 text-center">
                                        <h6 className="text-white mb-1 text-uppercase small fw-bold">
                                            {prod.name}
                                        </h6>
                                        <p className="text-gold small m-0 fw-bold">
                                            {prod.full_price}€
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}