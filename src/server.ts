import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./config/db";

const app = express();

dotenv.config();

app.use(cors());

const port = process.env.PORT;

connectToDB();

app.listen(port, () => console.log("Listening on port", port));
