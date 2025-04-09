import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFavorite } from "../redux/favorite/favoriteSlice";
import { toast } from "react-toastify";

const Wishlist: React.FC = () => {
  const favoriteItems = Object.values(
    useSelector((state: RootState) => state.favorite.items)
  );

  const dispatch = useDispatch();

  if (favoriteItems.length === 0) {
    return (
      <div className="wishlist empty">
        <p>Your wishlist is empty. Please like a product first.</p>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <div className="wishlist-cards">
        {favoriteItems.map((item) => (
          <div className="wishlist-card" key={item.id}>
            <div className="wishlist-img">
              <img src={item.imageUrl} alt={item.name} loading="lazy" />
            </div>
            <div className="wishlist-info">
              <div className="product-name">{item.name}</div>
              <div className="product-price">Price: ${item.price}</div>
            </div>
            <button
              className="wishlist-remove-btn"
              onClick={() => {
                dispatch(removeFavorite(item.id));
                toast.success("Item removed from wishlist");
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
