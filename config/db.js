import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_Local);
        console.log(`connected ${mongoose.connection.host} server`);
    } catch (error) {
        console.log(error);
    }
}
export default connectDb;