import cloudinary from "../config/cloudinary.js";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      bestSeller,
      category,
      subCategory,
      sizes,
    } = req.body;

    const images = [];

    if (req.files?.image1) images.push(req.files.image1[0]);
    if (req.files?.image2) images.push(req.files.image2[0]);
    if (req.files?.image3) images.push(req.files.image3[0]);
    if (req.files?.image4) images.push(req.files.image4[0]);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    const productData = {
      name,
      description,
      price: Number(price),
      bestSeller: bestSeller === "true" ? true : false,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: "true", message: "Product Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: "false", message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel
      .find({}, { name: 1, price: 1, image: 1, bestSeller: 1, category: 1, subCategory: 1 })
      .limit(30)          // 👈 important
      .lean();            // 👈 fast response

    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    res.json({ success: "true", product });
  } catch (error) {
    console.log(error);
    res.json({ success: "false", message: error.message });
  }
};

export { addProduct, removeProduct, listProduct, singleProduct };
