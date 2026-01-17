import { Link } from "react-router-dom"

export default function BannerShowCatalog() {
    return (
        <section className="bg-yellow py-5">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
                <p className="text-blue fw-bold fs-3 mb-4 mb-md-0">
                    RELIVE THE SOUND, YOUR COLLECTION AWAITS!
                </p>
                <Link to='/vinyls' className="btn btn-lg rounded-pill bg-red text-yellow fw-bold px-4 shadow-sm border-0">
                    VIEW CATALOG
                </Link>
            </div>
        </section>
    )
}