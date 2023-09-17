import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import GlobalFoots from "./pages/GlobalFoots";
import SizeGuide from "./pages/SIzeGuide";
import React from "react";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import LoginRegister from "./pages/Auth/Login_Register";

import PrivateRoute from "./components/Routes/Private";
import Dashboard from "./pages/User/Dashboard";
import ForgotPassword from "./pages/Auth/Forgot_Password";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import AdminProducts from "./pages/Admin/Products";
import AdminOrders from "./pages/Admin/Orders";
// import Products from "./pages/Admin/Products";
import Orders from "./pages/User/orders";
import EditFAQs from "./pages/Admin/EditFAQs";
import EditAbout from "./pages/Admin/EditAbout";
import EditContacts from "./pages/Admin/EditContacts";
import EditSizeGuide from "./pages/Admin/EditSizeGuide";
import Wallet from "./pages/User/Wallet";
import Security from "./pages/User/Security";
import UpdateProducts from "./pages/Admin/UpdateProducts";
import Products from "./pages/Products";
import Search from "./pages/search";
import Cart from "./pages/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<Search />} />

      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/wallet" element={<Wallet />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/security" element={<Security />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/product/:slug" element={<UpdateProducts />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/products" element={<AdminProducts />} />
        <Route path="admin/orders" element={<AdminOrders />} />
        <Route path="admin/Esizeguide" element={<EditSizeGuide />} />
        <Route path="admin/Econtacts" element={<EditContacts />} />
        <Route path="admin/eaboutus" element={<EditAbout />} />
        <Route path="admin/efaqs" element={<EditFAQs />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/globalfootprints" element={<GlobalFoots />} />
      <Route path="/SizeGuide" element={<SizeGuide />} />
      <Route path="/pgnf" element={<PageNotFound />} />
      <Route path="/Register" element={<LoginRegister />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
