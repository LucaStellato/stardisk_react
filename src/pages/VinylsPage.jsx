import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import CatalogBox from "../components/CatalogBox"

export default function VinylsPage() {
    const [vinyls, setVinyls] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    const params = new URLSearchParams(location.search)
    const currentQuery = params.get("query") || ""
    const [query, setQuery] = useState(currentQuery)

    useEffect(() => {
        setQuery(currentQuery)

        const apiUrl = currentQuery
            ? `http://localhost:3000/api/products/search?query=${currentQuery}`
            : `http://localhost:3000/api/products`

        axios.get(apiUrl)
            .then(res => {
                console.log("Dati ricevuti:", res.data)

                const data = res.data.filter(item =>
                    item.category?.toString().toLowerCase().trim() === "vinyl"
                )

                setVinyls(data)
            })
            .catch(err => console.error("Errore API:", err))
    }, [location.search])

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(query.trim() ? `/vinyls?query=${query}` : `/vinyls`)
    }

    return (
        <div className="container py-5">
            <form onSubmit={handleSearch} className="mb-4 d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca vinili..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            <div className="row g-4">
                {vinyls.length > 0 ? (
                    vinyls.map(v => (
                        <div className="col-md-4" key={v.slug}>
                            <CatalogBox vinyl={v} />
                        </div>
                    ))
                ) : (
                    <div className="text-center w-100">
                        <p>Nessun vinile trovato. Controlla la console (F12) per i dettagli.</p>
                    </div>
                )}
            </div>
        </div>
    )
}