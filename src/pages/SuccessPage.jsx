import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="detail-wall py-5 min-vh-100 d-flex align-items-center">
            <div className="container">
                {/* GUSCIO ESTERNO DEL MANIFESTO */}
                <div className="modern-white-frame shadow-frame-dark mx-auto" style={{ maxWidth: '600px' }}>

                    {/* INTERNO PERSONALIZZATO BLU */}
                    <div className="bg-blue p-5 text-center" style={{ animation: 'scaleIn 0.5s ease-out' }}>

                        <div className="mb-4">
                            <i className="bi bi-disc text-yellow"
                                style={{ fontSize: '6rem', display: 'inline-block', animation: 'spin 4s linear infinite' }}>
                            </i>
                        </div>

                        <h1 className="fw-bold text-white text-uppercase mb-3 h2 tracking-widest">
                            Order received!
                        </h1>

                        <p className="fs-5 text-light mb-5">
                            Thank you for choosing <strong>StarDisk</strong>. <br />
                            Your collection is growing.
                        </p>

                        <div className="ps-4 ps-lg-0 mb-1 pt-2">
                            <Link to="/" className=" text-yellow fw-bold  text-decoration-none fs-5 tracking-widest">
                                <i className="bi bi-arrow-left me-2"></i> BACK TO HOME
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}