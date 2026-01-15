import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const giaPresente = cart.find(item => item.product_id === product.product_id);

        if (giaPresente) {
            if (giaPresente.quantity >= product.amount) {
                alert("Scorte esaurite!");
                return;
            }
            setCart(cart.map(item =>
                item.product_id === product.product_id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            const prezzoBase = parseFloat(product.full_price);
            const sconto = product.discount || 0;
            const prezzoScontato = prezzoBase - (prezzoBase * (sconto / 100));

            setCart([...cart, {
                ...product,
                quantity: 1,
                priceFinal: prezzoScontato
            }]);
        }
    };

    const decreaseQuantity = (id) => {
        const prodotto = cart.find(item => item.product_id === id);
        if (!prodotto) return;

        if (prodotto.quantity > 1) {
            setCart(cart.map(item =>
                item.product_id === id ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            removeFromCart(id);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.product_id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);