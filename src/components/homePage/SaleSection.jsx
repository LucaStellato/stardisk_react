import { useProducts } from "../../contexts/ProductContext";
import HomeCard from "./HomeCard";

export default function SaleSection() {
    const { getDiscountedVinyls } = useProducts();
    const vinyls = getDiscountedVinyls();

    return (
        <section className="container py-4">
            <div className="modern-white-frame shadow-frame-dark h-100 my-5 mx-auto w-100 w-lg-25 text-center">
                <div className="inner-dark-canvas h-100">
                    <div className="p-3 border-bottom border-secondary border-opacity-25 ">
                        <h1 className="fw-bold text-white m-0 tracking-widest">
                            SALE
                        </h1>
                        <div className="accent-line mx-auto mt-2" style={{ width: '30px' }}></div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 px-5 px-md-0 py-md-5 g-5">
                {vinyls.map(v => (
                    <div className="col" key={v.product_id}>
                        <HomeCard item={v} />
                    </div>
                ))}
            </div>
        </section>
    );
}