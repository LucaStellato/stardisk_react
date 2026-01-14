import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function SaleSection() {


    const [vinyls, setVinyls] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                const filteredData = response.data.filter(item => item.discount > 0 && item.category === "vinyl")
                console.log(filteredData)
                setVinyls(filteredData)
            })
    }, [])


    return (
        <>
            <div className="bg-lightyellow">
                <div className="container">
                    <h1 className="pt-5 fw-bold text-blue">SALE</h1>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            vinyls.map((vinyl) => (
                                <div className="col" key={vinyl.product_id}>

                                    <Link to={`/${vinyl.slug}`}>
                                        <div className="card border-0">
                                            <img src={vinyl.img_url} className="card-img-top bg-lightyellow" alt="..." />
                                            <div className="card-body bg-lightyellow text-blue fw-bold">
                                                <h5 className="card-title fw-bold">{vinyl.name}</h5>
                                                <p className=" fs-6 text-blue fw-bold mt-2">
                                                    {vinyl.discount > 0 ? (
                                                        <>
                                                            <span>
                                                                {` ${(vinyl.full_price * (1 - vinyl.discount / 100)).toFixed(2)}€`}
                                                            </span>
                                                            <span className="text-decoration-line-through ms-2 text-yellow">
                                                                {`${vinyl.full_price}€`}
                                                            </span>
                                                            <span className="text-red ms-2">
                                                                {`-${vinyl.discount}%`}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span>{`${vinyl.full_price} €`}</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}