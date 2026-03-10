import mongoose, { Schema, models } from 'mongoose';

const ClientSchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  website: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Client = models.Client || mongoose.model('Client', ClientSchema);
export default Client;
