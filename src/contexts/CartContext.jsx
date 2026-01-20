import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Alert from "../components/layout/Alert";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error loading cart:", error);
            return [];
        }
    });

    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: "info"
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const showAlert = (message, type = "info") => {
        setAlert({ show: true, message, type });
        setTimeout(() => {
            setAlert(prev => ({ ...prev, show: false }));
        }, 3500);
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totaleProdotti = cart.reduce((acc, item) => {
        const prezzo = item.priceFinal || parseFloat(item.full_price);
        return acc + (prezzo * item.quantity);
    }, 0);

    const isSpedizioneGratuita = totaleProdotti > 50;
    const costoSpedizione = (isSpedizioneGratuita || cart.length === 0) ? 0 : 5;
    const totaleFinale = totaleProdotti + costoSpedizione;

    const addToCart = (product) => {
        if (!product || product.nativeEvent) {
            console.error("Error: You are passing the event instead of the product object!");
            return;
        }

        const giaPresente = cart.find(item => item.product_id === product.product_id);

        if (giaPresente) {
            if (giaPresente.quantity >= product.amount) {
                return showAlert(`Out of stock for ${product.name}!`, "error");
            }

            const nuovaQuantita = giaPresente.quantity + 1;

            setCart(cart.map(item =>
                item.product_id === product.product_id
                    ? { ...item, quantity: nuovaQuantita }
                    : item
            ));

            showAlert(`X${nuovaQuantita} ${product.name} quantity updated! `, "success");
        } else {
            const prezzoBase = parseFloat(product.full_price);
            const sconto = product.discount || 0;
            const prezzoScontato = prezzoBase - (prezzoBase * (sconto / 100));

            setCart([...cart, { ...product, quantity: 1, priceFinal: prezzoScontato }]);

            showAlert(`${product.name} added to collection!`, "success");
        }
    };

    const decreaseQuantity = (id) => {
        const prodotto = cart.find(item => item.product_id === id);
        if (prodotto && prodotto.quantity > 1) {
            setCart(cart.map(item =>
                item.product_id === id ? { ...item, quantity: item.quantity - 1 } : item
            ))
            showAlert(`${prodotto.name} quantity decreased`, "info");
        } else {
            removeFromCart(id);
        }
    };

    const removeFromCart = (id) => {
        const prodottoDaRimuovere = cart.find(item => item.product_id === id);
        setCart(cart.filter(item => item.product_id !== id));
        showAlert(`${prodottoDaRimuovere?.name || "Product"} removed from cart`, "warning");
    };

    const clearCart = () => {
        setCart([]);
    };

    const placeOrder = (formData, callbackSuccess, callbackError) => {
        const payloadDati = {
            ...formData,
            total_price: parseFloat(totaleFinale.toFixed(2)),
            products: cart.map(item => ({
                id: item.product_id,
                name: item.name,
                quantity: item.quantity
            }))
        };

        axios.post('http://localhost:3000/api/order', payloadDati)
            .then(() => {
                clearCart();
                showAlert("Order placed successfully!", "success");
                if (callbackSuccess) callbackSuccess();
            })
            .catch(err => {
                console.error("Order error:", err);
                showAlert("Error while sending the order. Please try again.", "error");
                if (callbackError) callbackError(err);
            });
    };

    return (
        <CartContext.Provider value={{
            cart, cartCount, totaleProdotti, costoSpedizione, totaleFinale, isSpedizioneGratuita,
            addToCart, decreaseQuantity, removeFromCart, clearCart, placeOrder,
            alert, setAlert
        }}>
            {children}

            {alert.show && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                />
            )}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);