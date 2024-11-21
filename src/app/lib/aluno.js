import db from './db';

export async function getAlunosByMatricula(id) {
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM aluno WHERE matricula_aluno = $1', [id]);
        return result.rows[0];
}