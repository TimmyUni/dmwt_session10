import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
      const { germanName, latinName, color, origin, calories } = request.body;

      if (!germanName || !latinName || !color || !origin || !calories) {
        return response.status(400).json({ error: 'All fields are required' });
      }

      await sql`
        INSERT INTO obst ("Deutscher Name", "Lateinischer Name", Farbe, Herkunft, Kalorien)
        VALUES (${germanName}, ${latinName}, ${color}, ${origin}, ${calories});
      `;

      const { rows: fruits } = await sql`SELECT * FROM obst;`;
      return response.status(200).json(fruits); // Ensure you return the rows
    } catch (error) {
      console.error('Error during request processing:', error);
      return response.status(500).json({ error: error.message });
    }
}
