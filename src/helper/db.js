import mongoose from "mongoose"

let isDbConnected = false;

export const connectDb = async () => {
    try {
        if (!isDbConnected) {
            const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
                dbName: 'eazy_task',
            });
            
            // Set the flag to true once the connection is established
            isDbConnected = true;
        }
    } catch (error) {
        // Handle connection error
        console.error("Error connecting to MongoDB:", error);
    }
}
