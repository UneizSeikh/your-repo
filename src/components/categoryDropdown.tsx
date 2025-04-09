import React from 'react';
import gadgetsImg from '../assets/images/gadgets.png';
import fashionImg from '../assets/images/fashion-design.png';
import groceriesImg from '../assets/images/shopping-bag.png';
import homeDecorImg from '../assets/images/shelf.png';
import sportsImg from '../assets/images/basketball.png';
import booksImg from '../assets/images/books.png';
import beautyImg from '../assets/images/cosmetics.png';
import toysImg from '../assets/images/storage-box.png';
import footwearImg from '../assets/images/shoes.png';
import accessoriesImg from '../assets/images/jewelry.png';

const categories = [
  {
    name: "Electronics",
    image: gadgetsImg,
    subcategories: ["Mobiles", "Laptops", "Cameras", "Accessories", "Smart Watches"],
  },
  {
    name: "Fashion",
    image: fashionImg,
    subcategories: ["Men", "Women", "Kids", "Ethnic Wear", "Western Wear"],
  },
  {
    name: "Groceries",
    image: groceriesImg,
    subcategories: ["Fruits", "Vegetables", "Dairy", "Beverages", "Snacks"],
  },
  {
    name: "Home Decor",
    image: homeDecorImg,
    subcategories: ["Wall Art", "Clocks", "Lamps", "Cushions", "Vases"],
  },
  {
    name: "Sports",
    image: sportsImg,
    subcategories: ["Cricket", "Football", "Gym Gear", "Cycling", "Outdoor"],
  },
  {
    name: "Books",
    image: booksImg,
    subcategories: ["Fiction", "Non-fiction", "Comics", "Education", "Biographies"],
  },
  {
    name: "Beauty",
    image: beautyImg,
    subcategories: ["Makeup", "Skincare", "Haircare", "Fragrances", "Tools"],
  },
  {
    name: "Toys",
    image: toysImg,
    subcategories: ["Educational", "Action Figures", "Puzzles", "Soft Toys", "Games"],
  },
  {
    name: "Footwear",
    image: footwearImg,
    subcategories: ["Men", "Women", "Kids", "Sports Shoes", "Slippers"],
  },
  {
    name: "Accessories",
    image: accessoriesImg,
    subcategories: ["Watches", "Bags", "Belts", "Hats", "Jewelry"],
  },
];

const CategoryDropdown: React.FC = () => {
  return (
    <div className="categ_dropdown">
      <div className="categories_list_wrp">
        {categories.map((cat, index) => (
          <div className="onhover_categ_list" key={index}>
            <div className="categ_list_wrp">
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <div className="categ_name">{cat.name}</div>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="onhover_categ_box">
              <div className="categ_headi">{cat.name}</div>
              <ul>
                {cat.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{sub}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
