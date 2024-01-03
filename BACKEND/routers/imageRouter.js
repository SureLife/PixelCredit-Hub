import express from 'express';
import { uploadImages, getImage } from "../controllers/imageController";

const router = express.Router();

router.post("/", uploadImages); 
router.get("/:filename", getImage); 

export default router;
