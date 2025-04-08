import React from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

interface CartSummaryProps {
    items: CartItem[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-summary">
            <div className="summary-box">
                <h3>Cart Total</h3>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${totalAmount}</span>
                </div>
                <hr />
                <div className="total-amount-row">
                    <span>Total Amount</span>
                    <span className="total-amount">${totalAmount}</span>
                </div>
                <button className="checkout-btn">Continue To Checkout</button>
                <button className="return-btn">
                    <span className="arrow">←</span> Return To Shopping
                </button>
            </div>
        </div>
    );
};

export default CartSummary;
