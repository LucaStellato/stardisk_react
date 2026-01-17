export default function CatalogHeader({ query, setQuery, sort, onSearch, onSortChange }) {
    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 mt-4">
            <h1 className="fw-bold text-blue">VINYLS CATALOG</h1>

            <div className="d-flex gap-3 align-items-center flex-wrap">
                <select
                    className="form-select fw-bold w-auto text-blue bg-yellow rounded-2 border-0 shadow-sm"
                    value={sort}
                    onChange={onSortChange}
                >
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="price_asc">Price ↑</option>
                    <option value="price_desc">Price ↓</option>
                </select>

                <form onSubmit={onSearch} className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Search vinyls..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="btn bg-blue text-yellow fw-bold">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}