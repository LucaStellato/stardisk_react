import { useProducts } from "../../contexts/ProductContext";
import HomeCard from "./HomeCard";

export default function SaleSection() {
    const { getDiscountedVinyls } = useProducts();
    const vinyls = getDiscountedVinyls();

    return (
        <div className="container">
            <h1 className="pt-5 fw-bold text-blue">SALE</h1>
            <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                {vinyls.map(v => <HomeCard key={v.product_id} item={v} />)}
            </div>
        </div>
    );
}