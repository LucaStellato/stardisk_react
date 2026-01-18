export default function ProductExtras({ product }) {

    if (product.category !== 'vinyl') return null;

    return (
        <div className="row ps-0 ps-md-5 pt-3 mt-4">
            <div className="col-12 col-md-7 mb-4 mb-md-0">
                <h1 className="fw-bold text-red pb-3">Tracklist</h1>
                <p className="text-blue fw-bold fs-4">Work in Progress...</p>
            </div>
            <div className="col-12 col-md-5">
                <h1 className="fw-bold text-red pb-3">Album Description</h1>
                <p className="text-blue fw-bold fs-4">Work in Progress...</p>
            </div>
        </div>
    );
}