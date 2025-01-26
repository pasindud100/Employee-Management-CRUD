import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dbConn from "./utils/db.js";
import routers from "./routes/routes.js";

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 6000;
//Db connection
dbConn();


app.use('/api',routers);

app.listen(port, () => {
  console.log(`Server is running on port`);
});
