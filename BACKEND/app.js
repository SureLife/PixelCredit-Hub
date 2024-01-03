// import stuff you need
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import fileUpload from "express-fileupload";
import {Readable} from "stream";

import usersRouter from "./routers/usersRouter.js";
import adminRouter from "./routers/adminRouter.js"

// creating express server
const app = express();

// middleware
// middleware to parse any incoming json data
app.use(express.json());
app.use(fileUpload());

// connect to MongoDB through mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/PixelCreditHub")
  .then(() => console.log("We connected to DB 😉"))
  .catch((err) => console.log(err));

// middleware morgan
app.use(morgan("tiny"));

// cors middleware
app.use(cors({origin:"http://localhost:5173",exposedHeaders:["token"]}))


// localhost:8000/api/users
app.use("/users", usersRouter);
app.use('/admin', adminRouter);
//create more routes as required


//this code to upload images from client to server and storing it to database
app.post("/images", async (req,res)=>{
    try {
        const images = req.files.images.map(async (image) => {
          const img = new Image({
            // Assuming you have access to user_id and other necessary details
            user_id: req.user._id, // Replace with actual user ID
            image_url: `your_image_base_url/${Date.now()}_${image.name}`, // Construct your image URL
            status: "pending",
            data: image.data, // Assuming you want to save image data
            // Other fields as needed
          });
          return await img.save(); // Await saving each image
        });
    
        await Promise.all(images);
        res.send("All images uploaded successfully!");
      } catch (error) {
        console.error(error);
        res.status(500).send("Error uploading images");
      }
    });


//this code is serving images back to client
app.get("/images/:filename",async (req,res)=>{
  try {
    const image = await Image.findOne({filename:req.params.filename})
    if (image){
      const readStream = Readable.from(image.data)
      readStream.pipe(res)
    }
    
  } catch (error) {
    
  }
})

 


// middleware to handle errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});


// the server should listen on port 5500
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running on port 🎉", PORT);
});
