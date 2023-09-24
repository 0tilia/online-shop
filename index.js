import express, { response } from "express";
import connectToDB from "./config/mongoConnection.js";
import serviceRouter from "./api/service.js";

const app = express();

connectToDB();

app.get("/", (req, res) => res.send('Server started on port 5500.'));

app.use("/api/services", serviceRouter); 

// This is a way to apply middleware in Express. Middleware are functions that have access to the request (req) and response (res) objects, and they can perform operations on them before passing them on to subsequent middleware or route handlers.
// This is a router that's been defined elsewhere in your application, using express.Router(). It's a way to encapsulate a group of route handlers under a common path prefix. 

const PORT = 5500;

app.listen(PORT, () => console.log("Server started on port 5500"));
