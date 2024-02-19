import ProjectModel from "../models/Projects.js";

const Post = async (req, res) => {
  try {
    const { by, img, title, overView, linkOne, linkTwo } = req.body;

    const newPost = await ProjectModel({
      by,
      img,
      title,
      overView,
      linkOne,
      linkTwo,
    });
    await newPost.save();

    res.status(201).json({ message: `Project Submitted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Post;
