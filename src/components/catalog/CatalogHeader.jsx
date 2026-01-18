export default function CatalogHeader({ query, setQuery, sort, onSearch, onSortChange }) {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 mt-4 pb-5 gap-3">
            <h1 className="fw-bold text-blue mb-0 ms-5 ps-3">VINYLS CATALOG</h1>

            <div className="d-flex gap-3 align-items-center flex-wrap flex-grow-1 flex-md-grow-0 justify-content-end">
                <select className="form-select fw-bold w-auto text-blue bg-yellow rounded-2 border-0 shadow-sm" style={{ cursor: 'pointer' }} value={sort} onChange={onSortChange}>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="price_asc">Price ↑</option>
                    <option value="price_desc">Price ↓</option>
                </select>

                <form onSubmit={onSearch} className="d-flex gap-2 flex-grow-1 flex-md-grow-0 me-3">
                    <input type="text" className="form-control shadow-sm border-0" placeholder="Search vinyls..." value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit" className="btn bg-blue text-yellow fw-bold shadow-sm me-5">
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}