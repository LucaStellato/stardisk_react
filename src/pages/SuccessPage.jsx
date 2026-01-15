import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: 'calc(100vh - 160px)' }}>
            <div className="text-center p-5 shadow-lg rounded bg-white" style={{ maxWidth: '500px' }}>
                <div className="mb-4">
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
                </div>
                <h1 className="fw-bold text-blue text-uppercase">Ordine Ricevuto!</h1>
                <p className="text-muted">
                    Grazie per il tuo acquisto su <strong>StarDisk</strong>.
                    Riceverai a breve una mail di conferma con i dettagli della spedizione.
                </p>
                <hr className="my-4" />
                <p className="small text-secondary mb-4">
                    Il tuo ordine è in fase di preparazione e brillerà presto nella tua collezione.
                </p>
                <button
                    className="btn bg-yellow text-blue fw-bold w-100 py-2 shadow-sm border-0"
                    onClick={() => navigate('/')}
                >
                    TORNA ALLO SHOP
                </button>
            </div>
        </div>
    );
}