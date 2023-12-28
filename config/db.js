import mongoose from "mongoose";
import colors from 'colors';

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_Local);
        console.log(`connected ${mongoose.connection.host} server`.bgGreen);
    } catch (error) {
        console.log(error);
    }
}
export default connectDb;