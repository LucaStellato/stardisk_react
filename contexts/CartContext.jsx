import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const giaPresente = cart.find(item => item.id === product.id);

        if (giaPresente) {
            if (giaPresente.quantity >= product.amount) {
                alert("Spiacenti, scorte esaurite per questo prodotto!");
                return;
            }

            const carrelloAggiornato = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(carrelloAggiornato);
        } else {
            if (product.amount > 0) {
                setCart([...cart, { ...product, quantity: 1 }]);
            } else {
                alert("Prodotto attualmente esaurito!");
            }
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, useCart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);