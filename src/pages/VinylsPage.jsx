import { useEffect, useState } from "react"
import axios from "axios"
import CatalogBox from "../components/CatalogBox"

export default function VinylsPage() {

    const [vinyls, setVinyls] = useState([])
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]

    )
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

    const handleSearch = () => {
        fetch(`http://localhost:3000/api/products/search?q=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => setResults(data))
        console.log(results)
    }


    return (
        <div className="bg-lightyellow schizzi">
            <div className="container py-5">
                <h1 className="fw-bold text-blue">VINYL CATALOG</h1>
                <div>
                    <input type="text" placeholder="type to search..." value={query} onChange={(e) => setQuery(e.target.value)} style={{ width: '30%', padding: '8px' }} />
                    <button type="button" onClick={handleSearch} style={{ marginTop: '10px' }} className="p-2 text-blue">Search</button>
                </div>
                <div className="row">
                    {vinyls.map(vinyl => (
                        <div className="col-12 col-md-6 col-xl-4" key={vinyl.slug}>
                            <CatalogBox vinyl={vinyl} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {results.map(result => (
                        <div className="col-12 col-md-6 col-xl-4" key={result.slug}>
                            <CatalogBox vinyl={result} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
