import { Link } from "react-router-dom";
import { assets } from "../assets/asset";
import { MapPin, Phone, Mail, Copyright } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faPaypal,
  faApple,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faFacebookF, 
  faInstagram, 
  faXTwitter, 
  faPinterestP 
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-40">
      {/* Main Footer Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex flex-col items-center">
                <img
                  src={assets.light_logo}
                  alt="Forever Clothing"
                  className="w-32 h-auto mb-3"
                />
                <h2 className="fjalla-one-regular text-2xl text-gray-800">
                  FOREVER CLOTHING
                </h2>
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Your ultimate destination for premium fashion that blends timeless
              style with contemporary trends. We craft pieces designed to last
              forever in your wardrobe.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: faFacebookF, name: "Facebook" },
                { icon: faInstagram, name: "Instagram" },
                { icon: faXTwitter, name: "Twitter" },
                { icon: faPinterestP, name: "Pinterest" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-gray-800 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Men", "Women", "Kids", "Accessories", "Sportswear"].map(
                (category) => (
                  <li key={category}>
                    <Link
                      to={`/category/${category.toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-gray-800 transition-colors"></span>
                      {category} Collection
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Contact Us
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin size={24} className="mr-2" />
                  123 Fashion Street, Style City
                </p>
                <p className="flex items-center">
                  <Phone size={24} className="mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Mail size={24} className="mr-2"/>
                  hello@foreverclothing.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm flex">
            <Copyright size={18} className="mr-2"/> {currentYear} Forever Clothing. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/shipping-policy"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              to="/returns"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              Returns & Exchanges
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">Accepted Payments:</span>
            <div className="flex space-x-3">
              {/* Credit Card */}
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-gray-600 text-lg"
              />

              {/* PayPal */}
              <FontAwesomeIcon
                icon={faPaypal}
                className="text-gray-800 text-lg"
              />

              {/* Apple Pay */}
              <FontAwesomeIcon
                icon={faApple}
                className="text-gray-800 text-lg"
              />

              {/* Google Pay */}
              <FontAwesomeIcon
                icon={faGooglePay}
                className="text-gray-600 text-lg"
              />

              {/* Visa */}
              <FontAwesomeIcon
                icon={faCcVisa}
                className="text-gray-800 text-lg"
              />

              {/* Mastercard */}
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="text-gray-800 text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
