import { Link } from "react-router-dom";

export default function RelatedProducts({ products }) {
    if (!products || products.length === 0) return null;

    return (
        <section className="container py-5 mt-3 d-flex justify-content-center align-items-center">
            <div className="modern-white-frame shadow-frame-dark p-md-4">
                <div className="inner-dark-canvas p-4">

                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="fw-bold text-white d-inline-block px-4 py-2 text-uppercase">
                                Related Products
                            </h2>
                            <div className="accent-line mx-auto mt-2"></div>
                        </div>
                    </div>

                    <div className="row row-cols-2 row-cols-md-4 g-1 justify-content-around align-items-center">
                        {products.map(prod => (
                            <div key={prod.slug} className="col">
                                <Link
                                    to={`/products/${prod.slug}`}
                                    className="related-item-wrapper h-100 d-flex flex-column text-decoration-none"
                                >
                                    <div className="related-img-container mb-2">
                                        <img
                                            src={prod.img_url}
                                            alt={prod.name}
                                            className="img-fluid shadow-sm related-img-hover w-100"
                                            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div className="text-center pt-2">
                                        <h6 className="text-white mb-1 text-uppercase small fw-bold">
                                            {prod.name}
                                        </h6>
                                        <p className="text-gold small m-0 fw-bold">
                                            {prod.full_price}€
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}