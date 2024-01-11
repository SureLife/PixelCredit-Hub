import Member from "../models/memberSchema.js";

export const member = async (req, res, next) => {
  try {
    // Fetch allMembers data from the MongoDB collection named 'members'
    const allMembers = await Member.find({});
    if (allMembers) {
      res.status(200).json(allMembers);
      console.log(allMembers);
    } else {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    next(error);
  }
};
