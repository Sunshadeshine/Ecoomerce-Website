import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Index.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forgot_Password = () => {
  const [newPassword, setnewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        navigate("/login");
        setTimeout(() => {
          toast.success("Password changed Successfully");
        }, 1);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error in Setting up Password", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="common_form frgt-pss d-flex flex-column justify-content-center">
        <h3>Forgot Password?</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Femail">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              id="Femail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Fpassword">Password</label>
            <input
              value={newPassword}
              type="password"
              className="form-control"
              id="Fpassword"
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">
              <h6>Security Question:</h6>What was the brand of your first
              computer?
            </label>
            <input
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              value={answer}
              type="text"
              className="form-control"
              id="answer"
              name="answer"
              required
            />
            <button type="submit" className="signin_but">
              Set New Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Forgot_Password;
