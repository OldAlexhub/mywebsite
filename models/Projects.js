import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
  data: { type: Date, default: new Date().toLocaleDateString() },
  by: String,
  img: String,
  title: String,
  overView: String,
  linkOne: String,
  linkTwo: String,
});
const ProjectModel = mongoose.model("projects", ProjectsSchema);

export default ProjectModel;
