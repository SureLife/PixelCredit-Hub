import {Schema, model} from "mongoose";
const memberImages = new Schema({
  filename: String,
  data:Buffer
});
const memberImage = model('Image', memberImages);
export default memberImage;