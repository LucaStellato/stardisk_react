import { Link } from "react-router-dom"

export default function CatalogBox({ vinyl }) {

    const priceDisplay = vinyl.final_price || (vinyl.full_price * (1 - (vinyl.discount || 0) / 100)).toFixed(2);

    return (
        <div className="vinyl-box-wrapper">
            <div className="vinyl-box">
                <Link to={`/products/${vinyl.slug}`}>
                    <img src={vinyl.img_url} alt={vinyl.name} className="vinyl-disc vinyl-disc-top" />

                    <img src="/plain-vinyl.webp" alt="vinyl disc" className="vinyl-disc vinyl-disc-bottom" />

                    <div className="vinyl-cover">
                        <p className="vinyl-title fs-6 fw-bold text-light mb-0 mt-2">
                            {vinyl.artist_name}
                        </p>
                        <h2 className="vinyl-title mt-2 fs-5 fw-bold text-light mb-0">
                            {vinyl.name.toUpperCase()}
                        </h2>
                        <p className="text-center text-light fs-6 pt-2 fw-bold">{priceDisplay}€</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}