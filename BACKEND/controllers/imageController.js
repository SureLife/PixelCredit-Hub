import Image from "../models/imageSchema.js";
import { Readable } from "stream";

//this code to upload images from client to server and storing it to database
export const uploadImages = async (req, res, next) => {
  try {
    const images = req.files.images.map(async (image) => {
      const img = new Image({
        user_id: req.user._id,
        image_url: `your_image_base_url/${Date.now()}_${image.name}`,
        status: "pending",
        data: image.data,
      });
      return await img.save();
    });

    await Promise.all(images);
    res.send("All images uploaded successfully!");
  } catch (error) {
    res.status(500).send("Error uploading images");
    next(error);
  }
};

//this code is serving images back to client
export const getImage = async (req, res, next) => {
  try {
    const image = await Image.findOne({ filename: req.params.filename });
    if (image) {
      const readStream = Readable.from(image.data);
      readStream.pipe(res);
    }
  } catch (error) {
    res.status(500).send("Error fetching image");
    next(error);
  }
};
