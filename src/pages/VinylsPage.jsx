import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

    const [query, setQuery] = useState(currentQuery);
    const [sort, setSort] = useState(currentSort);

    useEffect(() => {
        setQuery(currentQuery);
        setSort(currentSort);
        searchProducts(currentQuery, currentSort);
    }, [location.search]);

    const handleSearch = (e) => {
        e.preventDefault();
        updateUrl(query, sort);
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateUrl(query, newSort);
    };

    const updateUrl = (newQuery, newSort) => {
        const searchParams = new URLSearchParams();
        if (newQuery.trim()) searchParams.set("query", newQuery.trim());
        if (newSort) searchParams.set("sort", newSort);
        navigate(`/vinyls?${searchParams.toString()}`);
    };

    return (
        <section className="bg-graffiti min-vh-100">
            <div className="container py-5 schizzi">
                <CatalogHeader query={query} setQuery={setQuery} sort={sort} onSearch={handleSearch} onSortChange={handleSortChange} />
                <CatalogMain />
            </div>
        </section>
    );
}