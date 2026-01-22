import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import ProductVisual from "../components/detailPage/ProductVisual";
import ProductInfo from "../components/detailPage/ProductInfo";
import ProductExtras from "../components/detailPage/ProductExtras";
import RelatedProducts from "../components/detailPage/RelatedProducts";

export default function DetailPage() {
    const { slug } = useParams();
    const { currentProduct, relatedProducts, fetchProductBySlug, loading } = useProducts();

    const isTurntable = currentProduct?.category === 'turntable';

    useEffect(() => {
        fetchProductBySlug(slug);
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading || !currentProduct) {
        return (
            <div className="detail-wall text-center py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="spinner-border text-blue me-3" role="status"></div>
                <h1 className="text-blue mb-0 fw-bold">Loading Data...</h1>
            </div>
        );
    }
    console.log("ID ARTISTA:", currentProduct?.artist_id);
    console.log("OGGETTO PRODOTTO COMPLETO:", currentProduct);
    return (
        <div className="detail-wall pb-3 pb-md-5">
            <div className="container-fluid container-lg">
                <div className="ps-4 ps-lg-0 mb-5 pt-2">
                    <Link to="/" className=" text-white text-decoration-none fs-5 tracking-widest">
                        <i className="bi bi-arrow-left me-2"></i> BACK TO HOME
                    </Link>
                </div>

                <div className="row g-2 g-md-5 d-flex align-items-center">
                    <ProductVisual product={currentProduct} />
                    <ProductInfo product={currentProduct} />
                </div>

                <ProductExtras product={currentProduct} />
                <RelatedProducts products={relatedProducts} />
                <div className="mb-5 pt-2 text-center">
                    <Link
                        to={isTurntable ? "/" : "/vinyls"}
                        className="text-white text-decoration-none fs-3 tracking-widest"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        {isTurntable ? "BACK TO HOME" : "GO TO VINYLS"}
                    </Link>
                </div>

            </div>
        </div>
    );
}