import { Schema, model } from 'mongoose';
import Image from './imageSchema.js';
import Upload from './uploadSchema.js';
import Download from './downloadSchema.js';
 

const profileImageSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  uploaded_at: {
    type: Date,
    default: Date.now,
  },
});



// User schema with references to Upload, Download, and Image
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  profileImage: { type: Schema.Types.ObjectId, ref: 'ProfileImage' },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  uploads: [{ type: Schema.Types.ObjectId, ref: 'Upload' }],
  downloads: [{ type: Schema.Types.ObjectId, ref: 'Download' }],
  images: [{ type: Schema.Types.ObjectId, ref: 'Image' }], // Reference to Image model
});
const ProfileImage = model('ProfileImage', profileImageSchema);
const User = model('User', userSchema);

export { ProfileImage};
export default User;
