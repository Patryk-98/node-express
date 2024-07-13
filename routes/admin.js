import express from "express";
import UserController from "../controllers/userController.js";

const adminRouter = express.Router();

const userController = new UserController();

adminRouter.get("/", async (req, res) => {
  const username = "Patryk Fydrych"; // this get from database
  if (username === null) {
    res.status(404).send("User not found");
  }
  res.render("home", { username });
});

adminRouter.get("/list/users", async (req, res) => {
  const users = await userController.getAllUsers();
  res.render("list-users", { users });
});

adminRouter.get("/user/:id", async (req, res) => {
  const user = await userController.getUserById(req.params.id * 1);
  res.render("detail-user", {
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  });
});

export default adminRouter;
