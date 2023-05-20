import { IUser } from "./user.interface";
import User from "./user.model";

export const CreateUserToDB =
    async (payload: IUser): Promise<IUser> => {
        const user = new User(payload)
        await user.save();
        return user;
    }

// Get user 
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = User.find();
    return users;
}


