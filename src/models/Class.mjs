import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    grade: { type: String, required: true },
    subject: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    capacity: { type: Number, default: 30 },
    schedule: [
      {
        day: String,
        startTime: String,
        endTime: String,
      },
    ],
    location: String,
    status: { type: String, enum: ["active", "archived"], default: "active" },
  },
  { timestamps: true }
);

const ClassModel = mongoose.model("Class", classSchema);
export default ClassModel;
