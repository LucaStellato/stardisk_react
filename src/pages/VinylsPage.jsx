import { useEffect, useState } from "react"
import axios from "axios"
import CatalogBox from "../components/CatalogBox"

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
                        <div className="col-12 col-md-6 col-xl-4" key={vinyl.slug}>
                            <CatalogBox vinyl={vinyl} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
