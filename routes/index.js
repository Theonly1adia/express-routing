import express from "express";
import usersRouter from "./users.js";

const router = express.Router();

router.use("/users", usersRouter);

router.get("/", (req, res) => {
    res.send("Hello from the main router!");
});

router.get("/about", (req, res) => {
    res.send("About Us.");
});

router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});

export default router;