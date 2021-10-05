import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import patientRoutes from "./routes/patient.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// every route inside postRoutes will start with /patient
app.use("/patient", patientRoutes);
// every route inside userRoutes will start with /user
app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.send("Hello to Dio-Doc API");
});

//connecting to database and running it (Mongodb)
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);