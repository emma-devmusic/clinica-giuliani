import { ReactElement } from "react";

export interface Service {
    icon: ReactElement;
    name: string;
    link: string;
    specialist: string[];
    paragraph: string;
    section?: ReactElement;
    facilities?: string;
    technology?: string;
}

export interface Doctor {
    id: number;
    lastName: string;
    firstName: string;
    tuition: string;
    area: string;
    publicServiceMode: string;
    schedules: string;
    days: string;
    description: string;
}

