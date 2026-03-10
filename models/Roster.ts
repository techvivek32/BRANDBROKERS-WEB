import mongoose, { Schema, models } from 'mongoose';

const RosterSchema = new Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true },
  followers: { type: String, required: true },
  category: { type: String, required: true },
  bio: { type: String },
  image: { type: String, required: true },
  socialLinks: {
    instagram: { type: String },
    tiktok: { type: String },
    youtube: { type: String },
    twitter: { type: String },
  },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Roster = models.Roster || mongoose.model('Roster', RosterSchema);
export default Roster;
