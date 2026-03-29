import mongose from "mongoose";

export const connectDB= async() => {
    try{
        const conn = await mongose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log("Error in connected to MongoDB",error);
        process.exit(1); // 1 means failure
    }
}