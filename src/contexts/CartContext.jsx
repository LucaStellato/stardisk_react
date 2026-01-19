import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Calcoli automatici basati sullo stato del carrello
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totaleProdotti = cart.reduce((acc, item) => {
        const prezzo = item.priceFinal || parseFloat(item.full_price);
        return acc + (prezzo * item.quantity);
    }, 0);

    const isSpedizioneGratuita = totaleProdotti > 50;
    const costoSpedizione = (isSpedizioneGratuita || cart.length === 0) ? 0 : 5;
    const totaleFinale = totaleProdotti + costoSpedizione;

    const addToCart = (product) => {
        const giaPresente = cart.find(item => item.product_id === product.product_id);


        if (giaPresente) {
            if (giaPresente.quantity >= product.amount) return alert("Scorte esaurite!");
            setCart(cart.map(item =>
                item.product_id === product.product_id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            const prezzoBase = parseFloat(product.full_price);
            const sconto = product.discount || 0;
            const prezzoScontato = prezzoBase - (prezzoBase * (sconto / 100));
            setCart([...cart, { ...product, quantity: 1, priceFinal: prezzoScontato }]);
        }
    };

    const decreaseQuantity = (id) => {
        const prodotto = cart.find(item => item.product_id === id);
        if (prodotto && prodotto.quantity > 1) {
            setCart(cart.map(item =>
                item.product_id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        } else {
            removeFromCart(id);
        }
    };

    const removeFromCart = (id) => setCart(cart.filter(item => item.product_id !== id));

    const clearCart = () => setCart([]);

    const placeOrder = (formData, callbackSuccess, callbackError) => {
        const payloadDati = {
            ...formData,
            total_price: parseFloat(totaleFinale.toFixed(2)),
            products: cart.map(item => ({ id: item.product_id, name: item.name, quantity: item.quantity }))
        };

        axios.post('http://localhost:3000/api/order', payloadDati)
            .then(() => {
                clearCart();
                callbackSuccess();
            })
            .catch(err => {
                callbackError(err);
            });
    };

    return (
        <CartContext.Provider value={{
            cart, cartCount, totaleProdotti, costoSpedizione, totaleFinale, isSpedizioneGratuita,
            addToCart, decreaseQuantity, removeFromCart, clearCart, placeOrder
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);