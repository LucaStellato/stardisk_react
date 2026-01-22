import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="detail-wall d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <div className="container py-5">
                {/* GUSCIO ESTERNO DEL MANIFESTO */}
                <div className="modern-white-frame shadow-frame-dark mx-auto" style={{ maxWidth: '600px' }}>

                    {/* INTERNO BLU (Come Success Page) */}
                    <div className="bg-blue p-5 text-center" style={{ animation: 'scaleIn 0.5s ease-out' }}>

                        <div className="mb-1">
                            <i className="bi bi-disc text-yellow" style={{ fontSize: '5rem', display: 'inline-block', animation: 'spin 4s linear infinite' }}></i>
                        </div>

                        {/* 404 in Bianco */}
                        <h1 className="fw-bold text-white mb-0" style={{ fontSize: '5rem', lineHeight: '1' }}>404</h1>

                        <div className="mb-4">
                            <h2 className="fw-bold text-yellow text-uppercase h4 tracking-widest mt-2">Page Not Found</h2>
                            <div className="bg-yellow mx-auto mt-2" style={{ height: '4px', width: '60px' }}></div>
                        </div>

                        <p className="text-light fs-5 mb-5">
                            Oops! It seems the needle jumped off the record. <br />
                            This page doesn't exist.
                        </p>

                        {/* PULSANTI CON COLORI SUCCESS/MANIFESTO */}
                        <div className="d-grid gap-3">
                            <button
                                className="btn bg-yellow text-blue fw-bold w-100 py-3 shadow-sm border-0"
                                onClick={() => navigate('/')}
                            >
                                BACK TO HOME
                            </button>

                            <button
                                className="bg-transparent border-0 text-yellow fw-bold text-decoration-none fs-6 tracking-widest text-uppercase mt-2"
                                onClick={() => navigate(-1)}
                            >
                                <i className="bi bi-arrow-left me-2"></i> Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;