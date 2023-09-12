import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
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
  // const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  //   <a
  //     href=""
  //     ref={ref}
  //     onClick={(e) => {
  //       e.preventDefault();
  //       onClick(e);
  //     }}
  //   >
  //     {children}
  //     &#x25bc;
  //   </a>
  // ));

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="header-navbar">
      <header className="">
        <div className="d-flex flex-row align-items-center justify-content-between top-heading-area">
          <h1 className="company_name">BathMats Overseas</h1>

          <div className="search_container">
            <form className="search_form" action="">
              <input type="text" placeholder="Search Product" name="search" />
              <button type="submit">
                <span class="material-symbols-outlined"> search</span>
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-between icons_container">
            <span className="material-symbols-outlined">location_on</span>
            <span className="material-symbols-outlined">favorite</span>
            {/* Login /logout */}
            {!auth.user ? (
              <NavLink to="/Register">
                <span className="material-symbols-outlined">person</span>
              </NavLink>
            ) : (
              <Dropdown
                onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}
              >
                <Dropdown.Toggle variant="none">
                  <NavLink to="/dashboard">
                    <span className="material-symbols-outlined">person</span>{" "}
                  </NavLink>
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
                  <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            <NavLink to="/cart" style={{ position: "relative" }}>
              <span className="CartLengthBox">
                {" "}
                <span className="CartLength">6</span>
              </span>
              <span className="material-symbols-outlined">shopping_cart</span>
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
            <NavLink to="/" className="nav-link" href="">
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
