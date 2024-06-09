import {sql} from '@vercel/postgres';
export default async function handler(request, response) {
    try {
        const result =
        await sql `CREATE TABLE Obst (

            id int(11) NOT NULL,
            Deutscher Name varchar(50) NOT NULL,
            Lateinischer Name varchar(50) NOT NULL,
            Farbe varchar(50) NOT NULL,
            Herkunft varchar(200) NOT NULL,
            Kalorien auf 100 Gramm int(11) NOT NULL
        
          );`;
          return response.status(200).json({ result });
          } catch (errror) {
            return response.status(500).json({ error });
          }
        }