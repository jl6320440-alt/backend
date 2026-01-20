import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  staffId: { type: String, unique: true, index: true },
  subjects: [String],
  qualification: { type: String },
  experience: { type: Number },
  department: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },
  salary: { type: Number },
  classes: [String],
  featured: { type: Boolean, default: false },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
