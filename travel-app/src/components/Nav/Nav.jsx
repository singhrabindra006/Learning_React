import React, { useState } from "react";
import navCss from "./Nav.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={navCss.Nav_Wrapper}>
      {/* Logo */}
      <div className={navCss.logo}>
        <a href="#">
          Travel<span>.</span>
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={`${navCss.nav_links} ${isMenuOpen ? navCss.active : ""}`}>
        <li>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={closeMenu}>
            Trips
          </a>
        </li>
        <li>
          <a href="#" onClick={closeMenu}>
            Destinations
          </a>
        </li>
        <li>
          <a href="#" onClick={closeMenu}>
            About
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className={navCss.nav_btns}>
        {/* Search */}
        <div className={navCss.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search..." />
        </div>

        {/* Call */}
        <div className={navCss.CallBtn}>
          <i className="ri-phone-line"></i>

          <div>
            <a href="tel:+9779768753240">+977 9768753240</a>
            <small>Call Your Travel Agent</small>
          </div>
        </div>

        {/* Mobile Menu */}
        <button
          className={navCss.menu_toggle}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-2-line"}></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
