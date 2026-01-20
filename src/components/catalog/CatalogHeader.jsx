export default function CatalogHeader({ query, setQuery, sort, onSearch, onSortChange }) {
    return (
        <div className="modern-white-frame shadow-frame-dark ms-5 h-100">
            <div className="inner-dark-canvas h-100 p-2">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="p-3 border-bottom border-secondary border-opacity-25">
                        <h2 className="fw-bold text-white m-0 text-uppercase tracking-widest p-3">
                            VINYLS CATALOG
                        </h2>
                        <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                    </div>
                    <div className="d-flex gap-3 align-items-center flex-wrap justify-content-center justify-content-md-end px-4 py-2">

                        <div className="position-relative">
                            <select
                                className="form-select fw-bold w-auto text-blue bg-white rounded-2 border-0 shadow-sm py-2 rounded-0"
                                style={{ cursor: 'pointer', fontSize: '0.85rem' }}
                                value={sort}
                                onChange={onSortChange}
                            >
                                <option value="name_asc">Name (A-Z)</option>
                                <option value="name_desc">Name (Z-A)</option>
                                <option value="price_asc">Price ↑</option>
                                <option value="price_desc">Price ↓</option>
                            </select>
                        </div>

                        <form onSubmit={onSearch} className="d-flex gap-2">
                            <input
                                type="text"
                                className="form-control rounded-0 shadow-sm border-0 py-2"
                                style={{ fontSize: '0.85rem', minWidth: '200px' }}
                                placeholder="Search vinyls..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button type="submit" className="btn bg-blue text-yellow fw-bold text-uppercase px-3" style={{ fontSize: '0.85rem' }}>
                                <i className="bi bi-search text-yellow me-1"></i>
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}