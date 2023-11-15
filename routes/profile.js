import express from "express";
import User from "../models/user.js";
import { isLoggedIn } from "./auth.js";
export const profileRouter = express.Router();



profileRouter.get(("/"), isLoggedIn, (req,res) => {
    // console.log(req.user.username);

    res.render("profile/index")
})




