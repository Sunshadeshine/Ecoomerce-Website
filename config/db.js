import mongoose from "mongoose";
import colors from "colors";
const connectDB = async ()=>{
try { 
    const conn = await  mongoose.connect(process.env.Mongo_url);
    console.log(`Connected to Database successfully ${conn.connection.host}`.bgMagenta.white);
    
} catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white)
}
}
export default connectDB;
