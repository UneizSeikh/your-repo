import Logo from "../assets/images/logo.png";
import SearchIcon from "../assets/images/search-interface-symbol.png";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CategoryDropdown from "./categoryDropdown";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

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
  const cartItems = useSelector((state: any) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  const handleItemClick = () => {
    setSearchTerm("");
    setShowSearchResults(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="search_categories_sec">
          <div className="categoreis_drop_wrp">
            <div className="categoreis_btn">
              <i className="far fa-bars"></i>
              All Categories
            </div>

            <CategoryDropdown />

          </div>

          <div className="search_box">
            <input
              placeholder="Search for products, brands, and more"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
            />
            <div className="search_icon">
              <img src={SearchIcon} alt="Search" />
            </div>
            {showSearchResults && searchTerm && (
              <div className="search-results-dropdown">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={handleItemClick}
                    >
                      <img src={product.image} alt={product.title} className="search-result-image" />
                      <div className="search-result-details">
                        <div className="search-result-name">{product.title}</div>
                        <div className="search-result-price">${product.price}</div>
                        {cartItems[product.id] && (
                          <div className="search-result-quantity">
                            In Cart: {cartItems[product.id].quantity}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">No products found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="product-detail-wrp">
          <div className="product-detail user_detail">
            <div className="icon">
              <div className="login_btn">
                <i className="fas fa-user-circle login_icon"></i>
                <div className="name">Login</div>
                <i className="fas fa-chevron-down login_icon"></i>
              </div>

              <div className="login_dropdown">
                <div className="login_drop_wrp">
                  <Link to="/login">
                    <div className="links">
                      <i className="fas fa-sign-in-alt"></i>
                      Login
                    </div>
                  </Link>

                  <Link to="/signup">
                    <div className="links">
                      <i className="fas fa-user-plus"></i>
                      Sign Up
                    </div>
                  </Link>
                </div>
              </div>
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
