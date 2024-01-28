import express from 'express';
import { uploadImages, getMemberImage,  getAllUploadedImages, getAllImages, approveUpload, denyUpload } from "../controllers/imageController.js";

const router = express.Router();

router.get("/alluploadedimages/:status", getAllUploadedImages); 
router.post("/upload", uploadImages); 
router.get("/allimages/:filename", getAllImages);
router.get("/members/:filename", getMemberImage); 
router.patch("/approve/:id", approveUpload);
router.delete("/deny/:id", denyUpload)

export default router;
