import VisitorModel from "../models/Visitors.js";

const PostVisitors = async (req, res) => {
  try {
    await VisitorModel.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.send("Count incremented");
  } catch (error) {
    res.status(500).send("Failed to increment count");
  }
};
export default PostVisitors;
