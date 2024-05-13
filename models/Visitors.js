import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});
const VisitorModel = mongoose.model("visitors", VisitorSchema);

export default VisitorModel;
