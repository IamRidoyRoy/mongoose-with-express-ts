import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


// / Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({

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


userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>('User', userSchema);
export default User;


// Instance method -> Instance er method
// class -> instance + method -> instance method
