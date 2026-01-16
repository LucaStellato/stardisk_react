import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"

export default function DetailPage() {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]); // Stato per i correlati
    const { slug } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        setCurrentProduct(null);
        setRelatedProducts([]);

        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(res => {
                setCurrentProduct(res.data[0]);
            })
            .catch(err => console.error("Errore caricamento prodotto:", err));

        axios.get(`http://localhost:3000/api/products/${slug}/related`)
            .then(res => {
                setRelatedProducts(res.data);
            })
            .catch(err => console.error("Errore caricamento correlati:", err));

    }, [slug]);

    return (
        <>
            <div className="detail-wall schizzi">
                <div className="container">
                    <div className="container pt-5 mb-3 text-start">
                        <Link to="/" className="btn btn-lg bg-blue text-yellow fw-bold">
                            <i className="bi bi-arrow-left me-2"></i>
                            Back to home
                        </Link>
                    </div>
                    <div className="row">
                        {!currentProduct ? (
                            <h1>Loading Data...</h1>
                        ) : (
                            <>
                                <div className="col-12 col-md-6 p-5">
                                    {currentProduct?.category === "vinyl" ? (
                                        <div className="vinyl-scene">
                                            <div className="vinyl-holder"></div>
                                            <img className="vinyl-on-wall" src={currentProduct.img_url} alt={currentProduct.name} />
                                        </div>
                                    ) : (
                                        <img className="card-img-top" src={currentProduct.img_url} alt="" />
                                    )

                                    }
                                </div>
                                <div className="col-12 col-md-6 p-5">
                                    <div className=" border-0 ">
                                        <div className=" ps-5 pt-5">
                                            <h1 className=" fw-bold text-red pb-4 mt-5">{`${currentProduct.name}`}</h1>
                                            <p className="fw-bold fs-3 text-blue mt-2">
                                                {currentProduct.category === 'turntable' ? 'Brand:' : 'Artist Name:'}
                                                <span className="text-yellow ms-2 ">
                                                    {currentProduct.category === 'turntable' ? currentProduct.brand : currentProduct.artist_name}
                                                </span>
                                            </p>
                                            <p className="fw-bold fs-3 text-blue mt-2">
                                                {currentProduct.category === 'turntable' ? 'Color:' : 'Release Year:'}
                                                <span className="text-yellow ms-2">
                                                    {currentProduct.category === 'turntable' ? currentProduct.color : currentProduct.release_year}
                                                </span>
                                            </p>

                                            {currentProduct.category === 'turntable' ? (
                                                <div className="accordion accordion-flush " id="descriptionAccordion">
                                                    <div className="accordion-item bg-transparent border-blue">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button
                                                                className="accordion-button collapsed bg-transparent text-blue fw-bold fs-3 ps-0"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseDescription"
                                                                aria-expanded="false"
                                                                aria-controls="collapseDescription"
                                                            >
                                                                Technical Info:
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseDescription"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingOne"
                                                            data-bs-parent="#descriptionAccordion"
                                                        >
                                                            <span className="accordion-body text-yellow ps-0 fw-bold">
                                                                {currentProduct.description}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="fw-bold fs-3 text-blue mt-2">
                                                    Genre:
                                                    <span className="text-yellow ms-2">
                                                        {currentProduct.genre_name}
                                                    </span>
                                                </p>
                                            )}

                                            {currentProduct.category !== 'turntable' && (
                                                <p className="fw-bold fs-3 text-blue mt-2">Record Label:
                                                    <span className="text-yellow ms-2">
                                                        {`${currentProduct.record_label}`}
                                                    </span>
                                                </p>
                                            )}

                                            <div className=" fs-2 text-blue fw-bold mt-2 mb-0">Price:
                                                {currentProduct.discount > 0 ? (
                                                    <>
                                                        <p style={{ display: "inline" }} className="fs-3"> {` ${(currentProduct.full_price * (1 - currentProduct.discount / 100)).toFixed(2)}€`}</p>
                                                        <p style={{ display: "inline" }} className="text-decoration-line-through ms-2 fs-4 text-secondary">{`${currentProduct.full_price}€`}</p>
                                                        <span className="text-red ms-2">{`-${currentProduct.discount}%`}</span>
                                                    </>
                                                ) : (
                                                    <p style={{ display: "inline" }}> {`${currentProduct.full_price} €`}</p>
                                                )}
                                            </div>
                                            <div className="text-muted small">Disponibili: {currentProduct.amount} pz.</div>
                                            <button className="btn btn-lg bg-yellow text-blue fw-bold w-100 mt-3" onClick={() => addToCart(currentProduct)} disabled={currentProduct.amount === 0}>
                                                {currentProduct.amount === 0 ? 'Esaurito' : 'Aggiungi al carrello'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {currentProduct?.category === 'vinyl' &&
                        <div className="row ps-5 pt-3">
                            <div className="col-7">
                                <h1 className="fw-bold text-red pb-3">TrackList</h1>
                                <p className="text-blue fw-bold fs-4">Work in Progress...</p>
                            </div>
                            <div className="col-5">
                                <h1 className="fw-bold text-red pb-3">Album Description</h1>
                                <p className="text-blue fw-bold fs-4">Work in Progress...</p>

                            </div>
                        </div>
                    }
                    {relatedProducts.length > 0 && (
                        <div className="row d-flex justify-content-center align-items-center g-5 mt-3">
                            <div className="col-12">
                                <h1 className="fw-bold text-red pb-3 text-center">Related Vinyls</h1>
                            </div>
                            {relatedProducts.map(prod => (
                                <div key={prod.slug} className="col col-md-3 mb-4">
                                    <Link to={`/${prod.slug}`} className="text-decoration-none">
                                        <div className="card border-0 bg-transparent h-100">
                                            <img src={prod.img_url} className="card-img-top" alt={prod.name} />
                                            <div className="card-body text-blue fw-bold bg-transparent px-0">
                                                <h5 className="card-title fw-bold fs-6">{prod.name}</h5>
                                                <p className="fs-6 text-blue fw-bold mt-2">
                                                    {prod.discount > 0 ? (
                                                        <>
                                                            <span className="fs-5">
                                                                {(prod.full_price * (1 - prod.discount / 100)).toFixed(2)}€
                                                            </span>
                                                            <span className="text-decoration-line-through ms-2 small text-secondary">
                                                                {prod.full_price}€
                                                            </span>
                                                            <span className="text-red ms-2">
                                                                -{prod.discount}%
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span>{prod.full_price} €</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div >
            </div >
        </>
    )
} 