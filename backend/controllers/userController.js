import { UserModel } from "../models/UserSchema.js";

export const registerUser = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "no data" });
  }
  //adding role to req.body if user entry is first in the collection
  const admin = await UserModel.countDocuments(0);
  req.body.role = admin === 0 ? "admin" : "user";
  console.log(req.body);
  try {
    //create new user
    const newUser = await UserModel.create(req.body);
    res.status(200).json({ message: "New user created", newUser });
  } catch (err) {
    console.log(err);
  }
};
