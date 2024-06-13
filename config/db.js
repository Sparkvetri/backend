import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vetrivel:Vsehta9698@cluster0.qbsrics.mongodb.net/food-del').then(()=>console.log("DB connected"));

}