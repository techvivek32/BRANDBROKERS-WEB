import mongoose, { Schema, models } from 'mongoose';

const CaseStudySchema = new Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  description: { type: String, required: true },
  strategy: { type: String },
  results: { type: String },
  images: [{ type: String }],
  stats: [{
    label: { type: String },
    value: { type: String },
  }],
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const CaseStudy = models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
export default CaseStudy;
