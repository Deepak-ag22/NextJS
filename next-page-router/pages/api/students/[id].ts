import { students } from "../../../data/data.json";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            const filteredStudents = students.filter(student => student.referred_teacher_id === Number(id)); 
            
            if (filteredStudents.length > 0) {
                res.status(200).json(filteredStudents); 
            } else {
                res.status(404).json({ message: 'No students found for this teacher ID' }); 
            }
            break;
        default:
            res.status(404).end();
    }
}
