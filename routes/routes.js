import { Router } from "express";
import Post from "../controllers/Post.js";
import Show from "../controllers/Show.js";
import ShowId from "../controllers/ShowId.js";
import PostVisitors from "../controllers/PostVisitors.js";
import GetVisitors from "../controllers/GetVisitors.js";

const router = Router();

router.post("/post", Post);
router.get("/get", Show);
router.get("/gets/:projectId", ShowId);

//counter
router.post("/counter", PostVisitors);
router.get("/getvisitors", GetVisitors);

export default router;
