import express from 'express';
import { uploadImages, getMemberImage,  getAllUploadedImages, getAllImages, approveUpload, denyUpload, getSearchedImages } from "../controllers/imageController.js";

const router = express.Router();

router.get("/alluploadedimages/:status", getAllUploadedImages); 
router.post("/upload", uploadImages); 
router.get("/allimages/:filename", getAllImages);
router.get("/members/:filename", getMemberImage); 
router.patch("/approve/:id", approveUpload);
router.delete("/deny/:id", denyUpload)

router.get("/alluploadedimages/approved/:tag", getSearchedImages); 

export default router;
