import db from './db';

export async function getResponsavelById(idResponsavel) {
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM responsavel WHERE id_resp = $1', [idResponsavel]);
        return result.rows[0];
}