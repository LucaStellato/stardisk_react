import { Link } from "react-router-dom"

export default function CatalogBox({ vinyl }) {

    return (
        <>
            <div className="vinyl-box-wrapper">
                <div className="vinyl-box ">
                    <Link
                        to={`/${vinyl.slug}`}>
                        <img
                            src={vinyl.img_url}
                            alt={vinyl.name}
                            className="vinyl-disc vinyl-disc-top"
                        />

                        <img
                            src="/plain-vinyl.webp"
                            alt="vinyl disc"
                            className="vinyl-disc vinyl-disc-bottom"
                        />

                        <div className="vinyl-cover">
                            <p className="vinyl-title fs-5 fw-bold text-light mb-0">
                                {vinyl.artist_name}
                            </p>
                            <p className="vinyl-title fs-3 fw-bold text-light mb-0">
                                {vinyl.name.toUpperCase()}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}