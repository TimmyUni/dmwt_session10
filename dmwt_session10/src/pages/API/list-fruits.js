import { sql } from '@vercel/postgres'

export default async function handler(request, response) {
    try {
        const fruits = await sql `SELECT * FROM Obst;`;
        return response.status(200).json(fruits.rows);
    } catch (error) {
        return response.status(500).json({ error })
    }
}