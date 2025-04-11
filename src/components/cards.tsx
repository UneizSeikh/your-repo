import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favorite/favoriteSlice";
import { RootState } from "../redux/store";
import CartButton from "./cartButton";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const CardList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const cart = useSelector((state: RootState) => state.cart.items);
    const favorites = useSelector((state: RootState) => state.favorite.items);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

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
                {products.map((product) => {
                    const cartItem = cart[product.id];
                    const quantity = cartItem?.quantity || 0;

                    return (
                        <div className="cards" key={product.id}>
                            <div className="product-img-wrp">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="product-img"
                                />
                            </div>
                            <div className="card-detail-wrp">
                                <div className="p-name">{product.title}</div>
                                <div className="p-price">From ${product.price}</div>
                            </div>

                            <CartButton
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                quantity={quantity}
                            />

                            <div
                                className="fav-icon"
                                onClick={() => {
                                    dispatch(
                                        toggleFavorite({
                                            id: product.id,
                                            name: product.title,
                                            price: product.price,
                                            imageUrl: product.image,
                                        })
                                    );
                                }}
                            >
                                <i
                                    className={
                                        favorites[product.id] ? "fas fa-heart" : "far fa-heart"
                                    }
                                ></i>
                            </div>

                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CardList;
