import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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




// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
}


export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}


