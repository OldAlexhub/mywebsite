import ProjectModel from "../models/Projects.js";

const ShowId = async (req, res) => {
  try {
    const { projectId } = req.params;

    const show = await ProjectModel.findOne({ _id: projectId });

    if (!show) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Data", show });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export default ShowId;
