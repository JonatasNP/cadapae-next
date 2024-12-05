import db from './db';

export async function validaSenha(cpf, senha) {
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM responsavel WHERE cpf_resp = $1 AND senha_resp = $2', [cpf, senha]);
        return result.rows[0];
}