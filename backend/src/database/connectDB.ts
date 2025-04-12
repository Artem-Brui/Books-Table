import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connection.on("error", (err) =>
  console.log("DB connection error!", err)
);
mongoose.connection.on("connected", () => console.log("DB connected..."));
mongoose.connection.on("close", () => console.log("DB connection closed!"));

const connectDB = async (url: string | undefined) => {
  if (!url) {
    console.log('DB Link for connection not found...');
    return;
  }

  try {
    mongoose.connect(url);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
