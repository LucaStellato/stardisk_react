import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-graffiti d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow border-0 rounded-4 bg-white p-5 text-center">

                            <div className="mb-1">
                                <i className="bi bi-disc text-red" style={{ fontSize: '5rem', display: 'inline-block', animation: 'spin 4s linear infinite' }}></i>
                            </div>

                            <h1 className="fw-bold text-red mb-0" style={{ fontSize: '5rem', lineHeight: '1' }}>404</h1>

                            <div className="mb-4">
                                <h2 className="fw-bold text-blue text-uppercase">Page Not Found</h2>
                                <div className="bg-yellow mx-auto mt-2" style={{ height: '4px', width: '60px' }}></div>
                            </div>

                            <p className="text-muted fs-5 mb-5">
                                Oops! It seems the needle jumped off the record. This page doesn't exist.
                            </p>

                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <button className="btn bg-blue text-yellow fw-bold px-5 py-3 border-0 shadow-sm" onClick={() => navigate('/')}>
                                    BACK TO HOME
                                </button>

                                <button className="btn bg-lightyellow text-blue px-4 py-3 fw-bold border-blue" onClick={() => navigate(-1)}>
                                    GO BACK
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