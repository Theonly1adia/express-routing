import express from "express";
import data from "../data.json" assert { type: "json" };


const router = express.Router();

console.log(data)

router.get("/hello", (req, res) => {
    res.send("Hello users");
});

router.get("/" , (req,res) => {
    res.send("List of all users");
})
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});

router.use((req, res) => {
    res.status(404).send("Route not found");
});

export default router;

/* let users = data */