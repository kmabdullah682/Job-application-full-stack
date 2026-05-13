import mongoose from "mongoose";


async function connectDB() {
    
    try {

        const db = await mongoose.connect(process.env.MONGODB_URL , { autoIndex: true });

        if (db.connection.readyState = 1) {
            console.log('Connected to Db');
        }

    } catch (error) {
        console.log("Database connection error : ", error);
    }

};


export { connectDB };