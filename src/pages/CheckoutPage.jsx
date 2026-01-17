import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CheckoutSummary from '../components/checkout/CheckoutSummary';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { cart, placeOrder, totaleProdotti, costoSpedizione, totaleFinale, isSpedizioneGratuita } = useCart();

    const [formData, setFormData] = useState({
        mail: '', name: '', surname: '', address: '',
        cardNumber: '', expDate: '', cvv: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        placeOrder(
            formData,
            () => {
                setIsSuccess(true);
                navigate('/success');
            },
            () => alert("Errore durante l'invio dell'ordine.")
        );
    };

    if (cart.length === 0 && !isSuccess) {
        navigate('/cart');
        return null;
    }

    return (
        <section className='bg-graffiti'>
            <div className="container pt-5 pb-5" style={{ minHeight: 'calc(100vh - 300px)' }}>
                <h2 className="mb-4 fw-bold text-uppercase text-blue pb-4">Checkout</h2>
                <div className="row">
                    <div className="col-lg-7">
                        <CheckoutForm
                            formData={formData}
                            handleChange={handleChange}
                            termsAccepted={termsAccepted}
                            setTermsAccepted={setTermsAccepted}
                        />
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <CheckoutSummary
                            cart={cart}
                            totaleProdotti={totaleProdotti}
                            costoSpedizione={costoSpedizione}
                            totaleFinale={totaleFinale}
                            isSpedizioneGratuita={isSpedizioneGratuita}
                            termsAccepted={termsAccepted}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}