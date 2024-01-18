import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  basicInfo: {
    birthDate: { type: Number, required: true },
    birthMonth: { type: Number, required: true },
    birthYear: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
  },
  pixelAddress: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function (value) {
        const existingUser = await this.constructor.findOne({
          pixelAddress: value,
        });
        return !existingUser;
      },
      message: "Pixel address is already in use.",
    },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  profileImage: {
    filename: String,
    data: Buffer,
  },
  profileImageUrl:{ type: String},//createOne here

  uploads: [{ type: Schema.Types.ObjectId, ref: "Upload" }],
  downloads: [{ type: Schema.Types.ObjectId, ref: "Download" }],
  images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
  recoveryEmail: { type: String }, // You might want to add validations for email format
  mobileNumber: { type: String },
  termsAndConditionsAccepted: { type: Boolean, required: true },
});

 
const User = model("User", userSchema);

export default User;
