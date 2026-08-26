import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, trim: true, default: "No Subject" },   // ← added
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }  // adds createdAt + updatedAt automatically
);

export default mongoose.model("Contact", ContactSchema);
