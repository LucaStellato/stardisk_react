import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => setIsVisible(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenPopup', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/api/subscribe', { email })
            .then(() => {
                setStatus('Subscribed! Check your email.');
                localStorage.setItem('hasSeenPopup', 'true');
                setTimeout(closePopup, 2000);
            })
            .catch((err) => {
                setStatus('Something went wrong. Try again.');
            });
    };

    if (!isVisible) return null;

    return (
        <div className="vh-100 vw-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 9999, backdropFilter: 'blur(5px)' }}>
            <div className="bg-graffiti-popup p-4 p-md-5 shadow-lg position-relative border-0" style={{ maxWidth: '450px', width: '90%', animation: 'scaleIn 0.3s ease-out' }}>

                <button type="button" className="btn-close position-absolute top-0 end-0 m-3 shadow-none" onClick={closePopup} aria-label="Close"></button>

                <div className="text-center">
                    <h3 className="fw-bold text-blue text-uppercase mb-3">Vinyl Club</h3>
                    <p className="text-muted mb-4">Subscribe to our newsletter and get 10% off your first order!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" className="form-control border-blue py-2 shadow-none" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button type="submit" className="btn bg-yellow text-blue fw-bold w-100 py-2 text-uppercase border-0 shadow-sm">
                            Join Now
                        </button>
                    </form>

                    {status &&
                        <div className="mt-3 small fw-bold text-blue">
                            {status}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}