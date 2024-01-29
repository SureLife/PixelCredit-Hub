import { Schema, model } from "mongoose";
import User from "./userSchema.js";

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
  tags: [{ type: String }],
  categories: [{ type: String }], //add validator so atleast one categgories is there.
  
});

const Upload = model("Upload", uploadSchema);

export default Upload;




/* categories: {
  type: [String],
  validate: {
    validator: function (v) {
      return v && v.length > 0;
    },
    message: "At least one category is required."
  },
  required: true
}, */



/* likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
      // Add any additional fields related to like such as date/time if needed
    }
  ],
  publisher: { type: Schema.Types.ObjectId, ref: 'User' } // Reference to User model for publisher */





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
