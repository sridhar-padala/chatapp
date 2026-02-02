import type { Request, Response, NextFunction } from "express";

export const errorHandler = 
(err : Error,_req : Request,res : Response,_next: NextFunction ) =>{
    console.log("Error: ",err.message);
    const statusCode  = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode).json({
        message : err.message || "Internal Server error",
        ...(process.env.NODE_ENV === "development" && {stack : err.stack}),
    });
    
}

//if status code is 200 and we still hit the error handler that means its an internal error
//so we set the status code as 500