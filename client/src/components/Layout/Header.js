import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearch } from "../../context/search.js";
import axios from "axios";

const Header = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
    setTimeout(() => {
      toast.success("User Logout Sucessfully !");
    }, 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="header-navbar">
      <header className="">
        <div className="d-flex flex-row align-items-center justify-content-between top-heading-area">
          <h1 className="company_name">BathMats Overseas</h1>

          <div className="search_container">
            <form className="search_form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search Product"
                name="search"
                aria-label="search"
                value={values.keyword}
                onChange={(e) =>
                  setValues({ ...values, keyword: e.target.value })
                }
              />
              <button type="submit">
                <span class="material-symbols-outlined"> search</span>
              </button>
            </form>
          </div>
          <div className="d-flex align-items-center justify-content-between icons_container">
            <NavLink
              className="icon-label-font d-flex flex-column align-items-center"
              to="/location"
            >
              <span className="material-symbols-outlined">location_on</span>
              <span>location</span>
            </NavLink>
            <NavLink
              className="icon-label-font d-flex flex-column align-items-center"
              to="/wishlist"
            >
              <span className="material-symbols-outlined">favorite</span>
              <span>wishlists</span>
            </NavLink>

            {/* Login /logout */}
            <Dropdown
              onMouseLeave={() => setShowDropdown(false)}
              onMouseOver={() => setShowDropdown(true)}
            >
              <Dropdown.Toggle variant="none">
                {!auth.user ? (
                  <NavLink
                    className="icon-label-font d-flex flex-column align-items-center"
                    to="/Register"
                  >
                    <span className="material-symbols-outlined">person</span>
                    <span>Profile</span>
                  </NavLink>
                ) : (
                  <NavLink
                    className=" icon-label-font d-flex flex-column align-items-center"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    <span className="material-symbols-outlined">person</span>
                    <span>Profile</span>
                  </NavLink>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu show={showDropdown}>
                <Dropdown.Item>
                  <NavLink to="/profile">Profile</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/wallet">Wallet</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/orders">Orders</NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                {!auth.user ? (
                  <Dropdown.Item>
                    <NavLink to="/login">Log In</NavLink>
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <NavLink
              className="icon-label-font d-flex flex-column align-items-center"
              to="/cart "
              style={{ position: "relative" }}
            >
              <span className="CartLengthBox">
                {" "}
                <span className="CartLength">6</span>
              </span>
              <NavLink
                className="icon-label-font d-flex flex-column align-items-center"
                to="/cart"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>Cart</span>
              </NavLink>
            </NavLink>
          </div>
        </div>
      </header>
      <nav className="">
        <ul className="d-flex flex-row justify-content-around navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" href="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Our Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contactus">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/globalfootprints">
              Global Footprint
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/SizeGuide">
              Size Guide
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Faqs">
              FAQs
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* {props.children} */}
    </div>
  );
};

export default Header;
