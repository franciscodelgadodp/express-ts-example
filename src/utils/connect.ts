import mongoose from "mongoose";
import config from "config";

const connect = () => {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Could no tconnect to DB");
      process.exit(1);
    });
};

export default connect;
