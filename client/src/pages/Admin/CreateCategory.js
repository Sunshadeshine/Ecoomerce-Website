import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
// import { useAuth } from "../../context/auth";
import axios from "axios";
import { Modal } from "antd";
import "../Index.css";
import DashboardHeader from "../../components/Layout/DashboardHeader";
import { set } from "mongoose";
import TextArea from "antd/es/input/TextArea";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        {
          name,
          desc,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
        setName("");
        setDesc("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input form");
    }
  };
  //  get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName, desc: updatedDesc }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="manage-category col-md-9 ">
            <h3>Manage Category</h3>
            <hr />
            <div className="create-category w-100">
              <h5>Create Category</h5>

              <form
                onSubmit={handleSubmit}
                className="d-flex justify-content-center flex-column"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    placeholder="Enter Category Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <textarea
                  className="form-control"
                  rows="5"
                  cols="50"
                  value={desc}
                  placeholder="Enter Category Description"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>

                <button type="submit" className="btn btn-secondary">
                  Create
                </button>
              </form>
            </div>
            <div className="w-100">
              <h5>Update/Delete Category</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-secondary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <form onSubmit={handleUpdate}>
                <div className="mb-3 form-group">
                  <label htmlFor="categoryName">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatedName}
                    id="categoryName"
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="categoryDesc">Category Description</label>
                  <TextArea
                    className="form-control"
                    value={updatedDesc}
                    id="categoryDesc"
                    onChange={(e) => setUpdatedDesc(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  Update
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
