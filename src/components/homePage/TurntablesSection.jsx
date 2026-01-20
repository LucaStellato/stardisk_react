import { useProducts } from "../../contexts/ProductContext";
import HomeCard from "./HomeCard";

export default function TurntablesSection() {
    const { getTurntables } = useProducts();
    const turntables = getTurntables();

    return (
        <section className="container">
            <h1 className="pt-5 fw-bold text-blue text-center">TURNTABLES</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5 g-4 d-flex justify-content-center align-items-center">
                {turntables.map(t => (
                    <div className="col" key={t.product_id}>
                        <HomeCard item={t} isTurntable={true} />
                    </div>
                ))}
            </div>
        </section>
    );
}