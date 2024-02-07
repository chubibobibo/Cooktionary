import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

//route imports
import userRoute from "./routes/userRoute.js";

//parsing json
app.use(express.json());

//connecting to database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

//user routes
app.use("/api/user", userRoute);

//middleware for not found pages
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

//middleware for express errors
app.use((err, req, res, next) => {
  const status = err.status || 404;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVING PORT ${process.env.PORT}`);
});
