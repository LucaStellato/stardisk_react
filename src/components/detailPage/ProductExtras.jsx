export default function ProductExtras({ product }) {
    if (product.category !== 'vinyl') return null;

    const tracksArray = product.tracklist ? product.tracklist.split(',') : [];

    return (
        <div className="row ps-0 ps-md-5 pt-3 mt-4 g-5 pb-5">
            <div className="col-12 col-md-4">
                <div className="modern-white-frame shadow-frame-dark h-100">
                    <div className="inner-dark-canvas h-100">
                        <div className="p-3 border-bottom border-secondary border-opacity-25 text-center">
                            <h2 className="fw-bold text-white m-0 h4 text-uppercase tracking-widest">
                                Tracklist
                            </h2>
                            <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                        </div>

                        <div className="p-4">
                            {tracksArray.length > 0 ? (
                                <ul className="list-unstyled mb-0">
                                    {tracksArray.map((track, index) => (
                                        <li key={index} className="detail-text mb-2 d-flex align-items-start">
                                            <span className="text-gold fw-bold me-2">
                                                {(index + 1).toString().padStart(2, '0')}.
                                            </span>
                                            <span className="text-white opacity-75">{track.trim()}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gold fw-bold fs-5 m-0 opacity-75">
                                    <i className="bi bi-vinyl-fill me-2"></i>
                                    No tracklist found
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-8">
                <div className="modern-white-frame shadow-frame-dark ">
                    <div className="inner-dark-canvas h-100">
                        <div className="p-3 border-bottom border-secondary border-opacity-25">
                            <h2 className="fw-bold text-white m-0 h4 text-uppercase text-center tracking-widest ps-3">
                                Album Description
                            </h2>
                            <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                        </div>

                        <div className="p-4">
                            <p className="detail-text fs-5 m-0">
                                {product.description || "Information about this masterpiece is being curated by our experts..."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}