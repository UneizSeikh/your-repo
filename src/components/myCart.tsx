import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart/cartSlice";
import CartTable from "./cartTable";
import CartSummary from "./cartSummary";

const MyCart = () => {
  // Convert the cart items object to an array
  const cartItems = useSelector((state: RootState) => Object.values(state.cart.items));
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="wishlist empty">
        <p>Your Cart is empty. Please add a product first. </p>
      </div>
    );
  }

  return (
    <div className="mycart_detail_wrp">
      <div className="cart_detail_wrp">
        <CartTable
          items={cartItems}
          onIncrement={(id) => dispatch(incrementQuantity(id))}
          onDecrement={(id) => dispatch(decrementQuantity(id))}
          onRemove={(id) => dispatch(removeFromCart(id))}
        />
      </div>
      <CartSummary items={cartItems}/>
    </div>
  );
};

export default MyCart;
