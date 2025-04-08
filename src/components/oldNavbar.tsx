import Logo from "../assets/images/logo.png";
import SearchIcon from "../assets/images/search-interface-symbol.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

    const count = useSelector((state: any) => state.counter.value);
    const favoritesCount = useSelector((state: any) => state.favorite.favoritesCount);

    return (
        <div>
            <nav className='navbar'>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="search_box">
                    <input placeholder='Search for products brands and more' type='text' />
                    <div className="search_icon">
                        <img src={SearchIcon} alt="Search" />
                    </div>
                </div>

                <div className="product-detail-wrp">
                    <div className="product-detail">
                        <div className="icon">
                            <i className="fas fa-user-circle"></i>
                            <div className='name'> Tim </div>
                        </div>
                    </div>
                    <div
                        className="product-detail"
                        onClick={() => {
                            if (favoritesCount === 0) {
                                toast.error("Your wishlist is empty. Please Like a product first.");
                            }
                        }}
                    >
                        {favoritesCount === 0 ? (
                            <div className="icon">
                                <i className="fas fa-heart"></i>
                                <div className='name'> Wishlist </div>
                                <div className="num_badge">
                                    {favoritesCount}
                                </div>
                            </div>
                        )
                            : (
                                <Link to="/wishlist">
                                    <div className="icon">
                                        <i className="fas fa-heart"></i>
                                        <div className='name'> Wishlist </div>
                                        <div className="num_badge">
                                            {favoritesCount}
                                        </div>
                                    </div>
                                </Link>
                            )}

                    </div>
                    <div
                        className="product-detail"
                        onClick={() => {
                            if (count === 0) {
                                toast.error("Your cart is empty. Please add a product first.");
                            }
                        }}
                    >
                        {count === 0 ? (
                            <div className="icon">
                                <i className="far fa-shopping-cart"></i>
                                <div className="name">Cart</div>
                                <div className="num_badge">{count}</div>
                            </div>
                        ) : (
                            <Link to="/cart">
                                <div className="icon">
                                    <i className="far fa-shopping-cart"></i>
                                    <div className="name">Cart</div>
                                    <div className="num_badge">{count}</div>
                                </div>
                            </Link>
                        )}
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
