import express from 'express';
import { uploadImages, getMemberImage,  getAllUploadedImages } from "../controllers/imageController.js";

const router = express.Router();

router.get("/alluploadedimages", getAllUploadedImages); 
router.post("/upload", uploadImages); 

router.get("/members/:filename", getMemberImage); 

export default router;
