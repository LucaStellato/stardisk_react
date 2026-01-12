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
            <div className="bg-lightyellow">
                <div className="container">
                    <h1 className="pt-5 fw-bold text-blue">SALE</h1>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            vinyls.map((vinyl) => (
                                <div className="col">

                                    <Link>
                                        <div className="card border-0">
                                            <img src={vinyl.img_url} className="card-img-top" alt="..." />
                                            <div className="card-body bg-lightyellow text-blue fw-bold">
                                                <h5 className="card-title fw-bold">{vinyl.name}</h5>
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
            <div className="bg-blue d-flex justify-content-center align-items-center p-5">
                <div className="container align-items-center d-flex justify-content-between">
                    <p className="text-yellow fw-bold fs-3">Rivivi il sound. La tua collezione ti aspetta.</p>
                    <button className="btn btn-lg rounded-pill bg-red">
                        <span className="text-yellow fw-bold">Vai al catalogo</span>
                    </button>
                </div>
            </div>
            <div className="bg-lightyellow">
                <div className="container">
                    <h1 className=" pt-5 fw-bold text-blue">RECENTS</h1>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            vinyls.map((vinyl) => (
                                <div className="col">
                                    <Link>
                                        <div className="card border-0">
                                            <img src={vinyl.img_url} className="card-img-top" alt="..." />
                                            <div className="card-body bg-lightyellow text-blue fw-bold">
                                                <h5 className="card-title fw-bold">{vinyl.name}</h5>
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