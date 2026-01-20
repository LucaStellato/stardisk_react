import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('my_wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('my_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const isPresent = prev.some(item => item.product_id === product.product_id);

            if (isPresent) {
                return prev.filter(item => item.product_id !== product.product_id);
            } else {
                return [...prev, product];
            }
        });
    };

    return (
        <WishlistContext.Provider value={{
            wishlist,
            toggleWishlist,
            totalWish: wishlist.length
        }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);