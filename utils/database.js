import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log("mOngo is connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "blogmash",
            useNeWUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error){
        console.log(error);
    }
}