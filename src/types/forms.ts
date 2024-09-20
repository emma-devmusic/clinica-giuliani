export interface NewUserInputsForm {
    name: string;
    lastname: string;
    dni: number;
    email: string;
    phone: number;
    role: 'employee' | 'admin';
    password: string;
}