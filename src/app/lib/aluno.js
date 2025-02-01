import db from './db';

export async function getAlunosByCpf(cpf) {
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM aluno WHERE cpf_aluno = $1', [cpf]);
        return result.rows[0];
}