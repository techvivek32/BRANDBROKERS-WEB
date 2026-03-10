import mongoose, { Schema, models } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String },
  link: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Product = models.Product || mongoose.model('Product', ProductSchema);
export default Product;
