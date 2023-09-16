import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
export const createCategoryController = async (req, res) => {
  try {
    const { name, desc } = req.body; //getting name from user
    console.log(name);
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await categoryModel
      .findOne({ name })
      .maxTimeMS(20000); //check this category does'nt exist
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }
    const category = await new categoryModel({
      name,
      desc,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New category created!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Creating Category!",
    });
  }
};

//update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const { id } = req.params;
    const category = await categoryModel
      .findByIdAndUpdate(
        id,
        { name, desc, slug: slugify(name) },
        { new: true } //update karane k liye 3rd paramater pass krna pdta h
      )
      .maxTimeMS(20000);
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully !",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category !",
    });
  }
};

// get all cat
export const categoryControlller = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });

    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

//delete category
export const deleteCategoryCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};
