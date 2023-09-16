import mongoose from "mongoose";

// const descriptionSchema = new mongoose.Schema({
//   Material: String,
//   "Usage/Application": String,
//   Pattern: String,
//   Brand: String,
//   Color: String,
//   Size: String,
//   Type: String,
//   Shape: String,
//   "Wash Care": String,
//   "Packaging Type": String,
//   Features: String,
//   "Pile Height": String,
//   "Mat Size": String,
//   GSM: String,
//   "Is It Water Resistant": String,
//   "Packaging Size": String,
//   "Country of Origin": String,
// });
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      //seo friendly
      type: String,
      required: true,
    },
    // description: descriptionSchema,
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
