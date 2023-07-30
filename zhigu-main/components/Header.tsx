import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="header" data-header="">
      <div className="container">
        <div className="overlay" data-overlay="" />
        <a href="#" className="logo">
          <Image
            src="/assets/images/logo.svg"
            width={160}
            height={50}
            alt="Footcap logo"
          />
        </a>
        <button
          className="nav-open-btn"
          data-nav-open-btn=""
          aria-label="Open Menu"
        >
          {/* <ion-icon name="menu-outline" /> */}
        </button>
        <nav className="navbar" data-navbar="">
          <button
            className="nav-close-btn"
            data-nav-close-btn=""
            aria-label="Close Menu"
          >
            {/* <ion-icon name="close-outline" /> */}
          </button>
          <a href="#" className="logo">
            <Image
              src="/assets/images/logo.svg"
              width={190}
              height={50}
              alt="Footcap logo"
            />
          </a>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Products
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Shop
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="nav-action-list">
            <li>
              <button className="nav-action-btn">
                <FiSearch size={20} />
                <span className="nav-action-text">Search</span>
              </button>
            </li>
            <li>
              <a href="#" className="nav-action-btn">
                <AiOutlineUser size={20} />
                <span className="nav-action-text">Login / Register</span>
              </a>
            </li>
            <li>
              <button className="nav-action-btn">
                <AiOutlineHeart size={20} />
                <span className="nav-action-text">Wishlist</span>
                <data className="nav-action-badge" value={5} aria-hidden="true">
                  5
                </data>
              </button>
            </li>
            <li>
              <button className="nav-action-btn">
                <AiOutlineShopping size={20} />
                <data className="nav-action-text" value={318.0}>
                  Basket: <strong>$318.00</strong>
                </data>
                <data className="nav-action-badge" value={4} aria-hidden="true">
                  4
                </data>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
