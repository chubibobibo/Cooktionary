import mongoose from "mongoose";
const { Schema } = mongoose;

//constants for enum values
import { role } from "../utils/constants.js";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(role),
    required: true,
  },
});

export const UserModel = mongoose.model("UserModel", UserSchema);
