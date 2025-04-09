import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import PlayStore from "../assets/images/playstore.svg";
import AppStore from "../assets/images/appstore.svg"

export default function Footer() {
    return (
        <footer className="footer" >
            <div className="container-sm mx-auto grid md:grid-cols-4 gap-8">
                <div className="footer_cont_wrp">

                    <div className="footer_widget" >
                        <img src={Logo} alt="E-commerce Logo" className="footer-logo" />
                        <p>69 Selous Ave, Harare, Zimbabwe
                            <br />
                            Support (+263) 03 0000052
                        </p>
                        <p className="text-blue-600">info@demo.com</p>
                    </div>
                    <div className="footer_widget" >
                        <h3 className="font-semibold mb-sm-2">Help Center</h3>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">About E-Commerce</a></li>
                            <li><a href="#">Support Tickets</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget" >
                        <h3 className="font-semibold mb-sm-2">Quick Links</h3>
                        <ul>
                            <li><a href="#">Become A Supplier</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Services & Membership</a></li>
                            <li><a href="#">Help & Community</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget" >
                        <h3 className="font-semibold mb-sm-2">Buy On E-Commerce</h3>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy & Rules</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget" >
                        <h3 className="font-semibold mb-sm-2">Download App </h3>
                        <div className="download_sect">
                            <img src={PlayStore} alt="STORE" loading="lazy" />
                            <img src={AppStore} alt="STORE" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy_right" >
                <div className="container-sm" >
                    <div className="copy_right_row">
                        <div>©2024 E-Commerce All Rights Reserved</div>
                        <div className="flex space-x-4">
                            <FaFacebookF className="text-gray-600 cursor-pointer" />
                            <FaTwitter className="text-gray-600 cursor-pointer" />
                            <FaInstagram className="text-gray-600 cursor-pointer" />
                            <FaPinterest className="text-gray-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
