import { NextFunction, Request, Response } from "express";
import { CreateUserToDB } from "./user.service";


export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const user = await CreateUserToDB();
    res.status(200).json({
        status: 'success',
        data: user,
    })
}