import MemberImage from "../models/memberImageSchema.js";
import { Readable } from "stream";

//import fileUpload from "express-fileupload";
import Upload from "../models/uploadSchema.js"
 


export const uploadImages = async (req, res, next) => {
  try {
    console.log("hello");

    // Check if files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // Assuming "foo" is the field name in your form
    const uploadedFile = req.files.foo;//try to make it array and console to check if it can allows to upload multiple files

    // Accessing file properties
    console.log("File Name:", uploadedFile.name);
    console.log("File Size:", uploadedFile.size);

    // Save the file details to the database (replace this with your actual database logic)
    const image = new Upload({
      fileName: uploadedFile.name,
      fileSize: uploadedFile.size,
      data:uploadedFile.data,
    });

    await image.save();

    res.send("File uploaded successfully");
  } catch (error) {
    console.error("Error in uploadImages controller:", error);
    next(error);
  }
};



 

//this code is serving images back to client
export const getMemberImage = async (req, res, next) => {
  try {
    const image = await MemberImage.findOne({ filename: req.params.filename });
    if (image) {
      const readStream = Readable.from(image.data);
      readStream.pipe(res);
    }
  } catch (error) {
    res.status(500).send("Error fetching image");
    next(error);
  }
};


export const getAllUploadedImages = async (req, res, next) => {
  try {
    res.send("hello i m from backend");
  } catch (error) {
    console.log("not working")
  }
}




//this code to upload images from client to server and storing it to database
/* export const uploadImages = async (req, res, next) => {
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
}; */
