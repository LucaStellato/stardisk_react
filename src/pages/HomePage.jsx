import axios from "axios"
import { useState, useEffect } from "react"
import Jumbotron from "../components/jumbotron"
import { Link } from "react-router-dom"


export default function HomePage() {

    const [vinyls, setVinyls] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                const filteredData = response.data.filter(item => item.discount > 0)
                console.log(filteredData)
                setVinyls(filteredData)
            })
    }, [])

    return (
        <>
            <Jumbotron />
            <div className="bg-light">
                <div className="container">
                    <h2 className="text-center pt-5 fw-bold">In offerta</h2>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            vinyls.map((vinyl) => (
                                <div className="col">

                                    <Link>
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{vinyl.name}</h5>
                                                <p className="card-text">{vinyl.full_price}</p>
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