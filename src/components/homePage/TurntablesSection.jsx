import { useProducts } from "../../contexts/ProductContext";
import HomeCard from "./HomeCard";

export default function TurntablesSection() {
    const { getTurntables } = useProducts();
    const turntables = getTurntables();

    return (
        <div className="container">
            <h1 className="pt-5 fw-bold text-blue">TURNTABLES</h1>
            <div className="row row-cols-12 row-cols-md-3 row-cols-lg-4 py-5 g-5">
                {turntables.map(t => <HomeCard key={t.product_id} item={t} isTurntable={true} />)}
            </div>
        </div>
    );
}