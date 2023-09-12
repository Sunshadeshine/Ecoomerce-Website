import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res && res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error in Creating in account", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="Register">
      <h3>New User?</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="form-group">
          <small id="emailHelp" className="form-text text-muted">
            Sign up using your email address.
          </small>
          <br />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone no</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            type="text"
            className="form-control"
            id="address"
            name="address"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className="signin_but">
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Register;
