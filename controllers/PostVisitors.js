import VisitorModel from "../models/Visitors.js";

const PostVisitors = async (req, res) => {
  try {
    let visitor = await VisitorModel.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.status(200).send("Count incremented");
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostVisitors;
