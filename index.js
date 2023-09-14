import express, { response } from "express";
import connectToDB from "./config/mongoConnection.js";

const app = express();
connectToDB();

app.get("/", (req, res) => res.send('Server started on port 5500.'));

const PORT = 5500;

app.listen(PORT, () => console.log("Server started on port 5500"));
