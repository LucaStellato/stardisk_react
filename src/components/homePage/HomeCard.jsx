import { Link } from "react-router-dom";

export default function HomeCard({ item, isTurntable = false }) {
    const priceScontato = (item.full_price * (1 - (item.discount || 0) / 100)).toFixed(2);

    return (
        <Link to={`/products/${item.slug}`} className="text-decoration-none">
            <div className="card border-0 bg-transparent h-100">
                <img
                    src={item.img_url}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                        height: isTurntable ? '180px' : '100%',
                        maxHeight: isTurntable ? '180px' : 'none',
                        objectFit: isTurntable ? 'contain' : 'cover'
                    }} />

                <div className="card-body text-blue text-center fw-bold bg-transparent px-0">
                    <h4 className="card-title fw-bold mb-1">{item.name}</h4>

                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                        {item.discount > 0 ? (
                            <>
                                <p className="fs-4">{priceScontato}€</p>
                                <p className="text-decoration-line-through fs-6 ms-2 small text-yellow opacity-75">
                                    {item.full_price}€
                                </p>
                                <p className="text-red fs-4 ms-2">-{item.discount}%</p>
                            </>
                        ) : (
                            <p className="fs-5">{item.full_price}€</p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}