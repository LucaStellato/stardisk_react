import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function DetailPage() {

    const [currentProduct, setCurrentProduct] = useState(null)

    const { slug } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(res => {
                console.log(res.data)
                setCurrentProduct(res.data[0])
            })
    }, [slug])

    return (
        <>
            <div className="bg-lightyellow schizzi">
                <div className="container">
                    <div className="container pt-5 mb-3 text-center">
                        <Link to="/" className="btn btn-lg bg-blue text-yellow fw-bold w-25">
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
                                    <img className="p-5 card-img-top" src={`${currentProduct.img_url}`} alt="Title" />
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
                                                            <div className="accordion-body text-yellow ps-0 fw-bold">
                                                                {currentProduct.description}
                                                            </div>
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

                                            <p className=" fs-2 text-blue fw-bold mt-2">Price:
                                                {currentProduct.discount > 0 ? (
                                                    <>
                                                        <span> {` ${(currentProduct.full_price * (1 - currentProduct.discount / 100)).toFixed(2)}€`}</span>
                                                        <span className="text-decoration-line-through ms-2 text-yellow">{`${currentProduct.full_price}€`}</span>
                                                        <span className="text-red ms-2">{`-${currentProduct.discount}%`}</span>
                                                    </>
                                                ) : (
                                                    <span> {`${currentProduct.full_price} €`}</span>
                                                )}
                                            </p>

                                            <Link to="/" className="btn btn-lg bg-yellow fw-bold w-100 mt-3">Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div >
        </>
    )
}