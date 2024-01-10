import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
 
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
    });
  

    if (foundUser) {
     
      const check = await bcrypt.compare(req.body.password, foundUser.password);

      if (check) {

        const token = jwt.sign(
          {_id: foundUser._id, email: foundUser.email},
          process.env.SECRET_KEY,
          {expiresIn: "1y"}
        );
        console.log(token);

        
        res.header("token", token).send({success:true, data: foundUser});
        
      } else {
        res.status(401).send({success:false, message:"password doesn't match!"});
   
      }

    } else {
    
      res.send({success:false, message:"Make sure your email is correct!"});
     
    }
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  console.log(req.body);
  try {
   
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);

    const newUser = await User.create({...req.body, password: hashedPassword});

    res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(203).send(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  
  try {
    const userId = req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId);
    res.send(deleteUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    
    const allUsers = await User.find(); 
    res.send(allUsers); 
  } catch (err) {
   
    next(err);
  }
};

export const getUserByUsername = async (req, res, next) => {
  try {
    const username = req.params.username;

    // Fetch user by username from the database
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const userId = foundUser._id;
    const userById = await User.findOne({ _id: userId });

    if (!userById) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    
    res.status(200).json({ success: true, data: foundUser });
  } catch (error) {
    next(error);
  }
};
