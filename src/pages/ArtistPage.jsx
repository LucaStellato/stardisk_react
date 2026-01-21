import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';

export default function ArtistPage() {
    const { id } = useParams();
    const { currentArtist, fetchArtistById, loading } = useProducts();

    useEffect(() => {
        if (id) {
            fetchArtistById(id);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center bg-black">
                <div className="spinner-border text-gold" role="status"></div>
            </div>
        );
    }

    if (!currentArtist) {
        return <div className="text-center py-5 text-white">Artista non trovato.</div>;
    }

    return (
        <div className='detail-wall'>
            <div className="container py-5 text-white">
                <div className="modern-white-frame shadow-frame-dark mb-5">
                    <div className="inner-dark-canvas p-4 p-md-5" style={{ borderRadius: '0 0 5px 5px' }}>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img
                                    src={currentArtist.img_url}
                                    alt={currentArtist.name}
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-8">
                                <h1 className="fw-bold text-uppercase tracking-widest">{currentArtist.name}</h1>
                                <div className="accent-line mb-3" style={{ width: '60px', height: '3px', backgroundColor: 'gold' }}></div>
                                <p className="fs-5 text-secondary">Bio:{currentArtist.bio}</p>
                                <p className="small text-muted">Label: {currentArtist.record_label}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="text-uppercase fw-bold tracking-widest mb-4 h4">Discography</h2>
                    <div className="row g-4">
                        {currentArtist.vinyls && currentArtist.vinyls.length > 0 ? (
                            currentArtist.vinyls.map((vinyl, index) => (
                                <div key={index} className="col-6 col-md-3">
                                    <Link to={`/vinyl/${vinyl.slug || ''}`} className="text-decoration-none">
                                        <div className="card bg-transparent border-0 text-white artist-vinyl-card">
                                            <div className="overflow-hidden rounded shadow-sm mb-2">
                                                <img
                                                    src={vinyl.image}
                                                    alt={vinyl.name}
                                                    className="img-fluid hover-zoom"
                                                    style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <h6 className="fw-bold mb-0 text-truncate">{vinyl.name}</h6>
                                            <p className="text-gold small">{vinyl.price}€</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-secondary">Nessun vinile trovato per questo artista.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}