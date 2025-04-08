import Logo from "../assets/images/logo.png";
import SearchIcon from "../assets/images/search-interface-symbol.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface NavItemProps {
  count: number;
  iconClass: string;
  label: string;
  path: string;
  emptyMessage: string;
}

const NavItem = ({ count, iconClass, label, path, emptyMessage }: NavItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (count === 0) {
      toast.error(emptyMessage);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="product-detail" onClick={handleClick}>
      <div className="icon">
        <i className={iconClass}></i>
        <div className="name">{label}</div>
        <div className="num_badge">{count}</div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const cartCount = useSelector((state: any) => state.counter.value);
  const wishlistCount = useSelector((state: any) => state.favorite.favoritesCount);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="search_box">
          <input placeholder="Search for products, brands, and more" type="text" />
          <div className="search_icon">
            <img src={SearchIcon} alt="Search" />
          </div>
        </div>

        <div className="product-detail-wrp">
          <div className="product-detail">
            <div className="icon">
              <i className="fas fa-user-circle"></i>
              <div className="name">Tim</div>
            </div>
          </div>

          <NavItem
            count={wishlistCount}
            iconClass="fas fa-heart"
            label="Wishlist"
            path="/wishlist"
            emptyMessage="Your wishlist is empty. Please like a product first."
          />

          <NavItem
            count={cartCount}
            iconClass="far fa-shopping-cart"
            label="Cart"
            path="/cart"
            emptyMessage="Your cart is empty. Please add a product first."
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
