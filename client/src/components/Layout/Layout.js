import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        {children}
        <ToastContainer position="top-center" />
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Your Company",
  description: "Products",
  keywords: "Mern ,node,react,express,",
};
export default Layout;
