import mongoose from "mongoose";
const ketnoi = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://theanh098:ggombathuong@blog.qrvcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
export default ketnoi;
