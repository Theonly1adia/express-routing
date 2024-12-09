import express from "express";
import mainRoutes from "./routes/index.js"

const app = express();

app.use(express.json());

app.use("/", mainRoutes);

app.listen(3003, () => {
    console.log("Server started on http://localhost:3003");
})