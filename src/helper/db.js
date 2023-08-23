import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'eazy_task',
        });

        console.log("DB connect");
        // console.log(connection);

    } catch (error) {
        console.log("DB connection failed");
        console.log(error);
    }
}