
import forgotPasswordSchema from "../models/forgotPasswordSchema.js";
import User from "../models/userSchema.js"
import nodemailer from 'nodemailer';
import express from 'express';
const resetTokens = {};

export const forgotPassword=(req, res) => {
    const { email } = req.body;
  
    // Find user by email (replace this with a database query)
    const user = User.find((u) => u.email === email);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    const resetToken = generateToken();
    resetTokens[email] = resetToken;
  
    // Send the reset link to the user's email (replace this with your email sending logic)
    const transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: 'masouma.rasouli@yahoo.com',
        pass: 'MasRas@2021',
      },
    });
  
    const mailOptions = {
      from: 'masouma.rasouli@yahoo.com',
      to: email,
      subject: 'Password Reset Link',
      text: `Click the following link to reset your password: http://localhost:5500/reset-password/${resetToken}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending reset email' });
      }
  
      res.json({ message: 'Reset email sent successfully' });
    });
  };
  
  // Endpoint to handle password reset
  app.post('/reset-password', (req, res) => {
    const { email, token, newPassword } = req.body;
  
    // Check if the token is valid
    if (resetTokens[email] !== token) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
  
    // Update the user's password (replace this with your database update logic)
    const user = User.find((u) => u.email === email);
    user.password = newPassword;
  
    // Remove the used reset token
    delete resetTokens[email];
  
    res.json({ message: 'Password reset successful' });
  });