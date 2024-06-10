import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    try {
      const { germanName, latinName, color, origin, calories } = request.body;

      if (!germanName || !latinName || !color || !origin || !calories) {
        throw new Error('All fields are required');
      }

      await sql`
        INSERT INTO obst ("Deutscher Name", "Lateinischer Name", Farbe, Herkunft, Kalorien)
        VALUES (${germanName}, ${latinName}, ${color}, ${origin}, ${calories});
      `;

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
