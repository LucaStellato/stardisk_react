import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function DetailPage() {

    const [currentVinyl, setCurrentVinyl] = useState(null)

    const { slug } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(res => {
                console.log(res.data)
                setCurrentVinyl(res.data[0])
            })
    }, [slug])

    return (
        <>
            <div className="bg-lightyellow schizzi">
                <div className="container">
                    <div className="row">
                        {!currentVinyl ? (
                            <h1>stellina</h1>
                        ) : (
                            <>
                                <div className="col-7 p-5">
                                    <img className="p-5 card-img-top" src={`${currentVinyl.img_url}`} alt="Title" />
                                </div>
                                <div className="col-5 p-5">
                                    <div className=" border-0 ">
                                        <div className=" ps-5">
                                            <h1 className=" fw-bold text-center text-red pb-4 mt-5">{`${currentVinyl.name}`}</h1>
                                            <p className="fw-bold fs-3 text-blue mt-2">Artist Name:
                                                <span className="text-yellow ms-2 ">
                                                    {`${currentVinyl.artist_name}`}
                                                </span>
                                            </p>
                                            <p className="fw-bold fs-3 text-blue mt-2">Release Year:
                                                <span className="text-yellow ms-2">
                                                    {`${currentVinyl.release_year}`}
                                                </span>
                                            </p>

                                            <p className="fw-bold fs-3 text-blue mt-2">Genre:
                                                <span className="text-yellow ms-2">
                                                    {`${currentVinyl.genre_name}`}
                                                </span>
                                            </p>

                                            <p className="fw-bold fs-3 text-blue mt-2">Record Label:
                                                <span className="text-yellow ms-2">
                                                    {`${currentVinyl.record_label}`}
                                                </span>
                                            </p>

                                            <p className=" fs-2 text-blue fw-bold mt-2">Price:
                                                {currentVinyl.discount > 0 ? (
                                                    <>
                                                        <span>
                                                            {` ${(currentVinyl.full_price * (1 - currentVinyl.discount / 100)).toFixed(2)}€`}
                                                        </span>
                                                        <span className="text-decoration-line-through ms-2 text-yellow">
                                                            {`${currentVinyl.full_price}€`}
                                                        </span>
                                                        <span className="text-red ms-2">
                                                            {`-${currentVinyl.discount}%`}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span>{`${currentVinyl.full_price} €`}</span>
                                                )}
                                            </p>

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