import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiFillHeart,
} from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your shoes"
          />
        </div>

        <div className="profile-container">
          <a href="">
            <AiFillHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
