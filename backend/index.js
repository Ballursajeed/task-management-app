import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import express from "express";
import connectionDB from "./db/index.db.js";
import todoRouter from "./routes/todo.route.js"

const app = express();
const PORT = process.env.PORT || 8000

//middleware
app.use(cors(
 {
   origin: ["https://task-management-app-56id.vercel.app/"],
   methods: ["POST", "GET","PUT","DELETE"],
   credentials: true
 }
));
app.use(express.json())
connectionDB()


app.get("/",(req,res) => {
    res.send("Hello from index.js")
});

//app.use("/api/v1/users",userRouter)
app.use("/api",todoRouter)

app.listen(PORT, () => console.log("Server is running on PORT:",PORT));