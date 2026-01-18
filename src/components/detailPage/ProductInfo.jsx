import { useCart } from "../../contexts/CartContext";

export default function ProductInfo({ product }) {

    const { addToCart } = useCart()
    const isTurntable = product.category === 'turntable'

    return (
        <div className="col-12 col-md-6 p-5">
            <div className="ps-md-5 pt-md-5">
                <h1 className="fw-bold text-red pb-4 mt-5">{product.name}</h1>

                <p className="fw-bold fs-3 text-blue mt-2">
                    {isTurntable ? 'Brand:' : 'Artist Name:'}
                    <span className="text-yellow ms-2">{isTurntable ? product.brand : product.artist_name}</span>
                </p>

                <p className="fw-bold fs-3 text-blue mt-2">
                    {isTurntable ? 'Color:' : 'Release Year:'}
                    <span className="text-yellow ms-2">{isTurntable ? product.color : product.release_year}</span>
                </p>

                {isTurntable ? (
                    <div className="accordion accordion-flush" id="descriptionAccordion">
                        <div className="accordion-item bg-transparent border-blue">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed bg-transparent text-blue fw-bold fs-3 ps-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDescription">
                                    Technical Info:
                                </button>
                            </h2>
                            <div id="collapseDescription" className="accordion-collapse collapse" data-bs-parent="#descriptionAccordion">
                                <div className="accordion-body text-yellow ps-0 fw-bold">{product.description}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="fw-bold fs-3 text-blue mt-2">
                        Genre: <span className="text-yellow ms-2">{product.genre_name}</span>
                    </p>
                )}

                {!isTurntable && (
                    <p className="fw-bold fs-3 text-blue mt-2">Record Label:
                        <span className="text-yellow ms-2">{product.record_label}</span>
                    </p>
                )}

                <div className="fs-2 text-blue fw-bold mt-2 mb-0">
                    Price:
                    {product.discount > 0 ? (
                        <>
                            <span className="fs-3 ms-2">{(product.full_price * (1 - product.discount / 100)).toFixed(2)}€</span>
                            <span className="text-decoration-line-through ms-2 fs-4 text-secondary">{product.full_price}€</span>
                            <span className="text-red ms-2">-{product.discount}%</span>
                        </>
                    ) : (
                        <span className="ms-2">{product.full_price}€</span>
                    )}
                </div>

                <div className="text-muted small">Available: {product.amount} pz.</div>

                <button className="btn btn-lg bg-yellow text-blue fw-bold w-100 mt-3" onClick={() => addToCart(product)} disabled={product.amount === 0}>
                    {product.amount === 0 ? 'Expired' : 'Add to cart'}
                </button>
            </div>
        </div>
    )
}