import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const result = await sql`
            CREATE TABLE IF NOT EXISTS fruits (
                "German Name" varchar(50) NOT NULL,
                "Latin Name" varchar(50) NOT NULL,
                Color varchar(50) NOT NULL,
                Origin varchar(200) NOT NULL,
                Calories int NOT NULL
            );
        `;
        return response.status(200).json({ result });
    } catch (error) {
        console.error('Error creating table:', error);
        return response.status(500).json({ error: error.message });
    }
}
