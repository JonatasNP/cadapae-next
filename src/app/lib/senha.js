import db from './db';

export async function getAlunosByCpf(cpf) {
    
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT senha FROM aluno WHERE cpf = $1', [cpf]);
        return result.rows[0];
}