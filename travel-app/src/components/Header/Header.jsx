import React from "react";
import headerCss from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerCss.header_wrapper}>
      <div className={headerCss.imageContainer}>
        <div className={headerCss.hero_content}>
          <p>Discover Your Next Adventure</p>

          <h1>
            Explore the World,
            <br />
            One Unforgettable Journey
          </h1>

          <button>
            Explore Now
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
