import mongoose from "mongoose";

//connect to the mongodb Database

const connectDB = async() =>{
    mongoose.connection.on('connected', ()=>{
        console.log("Database is connected Successfully")
       
    })
    // console.log("MongoDB URL from env:", process.env.MONGODB_URL);
    // await mongoose.connect("mongodb+srv://mdkabirulhossainj:9hCQq6Ys9wr8vJtL@cluster0.20neyqw.mongodb.net/E-Learning");
    await mongoose.connect(`${process.env.MONGODB_URL}/E-Learning`);
    

}

export default connectDB