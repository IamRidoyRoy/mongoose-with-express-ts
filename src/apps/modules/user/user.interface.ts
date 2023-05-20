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