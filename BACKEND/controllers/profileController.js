import  User,{  ProfileImage } from '../models/userSchema.js';

export const getUserProfileImage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('profileImage');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.profileImage) {
      return res.status(404).json({ message: 'Profile image not found' });
    }

    const profileImage = user.profileImage;
    res.status(200).json({ imageUrl: profileImage.image_url });
  } catch (error) {
    console.error('Error fetching user profile image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateProfileImage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.profileImage) {
      // If a profile image already exists, update its properties
      const existingProfileImage = await ProfileImage.findById(user.profileImage);
      existingProfileImage.image_url = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      existingProfileImage.uploaded_at = new Date();

      // Save the updated profile image
      await existingProfileImage.save();
    } else {
      // If the user doesn't have a profile image, create a new one
      const newProfileImage = new ProfileImage({
        user_id: user._id,
        image_url: `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        uploaded_at: new Date(),
      });

      // Save the new profile image
      await newProfileImage.save();

      // Associate the profile image with the user
      user.profileImage = newProfileImage._id;
      await user.save();
    }

    res.status(200).json({ message: 'Profile image updated successfully' });
  } catch (error) {
    console.error('Error updating profile image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
