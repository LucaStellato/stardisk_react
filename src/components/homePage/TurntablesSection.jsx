import { useProducts } from "../../contexts/ProductContext";
import HomeCard from "./HomeCard";

export default function TurntablesSection() {
    const { getTurntables } = useProducts();
    const turntables = getTurntables();

    return (
        <section className="container">
            <div className="modern-white-frame shadow-frame-dark h-100 mt-5 mx-auto w-50 text-center">
                <div className="inner-dark-canvas h-100">
                    <div className="p-3 border-bottom border-secondary border-opacity-25">
                        <h1 className="fw-bold text-white m-0 tracking-widest">
                            TURNTABLES
                        </h1>
                        <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5 g-4 d-flex justify-content-center align-items-center">
                {turntables.map(t => (
                    <div className="col" key={t.slug}>
                        <HomeCard item={t} isTurntable={true} />
                    </div>
                ))}
            </div>
        </section>
    );
}