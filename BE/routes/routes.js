import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
const routers = express.Router();

routers.post("/create", createUser);
routers.get("/get", getUsers);

export default routers;
