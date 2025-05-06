import { Router } from "express";
import { sendMail } from "../utils/utils.js";

const router = Router();

router.route("/").get((req,res)=>{
    // res.send("Hello World");
    res.status(200).json({
        success: true,
        message: "Welcome to the API",
      });
})

router.route("/send").post((req,res)=>{
    const { email, message ,subject} = req.body;
      sendMail(email, message,subject);
      res.status(200).json({
        success: true,
        message: "message send",
        email,
        subject
      });
})

export default router;