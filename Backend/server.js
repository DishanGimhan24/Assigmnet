import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";



dotenv.config();

const app = express();

// Importing routes
import cartRoute from "./routes/cart.js"
import Cart from "./models/Cart.js";


const PORT = process.env.PORT || 8070;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established successfully!"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Routes
app.use("/api/carts", cartRoute);


// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});



