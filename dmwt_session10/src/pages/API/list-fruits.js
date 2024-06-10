import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      const { rows: fruits } = await sql`SELECT * FROM obst;`;
      return response.status(200).json(fruits);
    } catch (error) {
      console.error('Error during request processing:', error);
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }
}
