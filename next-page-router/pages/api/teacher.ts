import { teachers } from "../../data/data.json";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    switch (req.method) {
        case 'GET':
            res.status(200).json(teachers);
            break;
        case 'POST':
            console.log(req.body); 
            const { name, subject } = req.body;
            const newTeacher = {
                id: teachers.length + 1,
                name,
                subject
            };
            res.status(201).json(newTeacher);
            teachers.push(newTeacher)
            break; 
        default:
            res.status(404).end();
    }
}

