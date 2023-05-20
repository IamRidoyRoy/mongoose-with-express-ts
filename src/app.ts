import express, { Application, NextFunction, Request, Response, json } from "express";
import cors from 'cors';
import { Schema, model } from "mongoose";

// Application Route 
import userRoutes from './apps/modules/user/user.route'

const app: Application = express()

// using cors 
app.use(cors());

// parse data 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// All routes 
app.use('/api/v1/user', userRoutes)

export default app;
