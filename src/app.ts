import express, { Application, NextFunction, Request, Response, json } from "express";
import cors from 'cors';
import { Schema, model } from "mongoose";


const app: Application = express()

// using cors 
app.use(cors());


// parse data 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // Inserting a test data into mongoDB
    // Step 1 : interface
    // Step 2 : Schema
    // Step 3 : model
    // Step 4 : Database Query


    // 1. Create a interface
    interface IUser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth: string;
        gender: 'male' | 'Female';
        email?: string;
        contactNo: string;
        emergencyContact: string;
        presentAddress: string;
        permanentAddress: string;
    };

    // 2. Create a Schema corresponding to the document interface.
    const userSchema = new Schema<IUser>({

        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true,
        },
        email: {
            type: String,

        },
        contactNo: {
            type: String,
            required: true,
        },
        emergencyContact: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        }
    });


    // 3. Create a Model.
    const User = model<IUser>('User', userSchema);

    const CreateUserToDB = async () => {
        const user = new User({
            id: '779',
            role: 'student3',
            password: '67777758',
            name: {

                firstName: 'Ridoy',
                middleName: 'Roy',
                lastName: 'Rohid',
            },
            dateOfBirth: '1.2.43',
            gender: 'Male',
            email: 'abc@gmail.com',
            contactNo: '9845640323523',
            emergencyContact: '6435678544365',
            presentAddress: 'Dhaka Bangladesh',
            permanentAddress: 'Barisal',

        });
        await user.save();
        console.log('A new User has been created Successfully!')
    }

    CreateUserToDB();


})

export default app;