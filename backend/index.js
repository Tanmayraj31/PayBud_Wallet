const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()
const connectDB  = require("./db");
const userRoutes = require("../backend/routes/userRoute")
const accountRoute = require("../backend/routes/accountRoute.js")
const port =3000;
const app = express();
app.use(express.json());
app.use(cors());





connectDB();


app.use("/api/v1", userRoutes);
app.use("/api/v1/account",accountRoute)


app.listen(port, ()=>{
    console.log("Server Running")
})