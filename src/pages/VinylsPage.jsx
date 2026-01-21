import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import CatalogHeader from "../components/catalog/CatalogHeader";
import CatalogMain from "../components/catalog/CatalogMain";

export default function VinylsPage() {
    const { searchProducts } = useProducts();
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const currentQuery = params.get("query") || "";
    const currentSort = params.get("sort") || "name_asc";
    const currentGenre = params.get("genre") || "";

    const [query, setQuery] = useState(currentQuery);
    const [sort, setSort] = useState(currentSort);
    const [genre, setGenre] = useState(currentGenre);

    useEffect(() => {
        setQuery(currentQuery);
        setSort(currentSort);
        setGenre(currentGenre);
        searchProducts(currentQuery, currentSort, currentGenre);
    }, [location.search]);

    const handleSearch = (e) => {
        e.preventDefault();
        updateUrl(query, sort, genre);
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateUrl(query, newSort, genre);
    };

    const handleGenreChange = (e) => {
        const newGenre = e.target.value;
        setGenre(newGenre);
        updateUrl(query, sort, newGenre);
    };

    const updateUrl = (newQuery, newSort, newGenre) => {
        const searchParams = new URLSearchParams();
        if (newQuery.trim()) searchParams.set("query", newQuery.trim());
        if (newSort) searchParams.set("sort", newSort);
        if (newGenre) searchParams.set("genre", newGenre);
        navigate(`/vinyls?${searchParams.toString()}`);
    };

    return (
        <section className="bg-graffiti-2 min-vh-100">
            <div className="container py-5">

                <CatalogHeader
                    query={query}
                    setQuery={setQuery}
                    sort={sort}
                    genre={genre}
                    onSearch={handleSearch}
                    onSortChange={handleSortChange}
                    onGenreChange={handleGenreChange}
                />
                <CatalogMain />
                <div className="mb-5 text-center mb-5 pt-2">
                    <Link to="/" className=" text-yellow text-decoration-none fs-3 tracking-widest fw-semibold">
                        <i className="bi bi-arrow-left me-2"></i> BACK TO HOME
                    </Link>
                </div>
            </div>
        </section>
    );
}