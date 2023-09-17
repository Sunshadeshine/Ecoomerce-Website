import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../pages/ProductDetails.css";
// import "../pages/ProductShow.js";
import { useCart } from "../context/cart.js";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //inital details

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <div className="small-12 large-6 columns">
            <div className="productCard_rightSide">
              {/* <div className="block_specification">
                <div className="block_specification__specificationShow">
                  <i
                    className="fa fa-cog block_specification__button block_specification__button__rotate"
                    aria-hidden="true"
                  />
                  <span className="block_specification__text">spec</span>
                </div>
                <div className="block_specification__informationShow hide">
                  <i
                    className="fa fa-info-circle block_specification__button block_specification__button__jump"
                    aria-hidden="true"
                  />
                  <span className="block_specification__text">inform</span>
                </div>
              </div> */}

              <div className="block_product">
                <h2 className="block_name block_name__mainName">
                  {product?.category?.name}
                </h2>
                <h2 className="block_name block_name__addName">
                  {product.name}
                </h2>
                <p className="block_product__advantagesProduct">
                  Free Shipping all over INDIA
                </p>
                <div className="block_informationAboutDevice">
                  <div className="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                    {/* <table className="block_specificationInformation_table"> */}
                    {/* <tbody>
                        <tr>
                          <th>Characteristic</th>
                          <th>Value</th>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>15x21 Inches</td>
                        </tr>
                        <tr>
                          <td>Type</td>
                          <td>Door Mats</td>
                        </tr>
                        <tr>
                          <td>Shape</td>
                          <td>Rectangle</td>
                        </tr>
                        <tr>
                          <td>Wash Care</td>
                          <td>Handwash</td>
                        </tr>
                        <tr>
                          <td>Packaging Type</td>
                          <td>Polybags and PP Bales</td>
                        </tr>
                        <tr>
                          <td>Features</td>
                          <td>Door Mats</td>
                        </tr>
                        <tr>
                          <td>Pile Height</td>
                          <td>7 mm</td>
                        </tr>
                        <tr>
                          <td>Mat Size</td>
                          <td>15x21 Inches</td>
                        </tr>
                        <tr>
                          <td>GSM</td>
                          <td>1350</td>
                        </tr>
                        <tr>
                          <td>Water Resistant ?</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td>Packaging Size</td>
                          <td>80 Kgs per Bale</td>
                        </tr>
                        <tr>
                          <td>Country of Origin</td>
                          <td>Made in India</td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                  <div className="block_descriptionInformation">
                    <span>{product.description}</span>
                  </div>
                  <div className="block_rating clearfix">
                    <fieldset className="block_rating__stars">
                      <input
                        type="radio"
                        id="star5"
                        name="rating"
                        defaultValue={5}
                      />
                      <label
                        className="full"
                        htmlFor="star5"
                        title="Awesome - 5 stars"
                      />
                      <input
                        type="radio"
                        id="star4half"
                        name="rating"
                        defaultValue="4 and a half"
                      />
                      <label
                        className="half"
                        htmlFor="star4half"
                        title="Pretty good - 4.5 stars"
                      />
                      <input
                        type="radio"
                        id="star4"
                        name="rating"
                        defaultValue={4}
                      />
                      <label
                        className="full"
                        htmlFor="star4"
                        title="Good - 4 stars"
                      />
                      <input
                        type="radio"
                        id="star3half"
                        name="rating"
                        defaultValue="3 and a half"
                      />
                      <label
                        className="half"
                        htmlFor="star3half"
                        title="Above average - 3.5 stars"
                      />
                      <input
                        type="radio"
                        id="star3"
                        name="rating"
                        defaultValue={3}
                      />
                      <label
                        className="full"
                        htmlFor="star3"
                        title="Average - 3 stars"
                      />
                      <input
                        type="radio"
                        id="star2half"
                        name="rating"
                        defaultValue="2 and a half"
                      />
                      <label
                        className="half"
                        htmlFor="star2half"
                        title="Kinda bad - 2.5 stars"
                      />
                      <input
                        type="radio"
                        id="star2"
                        name="rating"
                        defaultValue={2}
                      />
                      <label
                        className="full"
                        htmlFor="star2"
                        title="Kinda bad - 2 stars"
                      />
                      <input
                        type="radio"
                        id="star1half"
                        name="rating"
                        defaultValue="1 and a half"
                      />
                      <label
                        className="half"
                        htmlFor="star1half"
                        title="Meh - 1.5 stars"
                      />
                      <input
                        type="radio"
                        id="star1"
                        name="rating"
                        defaultValue={1}
                      />
                      <label
                        className="full"
                        htmlFor="star1"
                        title="Sucks big time - 1 star"
                      />
                      <input
                        type="radio"
                        id="starhalf"
                        name="rating"
                        defaultValue="half"
                      />
                      <label
                        className="half"
                        htmlFor="starhalf"
                        title="Sucks big time - 0.5 stars"
                      />
                    </fieldset>
                    <span className="block_rating__avarage">4.25</span>
                    <span className="block_rating__reviews">(153 reviews)</span>
                  </div>
                  <div className="row">
                    <div className="large-6 small-12 column left-align">
                      <div className="block_price">
                        <p className="block_price__currency">
                          {product?.price?.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </p>
                        <p className="block_price__shipping">
                          Shipping and taxes extra
                        </p>
                      </div>
                    </div>
                    <div className="large-6 small-12 column end">
                      <button
                        className="button button_addToCard"
                        onClick={() => {
                          setCart([...cart, product]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, product])
                          );
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* //getAllCategory */};
    </Layout>
  );
};

export default ProductDetails;
