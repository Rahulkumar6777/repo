// import packages
import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from helmet
import morgan from morgan


// load environment variable
import { configDotenv } from "dotenv";
configDotenv();


// Database connection
import { dbConnect } from "./src/configs/dbconnect.js";
dbConnect();


// import Routes Path
import dataRoutes from './src/Routes/data.Routes.js'


// initilize app
const app = express();


// ----------------------------------
//   Security & Utility Middlewares
// ----------------------------------

// Parse cookies
app.use(cookieParser());


// Prevent HTTP Parameter Pollution
app.use(hpp());


// Secure HTTP headers
app.use(helmet());


// Logging middleware 
app.use(morgan("combined"));

// Enable CORS
app.use(cors("*"));


// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ---------
//  Routes
// ---------
app.use('/api/v1/data', dataRoutes)


// -----------------
//   Start Server
// -----------------
app.listen(3000, () => {
    console.log("server is runing on localhost:3000")
})