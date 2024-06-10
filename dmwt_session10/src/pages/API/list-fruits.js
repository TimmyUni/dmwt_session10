import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
      const { rows: fruits } = await sql`SELECT * FROM obst;`;
      return response.status(200).json(fruits);
    } catch (error) {
      console.error('Error during request processing:', error);
      return response.status(500).json({ error: error.message });
    }
}
