import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DetailPage() {

    const [currentVinyl, setCurrentVinyl] = useState(null)

    const { slug } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(res => {
                console.log(res.data)
                setCurrentVinyl(res.data[0])
            })
    }, [slug])

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        {!currentVinyl ? (
                            <h1>stellina</h1>
                        ) : (
                            <>
                                <div className="col">
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img className="card-img-top" src={`${currentVinyl.img_url}`} alt="Title" />
                                        <div className="card-body">
                                            <h4 className="card-title">{`${currentVinyl.name}`}</h4>
                                            <p className="card-text">{`${currentVinyl.description}`}</p>
                                        </div>
                                    </div>

                                </div>
                            </>

                        )}

                    </div>
                </div>
            </div>
        </>
    )
}