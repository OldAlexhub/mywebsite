import mongoose from "mongoose";

const connectToDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(`failed to connect to mongoDB`);
  }
};
export default connectToDb;
