import { Link } from "react-router-dom";

export default function HomeCard({ item, isTurntable = false }) {
    const priceScontato = (item.full_price * (1 - (item.discount || 0) / 100)).toFixed(2);

    return (
        <Link to={`/products/${item.slug}`} className="text-decoration-none">
            <div className="card border-0 bg-transparent h-100">
                <img src={item.img_url} className={`card-img-top ${isTurntable ? 'turntable object-fit-contain' : 'object-fit-cover'}`} alt={item.name} />
                <div className="card-body text-blue fw-bold bg-transparent px-0">
                    <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                    <div className="d-flex align-items-center flex-wrap">
                        {item.discount > 0 ? (
                            <>
                                <span className="fs-5">{priceScontato}€</span>
                                <span className="text-decoration-line-through ms-2 small text-yellow opacity-75">
                                    {item.full_price}€
                                </span>
                                <span className="text-red fs-5 ms-2">-{item.discount}%</span>
                            </>
                        ) : (
                            <span className="fs-5">{item.full_price}€</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}