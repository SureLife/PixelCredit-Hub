import express from 'express';
import { uploadImages, getImage } from "../controllers/imageController.js";

const router = express.Router();

router.post("/upload", uploadImages); 
router.get("/:filename", getImage); 

export default router;
