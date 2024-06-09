import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const { id, DeutscherName, LateinischerName, Farbe, Herkunft, Kalorien} = JSON.parse(request.body);
        if (!id || !DeutscherName || !LateinischerName || !Farbe || !Herkunft || !Kalorien) throw new Error ('Irgendwas muss hier stehen') ;
        await sql `INSERT INTO Obst (id, Deutscher Name ,Lateinischer Name, Farbe, Herkunft, Kalorien) VALUES (${id}, ${DeutscherName}, ${LateinischerName}, ${Farbe}, ${Herkunft}, ${Kalorien});`;
        const Obst = await sql `SELECT * FROM Obst;`;
        return response.status(200).json(Obst.rows);
    }   catch (error) {
        return response.status(500).json({ error });
    }
}