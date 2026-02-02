import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    set: (v) => parseFloat(v.toFixed(2)),
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  bestSeller: {
    type: Boolean,
  },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
