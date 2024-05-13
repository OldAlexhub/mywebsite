import VisitorModel from "../models/Visitors.js";

const GetVisitors = async (req, res) => {
  try {
    let visitor = await VisitorModel.findOne({});
    res.json(visitor ? visitor.count : 0);
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default GetVisitors;
