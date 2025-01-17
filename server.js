import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { validateTest } from "./middleware/validationMiddleware.js";

//routers
import jobRouter from './routes/jobRouter.js'

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/v1/test",
    validateTest,
    (req, res) => {
        const { name } = req.body;
        res.json({ message: `Hello ${name}` });
    })

// app.post("/", (req, res) => {
//     console.log(req);
//     res.json({ message: "data received", data: req.body });
// });

//Traditional way of creating routes
// //Get all jobs
// app.get('/api/v1/jobs')
// //Create job
// app.post('/api/v1/jobs')
// //Get single job
// app.get('/api/v1/jobs/:id')
// //edit job 
// app.patch('/api/v1/jobs/:id')
// //delete job
// app.delete('/api/v1/jobs/:id')

//Modern way of creating routes
app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
    res.status(404).json({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ msg: err.message });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}

