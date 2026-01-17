// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function WelcomePopup() {
//     const [isVisible, setIsVisible] = useState(false);
//     const [email, setEmail] = useState('');
//     const [status, setStatus] = useState('');

//     useEffect(() => {
//         const hasSeenPopup = localStorage.getItem('hasSeenNewsletter');
//         if (!hasSeenPopup) {
//             const timer = setTimeout(() => setIsVisible(true), 3000);
//             return () => clearTimeout(timer);
//         }
//     }, []);

//     const closePopup = () => {
//         setIsVisible(false);
//         localStorage.setItem('hasSeenNewsletter', 'true');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:3000/api/subscribe', { email });
//             setStatus('Subscribed! Check your email. 🎶');
//             setTimeout(closePopup, 2000);
//         } catch (err) {
//             setStatus('Something went wrong. Try again.');
//         }
//     };

//     if (!isVisible) return null;

//     return (
//         <div className="popup-overlay">
//             <div className="popup-content bg-graffiti-popup border-0">
//                 <button className="btn-close-custom" onClick={closePopup}>&times;</button>

//                 <div className="text-center">
//                     <h3 className="fw-bold text-blue text-uppercase mb-3">Vinyl Club</h3>
//                     <p className="text-muted mb-4">Subscribe to our newsletter and get 10% off your first order!</p>

//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <input
//                                 type="email"
//                                 className="form-control border-blue py-2"
//                                 placeholder="name@example.com"
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="btn bg-yellow text-blue fw-bold w-100 py-2 text-uppercase border-0 shadow-sm">
//                             Join Now
//                         </button>
//                     </form>

//                     {status && <div className="mt-3 small fw-bold text-blue">{status}</div>}
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        // MODIFICA: Rimosso il controllo localStorage. 
        // Ora il timer parte ad ogni caricamento della pagina.
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        // MODIFICA: Rimosso localStorage.setItem.
        // Non salviamo più lo stato, quindi al prossimo refresh ricomincerà da capo.
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/subscribe', { email });
            setStatus('Subscribed! Check your email. 🎶');
            // Chiude dopo 2 secondi dal successo
            setTimeout(closePopup, 2000);
        } catch (err) {
            setStatus('Something went wrong. Try again.');
        }
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content bg-graffiti-popup border-0">
                <button className="btn-close-custom" onClick={closePopup}>&times;</button>

                <div className="text-center">
                    <h3 className="fw-bold text-blue text-uppercase mb-3">Vinyl Club</h3>
                    <p className="text-muted mb-4">Subscribe to our newsletter and get 10% off your first order!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control border-blue py-2"
                                placeholder="name@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn bg-yellow text-blue fw-bold w-100 py-2 text-uppercase border-0 shadow-sm">
                            Join Now
                        </button>
                    </form>

                    {status && <div className="mt-3 small fw-bold text-blue">{status}</div>}
                </div>
            </div>
        </div>
    );
}