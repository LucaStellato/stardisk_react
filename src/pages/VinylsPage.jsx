import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function VinylsPage() {
    const [vinyls, setVinyls] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                const filteredData = response.data.filter(item => item.category === "vinyl")
                setVinyls(filteredData)

            })
            .catch(error => {
                console.log("Error loading vinyls:", error)
            })
    }, [])

    return (
        <div className="bg-lightyellow schizzi">
            <div className="container py-5">
                <h1 className="fw-bold text-blue">VINYL CATALOG</h1>

                <div className="row">
                    {vinyls.map(vinyl => (
                        <div className="col-12 col-md-6 col-xl-4" key={vinyl.id}>
                            <div className="vinyl-box-wrapper">

                                <div className="vinyl-box ">
                                    <Link
                                        to={`/${vinyl.slug}`}>
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
                                            <p className="vinyl-title fs-5 fw-bold text-light mb-0">
                                                {vinyl.artist_name}
                                            </p>
                                            <p className="vinyl-title fs-2 fw-bold text-light mb-0">
                                                {vinyl.name.toUpperCase()}
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
