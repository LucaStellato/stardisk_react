import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function VinylsPage() {
    const [vinyls, setVinyls] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                setVinyls(response.data)
            })
            .catch(error => {
                console.log("Error loading vinyls:", error)
            })
    }, [])

    return (
        <div className="bg-lightyellow">
            <div className="container py-5">
                <h1 className="text-center mb-4 fw-bold text-blue">Vinyl Catalog</h1>

                <div className="row g-4 justify-content-center">
                    {vinyls.map(vinyl => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={vinyl.id}>
                            <div className="vinyl-box-wrapper">

                                <div className="vinyl-box">
                                    <Link
                                        to={`/vinyls/${vinyl.slug}`}>
                                        <img
                                            src={vinyl.img_url}
                                            alt={vinyl.name}
                                            className="vinyl-disc vinyl-disc-top"
                                        />

                                        <img
                                            src="/plain-vinyl.webp"
                                            alt="vinyl disc"
                                            className="vinyl-disc vinyl-disc-bottom"
                                        />

                                        <div className="vinyl-cover">
                                            <p className="vinyl-title mb-0">
                                                {vinyl.name}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
