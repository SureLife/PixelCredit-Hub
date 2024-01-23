import { Schema, model } from "mongoose";

const uploadSchema = new Schema({
  fileName: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  fileSize: { type: Number, required: true },
   
});

const Upload = model("Upload", uploadSchema);

export default Upload;
