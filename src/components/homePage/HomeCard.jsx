import { Link } from "react-router-dom";

export default function HomeCard({ item, isTurntable = false }) {
    // Calcolo del prezzo scontato (se presente)
    const priceScontato = (item.full_price * (1 - (item.discount || 0) / 100)).toFixed(2);

    return (
        <div className="col">
            <Link to={`/${item.slug}`}>
                <div className="card border-0 bg-transparent h-100">
                    <img
                        src={item.img_url}
                        className={`card-img-top ${isTurntable ? 'turntable' : ''}`}
                        alt={item.name}
                    />
                    <div className="card-body text-blue fw-bold bg-transparent px-0">
                        <h5 className="card-title fw-bold">{item.name}</h5>
                        <p className="fs-6 text-blue fw-bold mt-2">
                            {item.discount > 0 ? (
                                <>
                                    <span className="fs-5">{priceScontato}€</span>
                                    <span className="text-decoration-line-through ms-2 fs-7 small text-yellow">
                                        {item.full_price}€
                                    </span>
                                    <span className="text-red fs-4 ms-2">-{item.discount}%</span>
                                </>
                            ) : (
                                <span>{item.full_price}€</span>
                            )}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}