import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "../config/database.js";
import router from "../routes/myroutes.js";


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/hemal", router);

dbConnect();

app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});

