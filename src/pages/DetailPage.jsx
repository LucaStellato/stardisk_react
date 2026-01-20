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

    return (
        <div className="detail-wall pb-5">
            <div className="container-fluid container-lg">
                <div className="pt-3 mb-2 text-start">
                    <Link to="/" className="btn btn-dark bg-black-custom rounded-2 text-white fw-bold shadow-sm px-4 py-2 ms-3">
                        <i className="bi bi-arrow-left me-2"></i> Back to home
                    </Link>
                </div>

                <div className="row g-5 d-flex align-items-center">
                    <ProductVisual product={currentProduct} />
                    <ProductInfo product={currentProduct} />
                </div>
                <ProductExtras product={currentProduct} />
                <RelatedProducts products={relatedProducts} />
                <div className="pt-3 m-4 text-center">
                    <Link to="/vinyls" className="btn btn-lg bg-black-custom text-white fw-bold shadow-sm px-4 py-2 ms-3 w-50 rounded-2">
                        <i className="bi bi-arrow-left me-2"></i> Go to vinyls
                    </Link>
                </div>
            </div>
        </div>
    );
}