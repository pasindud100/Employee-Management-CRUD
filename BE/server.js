import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 6000;
//Db connection
const mongoDbUrl = process.env.MONGO_DB_URL;

mongoose
  .connect(mongoDbUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(port, () => {
  console.log(`Server is running on port`);
});
