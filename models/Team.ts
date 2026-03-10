import mongoose, { Schema, models } from 'mongoose';

const TeamSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String },
  image: { type: String, required: true },
  bio: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Team = models.Team || mongoose.model('Team', TeamSchema);
export default Team;
