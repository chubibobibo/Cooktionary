import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

//parsing json
app.use(express.json);

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
