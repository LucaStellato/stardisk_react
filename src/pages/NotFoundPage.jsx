
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-graffiti" style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm border-0 rounded-4 bg-white p-5 text-center">

                            {/* Titolo Errore */}
                            <h1 className="fw-bold text-red mb-0" style={{ fontSize: '6rem', opacity: '0.7' }}>404</h1>

                            <div className="mb-4">
                                <h2 className="fw-bold text-blue text-uppercase">Page Not Found</h2>
                                <div className="bg-yellow mx-auto mt-2" style={{ height: '4px', width: '60px' }}></div>
                            </div>

                            {/* Messaggio in Inglese */}
                            <p className="text-muted fs-5 mb-5">
                                Sorry, the page you are looking for does not exist or has been moved.
                            </p>

                            {/* Azioni */}
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button
                                    className="btn bg-blue text-yellow fw-bold px-5 py-2 border-0 shadow-sm"
                                    onClick={() => navigate('/')}
                                >
                                    Back to Home
                                </button>

                                <button
                                    className="btn bg-yellow text-blue px-4 py-2 fw-bold"
                                    onClick={() => navigate(-1)}
                                >
                                    Go Back
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;