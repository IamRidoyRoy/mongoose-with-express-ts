import { NextFunction, Request, Response } from "express";
import { CreateUserToDB, getUsersFromDB } from "./user.service";


export const createUser = async (
    req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await CreateUserToDB(data);
    res.status(200).json({
        status: 'success',
        data: user,
    })
}

// to get user 
export const getUsers = async (
    req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status: 'success',
        data: user,
    })
}