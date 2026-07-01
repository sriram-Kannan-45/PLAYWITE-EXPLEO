import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

export interface RegisterUser {
    type: string;
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}

export function readLoginData(): RegisterUser[] {

    const filePath = path.resolve(__dirname, '../test-data/data.csv');

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as RegisterUser[];
}