import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
const routers = express.Router();

routers.post("/create", createUser);
routers.get("/get", getUsers);
routers.put("/update/:id", updateUser);

export default routers;
