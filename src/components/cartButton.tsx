import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { increment, decrement } from "../redux/counter/counterSlice";
import { addToCart, removeFromCart, updateQuantity } from "../redux/cart/cartSlice";

interface CartButtonProps {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

const CartButton: React.FC<CartButtonProps> = ({ id, title, price, image, quantity }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(increment());
        dispatch(
            addToCart({
                id,
                name: title,
                price,
                imageUrl: image,
            })
        );
        toast.success("🛒 Added to Cart!");
    };

    const handleDecrease = () => {
        if (quantity <= 1) {
            dispatch(removeFromCart(id));
            dispatch(decrement());
            toast.error("Item removed from cart.");
        } else {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }));
        }
    };

    const handleIncrease = () => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    };

    return (
        <div className="add-cart-button">
            {quantity > 0 ? (
                <div className="cart_counter">
                    <div className="icon_wrp" onClick={handleDecrease}>
                        <i className={quantity > 1 ? "far fa-minus" : "fas fa-trash-alt"}></i>
                    </div>

                    <div className="counter_value">{quantity}</div>

                    <div className="icon_wrp" onClick={handleIncrease}>
                        <i className="far fa-plus"></i>
                    </div>
                </div>
            ) : (
                <div className="add_cart_btn" onClick={handleAddToCart}>
                    <i className="fas fa-bolt"></i> Add to Cart
                </div>
            )}

            {quantity > 0 && (
                <div className="success_text">
                    <i className="fas fa-check-circle"></i> Added To Cart
                </div>
            )}
        </div>
    );
};

export default CartButton;
