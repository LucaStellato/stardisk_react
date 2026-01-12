import { useEffect, useState } from "react"
//import {useParams} from "react-router-dom"
import axios from "axios"


export default function VinylsPage() {
    const [vinyls, setVinyls] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log(response)
                setVinyls(response.data)
            })
    }, [])
    return (
        <>
            <ul>
                {vinyls.map((vinyl) => (
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{vinyl.name}</h5>
                            <p className="card-text">{vinyl.description}</p>
                            <p className="card-text">{vinyl.full_price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}

            </ul>


        </>
    )
}