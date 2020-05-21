import {NextFunction, Request, Response} from "express";

export function apiErrorHandler(error:any, req: Request, res: Response, next: NextFunction) {
    console.error("API error handler triggered...", error);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal Server Error'});
}