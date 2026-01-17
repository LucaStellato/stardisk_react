import { useProducts } from "../../contexts/ProductContext";
import CatalogBox from "./CatalogBox";

export default function CatalogMain() {
    const { loading, getVinyls } = useProducts();
    const vinyls = getVinyls();

    if (loading) return <div className="text-center py-5 text-blue"><h3>Loading...</h3></div>;
    if (vinyls.length === 0) return <div className="text-center py-5 text-blue"><h3>No vinyls found.</h3></div>;

    return (
        <div className="row g-4">
            {vinyls.map(v => (
                <div className="col-12 col-md-6 col-lg-4" key={v.slug}>
                    <CatalogBox vinyl={v} />
                </div>
            ))}
        </div>
    );
}