import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

export interface registerusers{
    firstName : string,
    lastName : string,
    email : string,
    phone : string,
    password : string,
    repetpassword : string

}

export function readCSV():registerusers[]
{
    const filepath = path.resolve(__dirname,'../test-data/dataCSV.csv')
    const fileContent = fs.readFileSync(filepath , 'utf-8')

    return parse(fileContent , {

        columns : true , skipEmptyLines : true , trim : true

    }) as registerusers[]
}