import express from "express";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
import { clerkMiddleware } from '@clerk/express'
import { errorHandler } from "./middleware/errorHandler";

const app = express();

//middleware
app.use(express.json());// parses incoming JSON req bodies and makes them available as req.body

//clerk middleware
app.use(clerkMiddleware());

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

//error handlers must come after all the routes and other middlewares so they can catch
//errors passed with next(err) or thrown inside async handlers.
app.use(errorHandler);

export default app;

