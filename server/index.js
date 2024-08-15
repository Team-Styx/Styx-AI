import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import modelDetailRoutes from "./routes/modelDetailRoutes.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log("Error connecting to database: " + error.message);
  });

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/model", modelDetailRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
