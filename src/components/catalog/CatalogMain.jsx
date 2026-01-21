import { useProducts } from "../../contexts/ProductContext";
import CatalogBox from "./CatalogBox";

export default function CatalogMain() {
    const { loading, products } = useProducts();
    const vinyls = products.filter(p => p.artist_name !== null);

    if (loading) {
        return (
            <div className="text-center py-5 text-blue" style={{ minHeight: '50vh' }}>
                <div className="spinner-border text-blue mb-3" role="status"></div>
                <h3>Loading Collection...</h3>
            </div>
        );
    }
    if (vinyls.length === 0) {
        return (
            <div className="text-center py-5 text-blue" style={{ minHeight: '50vh' }}>
                <h3>No vinyls found in this category.</h3>
            </div>
        );
    }

    return (
        <div className="row g-4 g-md-5 mb-1">
            {vinyls.map(v => (
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5" key={v.slug}>
                    <CatalogBox vinyl={v} />
                </div>
            ))}
        </div>

    );
}