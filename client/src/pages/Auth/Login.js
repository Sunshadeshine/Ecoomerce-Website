import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [auth, setAuth] = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        console.log(res.data.user);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
        setTimeout(() => {
          toast.success(res.data.message);
        }, 1);
      } else {
        console.log(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error in Login in", error);
      toast.error("Something went wrong! Try Again ");
    }
  };
  return (
    <div className=" common_form Sign_in">
      <h3>Already have an account?</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Lemail">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            id="Lemail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Lpassword">Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            id="Lpassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <NavLink to="/forgot-password" className="h6 small">
            Forgot Password ?
          </NavLink>
        </div>
        <button type="submit" className="signin_but">
          Sign In
        </button>
      </form>
      <div className=" social-login">
        <span className="social-label">
          Or <br />
          Continue with
        </span>
        <div className="d-flex socials">
          <a href="/users/auth/google">
            <img src="/social-icons/001-google.png" alt="Google" />{" "}
          </a>
          <a href="/users/auth/google">
            <img src="/social-icons/002-facebook.png" alt="Facebook" />
          </a>
          <a href="/users/auth/google">
            <img src="/social-icons/003-github.png" alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
