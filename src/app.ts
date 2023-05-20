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


    // 2. Create a Schema corresponding to the document interface.



    // 3. Create a Model.

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



// Pattern MVC ,Moduler

/*
Interface -> interface.ts
Schema, Model -> model.ts


route -> route 
route function -> controller.ts
database query -> service.ts

*/