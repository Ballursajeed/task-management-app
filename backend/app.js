import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import express from "express";
import connectionDB from "./db/index.db.js";
import todoRouter from "./routes/todo.route.js"

const app = express();
const PORT = process.env.PORT || 8000

//middleware
const allowedOrigins = [
  'https://task-management-app-client-tau.vercel.app',
  // Add any other origins that should be allowed
];

// Configure CORS with specific origin(s)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.use(express.json())
connectionDB()

app.get("/",(req,res) => {
    res.send("Hello from index.js")
});

//app.use("/api/v1/users",userRouter)
app.use("/api",todoRouter)

app.listen(PORT, () => console.log("Server is running on PORT:",PORT));