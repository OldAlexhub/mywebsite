import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectToDb from "./db/connectToDb.js";
import router from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "32mb", extended: true }));
app.use(express.urlencoded({ limit: "32mb", extended: true }));
connectToDb();
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
