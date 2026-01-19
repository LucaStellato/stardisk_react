import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllProducts = () => {
        setLoading(true);
        axios.get('http://localhost:3000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    const searchProducts = (query = "", sort = "name_asc") => {
        setLoading(true);
        const url = query
            ? `http://localhost:3000/api/products/search?query=${query}&sort=${sort}`
            : `http://localhost:3000/api/products/search?sort=${sort}`;

        axios.get(url)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    const getVinyls = () => products.filter(p => p.category?.toLowerCase() === "vinyl");
    const getTurntables = () => products.filter(p => p.category?.toLowerCase() === "turntable");
    const getDiscountedVinyls = () => products.filter(p => p.discount > 0 && p.category?.toLowerCase() === "vinyl");

    const fetchProductBySlug = (slug) => {
        setLoading(true);
        setCurrentProduct(null);
        setRelatedProducts([]);

        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(res => {
                setCurrentProduct(res.data[0]);
                return axios.get(`http://localhost:3000/api/products/${slug}/related`);
            })
            .then(relatedRes => {
                setRelatedProducts(relatedRes.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore fetch dettagli:", err);
                setLoading(false);
            });
    };

    return (
        <ProductContext.Provider value={{
            products,
            currentProduct,
            relatedProducts,
            loading,
            fetchAllProducts,
            searchProducts,
            fetchProductBySlug,
            getVinyls,
            getTurntables,
            getDiscountedVinyls
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);