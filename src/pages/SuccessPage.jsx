import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
    const navigate = useNavigate();

    return (
        <section className='bg-graffiti'>
            <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: 'calc(100vh - 160px)' }}>
                <div className="text-center p-5 shadow-lg rounded bg-white" style={{ maxWidth: '500px' }}>
                    <div className="mb-4">
                        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h1 className="fw-bold text-blue text-uppercase">Order received!</h1>
                    <p className="text-muted">
                        Thank you for your purchase on <strong>StarDisk</strong>.
                        You'll shortly receive a confirmation email with your shipping details.
                    </p>
                    <hr className="my-4" />
                    <p className="small text-secondary mb-4">
                        Your order is being prepared and will soon shine in your collection.
                    </p>
                    <button
                        className="btn bg-yellow text-blue fw-bold w-100 py-2 shadow-sm border-0"
                        onClick={() => navigate('/')}
                    >
                        BACK TO SHOP
                    </button>
                </div>
            </div>

        </section>
    );
}