import express from 'express';
import { uploadImages, getMemberImage } from "../controllers/imageController.js";

const router = express.Router();

router.post("/upload", uploadImages); 
router.get("/members/:filename", getMemberImage); 

export default router;
