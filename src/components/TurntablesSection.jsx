import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function TurntablesSection() {

    const [turntables, setTurnTables] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                const filteredData = response.data.filter(item => item.category === "turntable")
                console.log(filteredData)
                setTurnTables(filteredData)
            })
    }, [])

    return (
        <>
            <div className="bg-lightyellow">
                <div className="container">
                    <h1 className=" pt-5 fw-bold text-blue">TURNTABLES</h1>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            turntables.map((turntable) => (
                                <div className="col" key={turntable.product_id}>
                                    <Link to={`/${turntable.slug}`}>
                                        <div className="card border-0">
                                            <img src={turntable.img_url} className="card-img-top bg-lightyellow turntable" alt="..." />
                                            <div className="card-body bg-lightyellow text-blue fw-bold">
                                                <h5 className="card-title fw-bold">{turntable.name}</h5>
                                                <p className="card-text">{turntable.full_price}</p>
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