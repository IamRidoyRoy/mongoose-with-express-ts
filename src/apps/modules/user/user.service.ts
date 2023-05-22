import { IUser } from "./user.interface";
import User from "./user.model";

export const CreateUserToDB =
    async (payload: IUser): Promise<IUser> => {
        const user = new User(payload)
        await user.save();
        console.log(user.fullName())
        return user;
    }

// Get user 
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = User.find();
    return users;
}

// Get one userid from DB 
export const getUserIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = User.findOne({ id: payload },
        // if we want to filter some specific data 
        {

            name: 1, email: 1, contactNo: 1
        });

    return user;

}

// Get admin user data 
export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;

}

// Class -> Attach Method -> Directly call using class
// user = mew User
// user. instance method
// Users.getAdminUsers 