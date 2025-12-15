import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${process.env.MONGODB_DATABASE_NAME}`)
        console.log("database Connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export {dbConnect}