import { Link } from "react-router-dom";

export default function RelatedProducts({ products }) {
    if (!products || products.length === 0) return null;

    return (
        <div className="row d-flex justify-content-center align-items-center g-5 mt-3">
            <div className="col-12">
                <h1 className="fw-bold text-red pb-3 text-center">Related Products</h1>
            </div>
            {products.map(prod => (
                <div key={prod.slug} className="col col-md-3 mb-4">
                    <Link to={`/${prod.slug}`} className="text-decoration-none">
                        <div className="card border-0 bg-transparent h-100">
                            <img src={prod.img_url} className="card-img-top" alt={prod.name} />
                            <div className="card-body text-blue fw-bold bg-transparent px-0">
                                <h5 className="card-title fw-bold fs-6">{prod.name}</h5>
                                <div className="fs-6 text-blue fw-bold mt-2">
                                    {prod.discount > 0 ? (
                                        <>
                                            <span className="fs-5">{(prod.full_price * (1 - prod.discount / 100)).toFixed(2)}€ </span>
                                            <span className="text-decoration-line-through small text-secondary">{prod.full_price}€</span>
                                        </>
                                    ) : (
                                        <span>{prod.full_price}€</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}