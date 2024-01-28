import { v4 as uuidv4 } from 'uuid';
import MemberImage from "../models/memberImageSchema.js";
import Upload from "../models/uploadSchema.js";
import { Readable } from "stream";

//import fileUpload from "express-fileupload";
 


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
    let timestamp = Date.now();
    const uniqueFilename = `${timestamp}-${uuidv4()}`; 
    

    // Save the file details to the database (replace this with your actual database logic)
    const image = new Upload({
      fileName: uniqueFilename,
      //fileName:uploadedFile.name,
      fileSize: uploadedFile.size,
      data:uploadedFile.data,
      imageURL: `http://localhost:5500/images/allimages/${uniqueFilename}`
    });

    await image.save();

    res.send("File uploaded successfully");
  } catch (error) {
    console.error("Error in uploadImages controller:", error);
    next(error);
  }
};



//this code is serving images back to client
export const getAllImages = async (req, res, next) => {
  console.log(req.params)
  console.log(req.params.filename)
  try {
    const image = await Upload.findOne({ fileName: req.params.filename });
    if (image) {
      const readStream = Readable.from(image.data);
      readStream.pipe(res);
    }else {
      res.status(404).send("Image not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching image");
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
  const status = req.params.status || "pending"
  try {
    const pendingUploads = await Upload.find({ status });
    if (pendingUploads) {
    res.json(pendingUploads);
    // console.log(pendingUploads);
    }
  } catch (error) {
    console.log("not working")
  }
}

// approveUpload in the database | Status: "approved";
export const approveUpload = async (req, res, next) =>{
  const uploadId = req.params.id;
  console.log(req.params);
  try {
    const upload = await Upload.findById(uploadId)

    if (!upload) {
      return res.status(404).json({ error: "Upload not found" });
    }

    upload.status = "approved";
    await upload.save();
    res.json(upload);
  } catch (err) {
    console.log("approv eUpload failed", err);
  }
}

export const denyUpload = async (req, res, next) => {
  const uploadId = req.params.id;

  try {
    const upload = await Upload.findById(uploadId)

    if (!upload) {
      return res.status(404).json({ error: "Upload not found" });
    }
    const deleteUser = await Upload.findByIdAndDelete(upload._id);
    res.json(upload);
  } catch (err) {
    console.log("deny upload failed", err);
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
