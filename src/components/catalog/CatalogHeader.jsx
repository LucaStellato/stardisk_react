export default function CatalogHeader({ query, setQuery, sort, genre, onSearch, onSortChange, onGenreChange }) {
    return (
        <div className="modern-white-frame shadow-frame-dark ms-lg-2 h-100 my-2 my-md-5">
            <div className="inner-dark-canvas h-100 p-3">
                <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center w-100 gap-3">

                    <div className="text-center text-lg-start">
                        <h2 className="fw-bold text-white m-0 text-uppercase tracking-widest display-6">
                            VINYLS
                        </h2>
                        <div className="accent-line mx-auto mx-lg-0 mt-2 bg-yellow" style={{ width: '40px', height: '2px' }}></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row gap-2 align-items-center w-100 w-lg-auto justify-content-end">

                        <div className="d-flex gap-2 w-100 w-md-auto justify-content-center justify-content-md-end">
                            <select
                                className="form-select fw-bold text-blue bg-white shadow-sm py-2 rounded-0 border-0"
                                style={{ width: 'auto', minWidth: '130px', fontSize: '0.85rem', cursor: 'pointer' }}
                                value={genre}
                                onChange={onGenreChange}
                            >
                                <option value="">All Genres</option>
                                <option value="soul">Soul</option>
                                <option value="jazz">Jazz</option>
                                <option value="R&B">R&B</option>
                                <option value="hip-hop">Hip Hop</option>
                            </select>

                            <select
                                className="form-select fw-bold text-blue bg-white shadow-sm py-2 rounded-0 border-0"
                                style={{ width: 'auto', minWidth: '130px', fontSize: '0.85rem', cursor: 'pointer' }}
                                value={sort}
                                onChange={onSortChange}
                            >
                                <option value="name_asc">Name (A-Z)</option>
                                <option value="name_desc">Name (Z-A)</option>
                                <option value="price_asc">Price ↑</option>
                                <option value="price_desc">Price ↓</option>
                            </select>
                        </div>

                        <form onSubmit={onSearch} className="d-flex w-100 w-md-auto shadow-sm">
                            <input
                                type="text"
                                className="form-control rounded-0 border-0 py-2 ps-3 w-100"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{ width: '180px', fontSize: '0.85rem' }}
                            />
                            <button
                                type="submit"
                                className="btn bg-blue text-yellow fw-bold text-uppercase px-3 rounded-0 border-0 d-flex align-items-center"
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}