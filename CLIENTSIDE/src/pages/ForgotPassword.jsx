 import React, { useState } from 'react';

const ForgotPassword = ({ onResetPassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Make an API request to your backend to update the password
      const response = await fetch('http://localhost:5500/resetPassword/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: 'token_from_url', // You need to extract the token from the URL or another source
          newPassword: password,
        }),
      });

      const result = await response.json();

      if (result.message === 'Password reset successful') {
        alert('Password reset successfully!');
        // You may redirect the user to the login page or perform any other action
      } else {
        alert('Password reset failed. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your new password*"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password*"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;



