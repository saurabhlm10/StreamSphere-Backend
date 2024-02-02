import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

export default connectToDB;
