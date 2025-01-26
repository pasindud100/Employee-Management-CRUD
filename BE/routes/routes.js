import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/userController.js";
const routers = express.Router();

routers.post("/create", createUser);
routers.get("/get", getUsers);
routers.put("/update/:id", updateUser);
routers.delete("/delete/:id", deleteUser);

export default routers;
