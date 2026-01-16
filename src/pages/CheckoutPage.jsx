import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import axios from 'axios';

export default function Checkoutpage() {
    const navigate = useNavigate();
    const { cart, clearCart } = useCart();

    const totaleCalcolato = cart.reduce((acc, item) => {
        const prezzo = item.priceFinal || parseFloat(item.full_price);
        return acc + (prezzo * item.quantity);
    }, 0);

    const isSpedizioneGratuita = totaleCalcolato > 50;

    const [formData, setFormData] = useState({
        mail: '',
        name: '',
        surname: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payloadDati = {
            mail: formData.mail,
            name: formData.name,
            surname: formData.surname,
            address: formData.address,
            total_price: parseFloat(totaleCalcolato.toFixed(2)),
            free_shipment: isSpedizioneGratuita,
            products: cart.map(item => ({
                id: item.product_id,
                name: item.name,
                quantity: item.quantity
            }))
        };

        axios.post('http://localhost:3000/api/order', payloadDati)
            .then(response => {
                console.log("Ordine salvato!");
                clearCart();
                navigate('/success');
            })
            .catch(error => {
                console.error("Errore:", error);
                alert("Errore durante l'invio dell'ordine.");
            });
    };

    return (
        <section className='bg-graffiti'>
            <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: 'calc(100vh - 160px)' }}>

                <div className="shadow-lg border-0 p-4 bg-white rounded" style={{ maxWidth: '500px', width: '100%' }}>
                    <div className="mb-4">
                        <h2 className="fw-bold text-blue text-uppercase">Checkout</h2>
                        <p className="text-muted small">Insert details to complete the order</p>
                    </div>

                    <div className="alert bg-light border-blue mb-4 py-2">
                        <div className="d-flex justify-content-between mb-1">
                            <span className="text-blue small">Total products:</span>
                            <span className="fw-bold text-blue">€{totaleCalcolato.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-blue small">Shipping:</span>
                            <span className={`fw-bold small ${isSpedizioneGratuita ? 'text-success' : 'text-blue'}`}>
                                {isSpedizioneGratuita ? 'FREE' : '€5.00'}
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold text-blue small text-uppercase">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control border-blue shadow-sm"
                                    placeholder="Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-bold text-blue small text-uppercase">Last name</label>
                                <input
                                    type="text"
                                    name="surname"
                                    className="form-control border-blue shadow-sm"
                                    placeholder="Surname"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold text-blue small text-uppercase">Email</label>
                            <input
                                type="email"
                                name="mail"
                                className="form-control border-blue shadow-sm"
                                placeholder="mail@example.com"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold text-blue small text-uppercase">Address</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control border-blue shadow-sm"
                                placeholder="Address and house number..."
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn bg-yellow text-blue fw-bold w-100 py-2 shadow-sm border-0">
                            CONFIRM ORDER
                        </button>

                        <button
                            type="button"
                            className="btn btn-link w-100 text-blue mt-2 text-decoration-none small"
                            onClick={() => navigate('/cart')}
                        >
                            ← Back to cart
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
}