import mongoose from "mongoose";
export async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!,);
        const Connection = mongoose.connection;
        Connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        Connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
            process.exit();
        });


    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}