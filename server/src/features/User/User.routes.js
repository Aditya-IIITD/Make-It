import express from "express";
import UserController from "./User.controller.js";
const userRouter = express.Router();

const usercontrol = new UserController();

userRouter.post("/signup", (req, res) => {
  usercontrol.signUp(req, res);
});

userRouter.post("/signin", (req, res) => {
  usercontrol.signIn(req, res);
});

userRouter.post("/signout", (req, res) => {
  usercontrol.signOut(req, res);
});
export default userRouter;
