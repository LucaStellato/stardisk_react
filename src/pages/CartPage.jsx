import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    // Estraiamo le funzioni dal Context
    const { cart, addToCart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    // Calcoliamo il totale generale
    const totaleGenerale = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Il tuo Carrello Vinili</h2>

            {cart.length === 0 ? (
                <div className="alert alert-info">Il carrello è vuoto.</div>
            ) : (
                <div className="card shadow border-0">
                    <div className="card-body">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>Vinile</th>
                                    <th>Prezzo</th>
                                    <th className="text-center">Quantità</th>
                                    <th>Subtotale</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="fw-bold">{item.title}</div>
                                            <small className="text-muted">Disponibilità: {item.amount} pz.</small>
                                        </td>
                                        <td>€{((item.full_price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                                        <td className="text-center">
                                            <div className="btn-group border rounded shadow-sm">
                                                {/* Tasto meno: Se arrivi a 0, lo rimuoviamo */}
                                                <button
                                                    className="btn btn-sm btn-light px-3"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    -
                                                </button>

                                                <span className="px-3 py-1 bg-white fw-bold">
                                                    {item.quantity}
                                                </span>

                                                {/* Tasto più: Riutilizziamo addToCart (che controlla già lo stock) */}
                                                <button
                                                    className="btn btn-sm btn-light px-3"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>€{(item.full_price * item.quantity).toFixed(2)}</td>
                                        <td className="text-end">
                                            <button
                                                className="btn btn-link text-danger p-0"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Elimina
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>
                                Continua Shopping
                            </button>
                            <div className="text-end">
                                <h4 className="mb-3">Totale: <span className="text-success">€{totaleGenerale.toFixed(2)}</span></h4>
                                <button
                                    className="btn btn-success btn-lg px-5"
                                    onClick={() => navigate('/success')}
                                >
                                    Paga Ora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;