import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//import {useParams} from "react-router-dom"
import axios from "axios"


export default function VinylsPage() {
    const [vinyls, setVinyls] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log(response)
                setVinyls(response.data)
            })
            .catch(error => {
                console.log("Error loading vinyls:", error)
            })
    }, [])

    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">Vinyl Catalog</h1>

            <div className="row g-4">
                {vinyls.map(vinyl => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={vinyl.id}>
                        <div className="card">

                            <img
                                src={vinyl.image}
                                className="card-img-top"
                                alt={vinyl.name} />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    {vinyl.name}
                                </h5>

                                <p className="card-text text-muted small">
                                    {vinyl.description}
                                </p>

                                <p className="fw-bold mb-2">
                                    €{vinyl.full_price}
                                </p>3

                                <Link
                                    to={`/vinyls/${vinyl.slug}`}
                                    className="btn btn-primary mt-auto">
                                    View details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}