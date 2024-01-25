import express from 'express';
import { uploadImages, getMemberImage,  getAllUploadedImages, getAllImages } from "../controllers/imageController.js";

const router = express.Router();

router.get("/alluploadedimages", getAllUploadedImages); 
router.post("/upload", uploadImages); 
router.post("/allimages/:filename", getAllImages);
router.get("/members/:filename", getMemberImage); 

export default router;
