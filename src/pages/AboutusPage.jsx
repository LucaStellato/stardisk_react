import { Link } from 'react-router-dom';

export default function AboutusPage() {
    return (
        <div className="detail-wall py-5 min-vh-100">
            <div className="container py-5">

                <div className="modern-white-frame shadow-frame-dark mx-auto" style={{ maxWidth: '900px' }}>
                    <div className="inner-dark-canvas p-4 p-md-5">

                        <div className="text-center mb-5">
                            <span className="text-gold tracking-widest small text-uppercase">Est. 2024</span>
                            <h1 className="fw-bold text-white text-uppercase tracking-widest mt-2 mb-0 h2">
                                StarDisk Manifesto
                            </h1>
                            <div className="accent-line mx-auto mt-3" style={{ width: '60px', height: '4px' }}></div>
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10">
                                <p className="text-white fs-5 mb-4 shadow-sm" style={{ lineHeight: '1.6' }}>
                                    We don't just sell engraved plastic. <br />
                                    <span className="text-gold fw-bold">StarDisk</span> was born from the desire to freeze time in a fast-paced era.
                                </p>

                                <div className="text-muted mb-5 italic-style" style={{ fontSize: '1.1rem', borderLeft: '3px solid #D05335', paddingLeft: '20px', textAlign: 'left', fontStyle: 'italic' }}>
                                    "Vinyl is not just a medium; it's a ritual. It’s the scent of the sleeve, the crackle of the needle hitting the groove, the anticipation of the first spin."
                                </div>

                                <div className="row g-4 text-start mt-2">
                                    <div className="col-md-6">
                                        <h5 className="text-white text-uppercase tracking-widest small fw-bold">Curated Selection</h5>
                                        <p className="text-muted small">Every piece in our catalog is handpicked as if it were part of our own private collection. From hidden jazz gems to modern rock masterpieces.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="text-white text-uppercase tracking-widest small fw-bold">The Art of Sound</h5>
                                        <p className="text-muted small">We believe music should be seen as much as it is heard. That's why we treat every cover as a piece of gallery art ready to be displayed.</p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-top border-secondary border-opacity-25">
                                    <h4 className="text-white text-uppercase tracking-widest h6 mb-4">Join the Club</h4>
                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        <Link to="/vinyls" className="btn-add-collection px-4 py-2">
                                            EXPLORE CATALOG
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-5 pt-5 text-center">
                    <p className="text-light fs-4">
                        STARDISK — I VECCHI MARCHESI STELLATI — ALL RIGHTS RESERVED
                    </p>
                </div>

            </div>
        </div>
    );
}