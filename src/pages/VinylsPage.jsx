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
    const currentSort = params.get("sort") || "name_asc"

    const [query, setQuery] = useState(currentQuery)
    const [sort, setSort] = useState(currentSort)

    useEffect(() => {
        setQuery(currentQuery)
        setSort(currentSort)

        let apiUrl = currentQuery
            ? `http://localhost:3000/api/products/search?query=${currentQuery}&sort=${currentSort}`
            : `http://localhost:3000/api/products/search?sort=${currentSort}`

        axios.get(apiUrl)
            .then(res => {
                const data = res.data.filter(item =>
                    item.category?.toString().toLowerCase().trim() === "vinyl"
                )
                setVinyls(data)
            })
            .catch(err => console.error("Errore API:", err))
    }, [location.search])

    const handleSearch = (e) => {
        e.preventDefault()
        updateUrl(query, sort)
    }

    const handleSortChange = (e) => {
        const newSort = e.target.value
        setSort(newSort)
        updateUrl(query, newSort)
    }

    const updateUrl = (newQuery, newSort) => {
        const searchParams = new URLSearchParams()
        if (newQuery.trim()) searchParams.set("query", newQuery.trim())
        if (newSort) searchParams.set("sort", newSort)

        navigate(`/vinyls?${searchParams.toString()}`)
    }

    return (
        <section className="bg-graffiti">
            <div className="container py-5 schizzi">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h1 className="fw-bold text-blue mb-4 mt-4">VINYLS CATALOG</h1>

                    <div className="d-flex gap-3 align-items-center mb-4 mt-4">
                        <select
                            className="form-select fw-bold w-auto text-blue bg-yellow rounded-2"
                            value={sort}
                            onChange={handleSortChange}
                        >
                            <option value="name_asc">Name (A-Z)</option>
                            <option value="name_desc">Name (Z-A)</option>
                            <option value="price_asc">Price ↑</option>
                            <option value="price_desc">Price  ↓</option>
                        </select>

                        <form onSubmit={handleSearch} className="d-flex gap-2 pe-5 me-5">
                            <input
                                type="text"
                                className="form-control shadow"
                                placeholder="Search vinyls..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button type="submit" className="btn bg-blue text-yellow fw-bold me-5">Search</button>
                        </form>
                    </div>
                </div>

                <div className="row g-1">
                    {vinyls.length > 0 ? (
                        vinyls.map(v => (
                            <div className="col-md-4" key={v.slug}>
                                <CatalogBox vinyl={v} />
                            </div>
                        ))
                    ) : (
                        <div className="text-center w-100 py-5">
                            <div className="fs-4 text-blue">No vinyl found.</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}