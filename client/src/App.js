import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import GlobalFoots from "./pages/GlobalFoots";
import SizeGuide from "./pages/SIzeGuide";
import React from "react";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Login_Register from "./pages/Auth/Login_Register";
// import Profile from "./pages/User/profile";
// import Orders from "./pages/User/orders";
// import Wallet from "./pages/User/Wallet";
import PrivateRoute from "./components/Routes/Private";
import Dashboard from "./pages/User/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />} />
        {/* <Route path="orders" element={<Orders />} /> */}
        {/* <Route path="wallet" element={<Wallet />} /> */}
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/globalfootprints" element={<GlobalFoots />} />
      <Route path="/SizeGuide" element={<SizeGuide />} />
      <Route path="/pgnf" element={<PageNotFound />} />
      <Route path="/Register" element={<Login_Register />} />
      <Route path="/login" element={<Login_Register />} />
    </Routes>
  );
}

export default App;
