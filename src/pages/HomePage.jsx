import axios from "axios"
import { useState, useEffect } from "react"
import Jumbotron from "../components/jumbotron"
import { Link } from "react-router-dom"


export default function HomePage() {

    const [vinyls, setVinyls] = useState([])
    const [turntables, setTurnTables] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                const filteredData = response.data.filter(item => item.discount > 0 && item.category === "vinyl")
                console.log(filteredData)
                setVinyls(filteredData)
            })
    }, [])

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
            <Jumbotron />
            <div className="bg-lightyellow">
                <div className="container">
                    <h1 className="pt-5 fw-bold text-blue">SALE</h1>
                    <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                        {
                            vinyls.map((vinyl) => (
                                <div className="col" key={vinyl.product_id}>

                                    <Link to={`/${vinyl.slug}`}>
                                        <div className="card border-0">
                                            <img src={vinyl.img_url} className="card-img-top bg-lightyellow" alt="..." />
                                            <div className="card-body bg-lightyellow text-blue fw-bold">
                                                <h5 className="card-title fw-bold">{vinyl.name}</h5>
                                                <p className=" fs-6 text-blue fw-bold mt-2">
                                                    {vinyl.discount > 0 ? (
                                                        <>
                                                            <span>
                                                                {` ${(vinyl.full_price * (1 - vinyl.discount / 100)).toFixed(2)}€`}
                                                            </span>
                                                            <span className="text-decoration-line-through ms-2 text-yellow">
                                                                {`${vinyl.full_price}€`}
                                                            </span>
                                                            <span className="text-red ms-2">
                                                                {`-${vinyl.discount}%`}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span>{`${vinyl.full_price} €`}</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>


                </div>
            </div>
            <div className="bg-yellow d-flex justify-content-center align-items-center p-5">
                <div className="container align-items-center d-flex justify-content-between">
                    <p className="text-blue fw-bold fs-3">Relive the sound. Your collection awaits.</p>
                    <button className="btn btn-lg rounded-pill bg-red">
                        <Link to='/vinyls'><span className="text-yellow fw-bold">View catalog</span></Link>
                    </button>
                </div>
            </div>
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