import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";
import { toggleFavoriteCount } from "../redux/favorite/favoriteSlice";
import { toast } from "react-toastify";

// Define the type for a product
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

// Define the types for state
type Favorites = Record<number, boolean>;
type CartState = Record<number, number>; // Tracks quantity of each product

const CardList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<Favorites>({});
    const [cart, setCart] = useState<CartState>({});
    // const [iconChange, setIconChange] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    const dispatch = useDispatch();


    // Toggle favorite (wishlist)
    const toggleFavorite = (id: number) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // // Add product to cart or increase quantity
    const addToCart = (id: number) => {
        setCart((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {products.map((product) => (
                    <div className="cards" key={product.id}>
                        <div className="product-img-wrp">
                            <img src={product.image} alt={product.title} loading="lazy" className="product-img" />
                        </div>
                        <div className="card-detail-wrp">
                            <div className="p-name">{product.title}</div>
                            <div className="p-price">From ${product.price}</div>
                        </div>
                        <div className="add-cart-button">
                            {cart[product.id] !== undefined ? (
                                <div className="cart_counter">
                                    <div
                                        className="icon_wrp"
                                        onClick={() => {
                                            let shouldDispatch = false;

                                            setCart((prev) => {
                                                const currentQty = prev[product.id] || 1;
                                                const newCart = { ...prev };

                                                if (currentQty <= 1) {
                                                    delete newCart[product.id];
                                                    shouldDispatch = true; //  mark to dispatch after setCart
                                                } else {
                                                    newCart[product.id] = currentQty - 1;
                                                }

                                                return newCart;
                                            });

                                            //  this will always run AFTER setCart completes
                                            if (shouldDispatch) {
                                                dispatch(decrement());
                                                toast.error("Item removed from cart.");
                                            }
                                        }}
                                    >

                                        <i className="fas fa-trash-alt"></i>

                                        {/* {iconChange === true
                                            ?
                                            <i className="fas fa-minus"> </i>
                                            :
                                            <i className="fas fa-trash-alt"></i>
                                        } */}
                                    </div>

                                    <div className="counter_value">{cart[product.id] || 0}</div>
                                    <div className="icon_wrp" onClick={() => {
                                        setCart((prev) => ({
                                            ...prev,
                                            [product.id]: (prev[product.id] || 0) + 1,
                                        }));
                                    }}>
                                        <i className="far fa-plus"
                                        // onClick={() => setIconChange(true)}
                                        ></i>
                                    </div>
                                </div>
                            ) : (

                                <div className="add_cart_btn" onClick={() => {
                                    dispatch(increment());
                                    addToCart(product.id);
                                    toast.success("🛒 Added to Cart!")
                                }}>
                                    <i className="fas fa-bolt"></i> Add to Cart
                                </div>
                                
                            )}

                        </div>
                        <div className="fav-icon" onClick={() => {
                            dispatch(toggleFavoriteCount(product.id)); // update redux state
                            toggleFavorite(product.id); // optional if you want local state too
                        }} >
                            <i className={favorites[product.id] ? "fas fa-heart" : "far fa-heart"}></i>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardList;
