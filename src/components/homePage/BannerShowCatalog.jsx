import { Link } from "react-router-dom"

export default function BannerShowCatalog() {

    return (
        <>
            <div className="bg-yellow d-flex justify-content-center align-items-center p-5">
                <div className="container align-items-center d-flex justify-content-between">
                    <p className="text-blue fw-bold fs-3">RELIVE THE SOUND, YOUR COLLECTION AWAITS!</p>
                    <button className="btn btn-lg rounded-pill bg-red">
                        <Link to='/vinyls'><span className="text-yellow fw-bold">VIEW CATALOG</span></Link>
                    </button>
                </div>
            </div>
        </>
    )
}