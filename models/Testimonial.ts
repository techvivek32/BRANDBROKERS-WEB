import mongoose, { Schema, models } from 'mongoose';

const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  review: { type: String, required: true },
  image: { type: String },
  rating: { type: Number, default: 5 },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Testimonial = models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
export default Testimonial;
