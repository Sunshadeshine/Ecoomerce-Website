// import Layout from "../../components/Layout/Layout";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import DashboardHeader from "../../components/Layout/DashboardHeader";
// import "../Index.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   //getall products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `/api/v1/product/get-product`
//       );
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   const groupedProducts = products.reduce((acc, product) => {
//     const { category } = product;

//     // Check if the category exists in the accumulator
//     if (!acc[category]) {
//       acc[category] = [];
//     }

//     // Add the product to the corresponding category
//     acc[category].push(product);

//     return acc;
//   }, {});
//     return (
//       <Layout>
//         <div className="admin-dashboard">
//           <DashboardHeader />
//           <div className="m-3 p-3 row">
//             <div className="col-md-3">
//               <AdminMenu />
//             </div>
//             <div className="col-md-9 admin-details">
//               <h3>Products</h3>
//               <hr />
//               <div className="d-flex">
//                 {products?.map((p) => (
//                   <Link
//                     key={p._id}
//                     to={`/dashboard/admin/product/${p.slug}`}
//                     className="product-link"
//                   >
//                     <div
//                       className="products-card card m-2"
//                       style={{ width: "18rem" }}
//                     >
//                       <img
//                         src={`/api/v1/product/product-photo/${p._id}`}
//                         className="card-img-top"
//                         alt={p.name}
//                       />
//                       <div className="card-body">
//                         <h6 className="card-title">{p.name}</h6>
//                         <p className="card-text">{p.description}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
// };

// export default Products;
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import DashboardHeader from "../../components/Layout/DashboardHeader";
import "../Index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Get category information for each product
  const getCategoryInfo = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-category`);
      const categoryMap = {};
      data.category.forEach((cate) => {
        categoryMap[cate._id] = cate;
      });
      setCategories(categoryMap);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch categories");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
    getCategoryInfo();
  }, []);
  useEffect(() => {
    getAllProducts();
    getCategoryInfo();
  }, []);

  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-details">
            <h3>Products</h3>

            {Object.keys(categories).map((categoryId) => (
              <div key={categoryId}>
                <hr />
                <h5 className="text-start">{categories[categoryId].name}</h5>
                <div className="d-flex">
                  {products
                    .filter((p) => p.category._id === categoryId)
                    .map((p) => (
                      <div
                        className="products-card card m-2"
                        style={{ width: "12rem" }}
                      >
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                        />
                        <div className="card-body">
                          <h6 className="card-title">{p.name}</h6>
                          <p className="products-desc card-text">
                            {p.description}
                          </p>
                          <Link
                            key={p._id}
                            to={`/dashboard/admin/product/${p.slug}`}
                            className="product-link"
                          >
                            <span class="material-symbols-outlined">
                              edit_note
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
