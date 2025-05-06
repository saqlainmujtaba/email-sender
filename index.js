import express from "express";
import api from "./api/api.js";

const app = express();
app.use(express.json());

// this api will work to send email by using nodemailer

app.use("/", api);

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
