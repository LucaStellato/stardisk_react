import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <section className='bg-graffiti min-vh-100 d-flex align-items-center'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        <div className="text-center p-5 shadow-lg rounded-4 bg-white border-0"
                            style={{ animation: 'scaleIn 0.5s ease-out' }}>

                            <div className="mb-4">
                                <i className="bi bi-disc text-red"
                                    style={{ fontSize: '6rem', display: 'inline-block', animation: 'spin 4s linear infinite' }}>
                                </i>
                            </div>

                            <h1 className="fw-bold text-blue text-uppercase mb-3">Order received!</h1>
                            <p className="fs-5 text-blue mb-4">Thank you for choosing <strong>StarDisk</strong>.</p>

                            <Link to="/vinyls" className="btn bg-blue text-yellow fw-bold w-100 py-3 shadow-sm border-0">
                                BACK TO SHOP
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}