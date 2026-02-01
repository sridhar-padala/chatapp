import express from "express";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

//middleware
app.use(express.json());// parses incoming JSON req bodies and makes them available as req.body


//health route
app.get("/health",(req,res)=>{
    res.json({
        status : "OK" ,
        Message : "Server is running"
    })
})

app.use("/api/auth",authRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

export default app;

