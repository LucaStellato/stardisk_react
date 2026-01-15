import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkoutpage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        cognome: '',
        indirizzo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dati ordine inviati:", formData);
        navigate('/success');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: 'calc(100vh - 160px)' }}>

            <div className="shadow-lg border-0 p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className=" mb-4">
                    <h2 className="fw-bold text-blue text-uppercase">CHECKOUT</h2>
                    <p className="text-muted small">Inserisci i tuoi dati per completare l'ordine</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-bold text-blue">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                className="form-control border-blue"
                                placeholder="Mario"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-bold text-blue">Cognome</label>
                            <input
                                type="text"
                                name="cognome"
                                className="form-control border-blue"
                                placeholder="Rossi"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-blue">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control border-blue"
                            placeholder="mario.rossi@esempio.it"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold text-blue">Indirizzo Completo</label>
                        <textarea
                            name="indirizzo"
                            className="form-control border-blue"
                            rows="3"
                            placeholder="Via Roma 10, 00100 Roma (RM)"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn bg-yellow text-blue fw-bold w-100 py-2 shadow-sm">
                        CONFERMA ORDINE
                    </button>

                    <button
                        type="button"
                        className="btn btn-link w-100 text-blue mt-2 text-decoration-none"
                        onClick={() => navigate('/cart')}
                    >
                        Torna al carrello
                    </button>
                </form>
            </div>
        </div>
    );
}