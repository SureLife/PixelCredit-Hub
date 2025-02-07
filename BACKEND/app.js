// import stuff you need
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import fileUpload from "express-fileupload";
import usersRouter from "./routers/usersRouter.js";
import adminRouter from "./routers/adminRouter.js";
import contactUsRouter from "./routers/contactUsRouter.js";
import memberRouter from "./routers/memberRouter.js";
import profileRouter from "./routers/profileRouter.js";
import imageRouter from "./routers/imageRouter.js";
import paymentRouter from "./routers/addPaymentRouter.js";
import forgotPasswordRouter from "./routers/forgotPasswordRouter.js";

// creating express server
const app = express();

// middleware
// middleware to parse any incoming json data
app.use(express.static("public")); // don't touch it plz! best regards, Masouma
app.use(express.json());
app.use(express.static("./views/dist"));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

// connect to MongoDB through mongoose
mongoose
   .connect("mongodb+srv://admin:r7j3Urtu25iXP9uf@cluster0.diwjxu8.mongodb.net/PixelCreditHub?retryWrites=true&w=majority")
   //.connect("mongodb://localhost:27017/PixelCreditHub")
  
  // .connect("mongodb+srv://admin:r7j3Urtu25iXP9uf@cluster0.diwjxu8.mongodb.net/PixelCreditHub")
  .then(() => console.log("We connected to DB 😉"))
  .catch((err) => console.log(err));

// middleware morgan
app.use(morgan("tiny"));

// cors middleware
const origin =
  process.env.NODE_ENV === "production"
    ? "http://localhost:4173"
    : "http://localhost:5173";

app.use(cors({ origin: "*", exposedHeaders: ["token"] }));

// app.use(cors({ origin: "http://127.0.0.1:5173", exposedHeaders: ["token"] }));

// localhost:5500/users
app.get("/", (req, res) => {res.sendFile("views/dist/index.html", { root: "." });});
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/submitContactForm", contactUsRouter);
app.use("/members", memberRouter);
app.use("/profile", profileRouter);
app.use("/images", imageRouter);
app.use("/savePayment", paymentRouter);
app.use("/forgotPassword", forgotPasswordRouter);

//create more routes as required

// middleware to handle errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});

// the server should listen on port 5500
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running on port 🎉", PORT);
});
