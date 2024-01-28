import { Schema, model } from "mongoose";

const uploadSchema = new Schema({
  fileName: { type: String, required: true },
  data: { type: Buffer, required: true },
  timestamp: { type: Date, default: Date.now },
  fileSize: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  imageURL: {type: String },
});

const Upload = model("Upload", uploadSchema);

export default Upload;

/* import { Schema, model } from "mongoose";

const uploadImageSchema = new Schema({
  fileName: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  fileSize: { type: Number, required: true },
});

const uploadSchema = new Schema({
  images: [uploadImageSchema], // Array of image objects
});

const Upload = model("Upload", uploadSchema);

export default Upload;
 */
