import { Link } from "react-router-dom";

export default function HomeCard({ item, isTurntable = false }) {
    const priceScontato = (item.full_price * (1 - (item.discount || 0) / 100)).toFixed(2);
    const hoverClass = isTurntable ? "hover-white-card" : "";

    return (
        <Link to={`/products/${item.slug}`} className="text-decoration-none">
            <div className={`card hover-white-card border-0 bg-transparent h-100 d-flex flex-column p-1  rounded-2 ${hoverClass}`}>

                <div className="d-flex justify-content-center m-2 align-items-center">
                    <img
                        src={item.img_url}
                        className="card-img-top "
                        alt={item.name}
                        style={{
                            height: isTurntable ? '180px' : '100%',
                            maxHeight: isTurntable ? '2000px' : 'none',
                            objectFit: isTurntable ? 'contain' : 'cover'
                        }}
                    />
                </div>

                <div className="card-body text-center fw-bold px-0 pt-0">
                    <div className="vinyl-label w-100 border-0">
                        <h4 className="card-title fw-bold text-dark" style={{ fontSize: '1rem' }}>
                            {item.name}
                        </h4>
                        <div className="d-flex align-items-center justify-content-center flex-wrap mt-1">
                            {item.discount > 0 ? (
                                <>
                                    <p className="fs-5 text-dark mb-0">{priceScontato}€</p>
                                    <p className="text-decoration-line-through fs-6 ms-2 small text-yellow opacity-75 mb-0">
                                        {item.full_price}€
                                    </p>
                                    <p className="text-red fs-5 ms-2 mb-0">-{item.discount}%</p>
                                </>
                            ) : (
                                <p className="fs-5 text-dark mb-0">{item.full_price}€</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
