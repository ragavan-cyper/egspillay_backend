import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.mjs";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
mongoose
  .connect(
   process.env.MONGO_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("DB connection failed: ", err));
// ROUTES
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Connected on", PORT);
});
