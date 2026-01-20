import { Link } from "react-router-dom"

export default function BannerShowCatalog() {
    return (
        <section className="bg-yellow py-5">
            <div className="container py-2 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
                <p className="text-blue fw-bold fs-3 mb-4 mb-md-0">
                    RELIVE THE SOUND, YOUR COLLECTION AWAITS!
                </p>
                <Link to='/vinyls' className="btn btn-lg rounded-2 bg-black-custom text-yellow fw-bold px-4 shadow-sm border-0">
                    SHOW VINYLS
                </Link>
            </div>
        </section>
    )
}