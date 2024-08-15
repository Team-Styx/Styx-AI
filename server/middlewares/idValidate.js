import { Types } from "mongoose";

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  // Validate the ID
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid model ID format.",
    });
  }

  // If valid, proceed to the next middleware or route handler
  next();
};

export default validateObjectId;
