import User from "./user.model";

export const CreateUserToDB = async () => {
    const user = await new User({
        id: '783',
        role: 'student67',
        password: 'fsdgdsfg',
        name: {

            firstName: 'Test 55',
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
    return user;
}