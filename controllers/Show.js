import ProjectModel from "../models/Projects.js";

const Show = async (req, res) => {
  try {
    const show = await ProjectModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Show;
