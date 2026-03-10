import mongoose, { Schema, models } from 'mongoose';

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  icon: { type: String, required: true },
  image: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Service = models.Service || mongoose.model('Service', ServiceSchema);
export default Service;
