import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      const result = await sql`
        CREATE TABLE IF NOT EXISTS obst (
          "Deutscher Name" varchar(50) NOT NULL,
          "Lateinischer Name" varchar(50) NOT NULL,
          Farbe varchar(50) NOT NULL,
          Herkunft varchar(200) NOT NULL,
          Kalorien int NOT NULL
        );
      `;
      return response.status(200).json({ result });
    } catch (error) {
      console.error('Error creating table:', error);
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }
}
