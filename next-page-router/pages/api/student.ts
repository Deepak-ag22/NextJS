import { students } from "../../data/data.json";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    switch (req.method) {
        case 'GET':
            res.status(200).json(students);
            break;
        default:
            res.status(404).end();
    }
}