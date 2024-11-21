import db from './db';

export async function getAlunosByPesquisa(pesquisa) {
        try {
                console.log(process.env.POSTGRES_URL);
                const result = await db.query("SELECT * FROM aluno WHERE aluno.nome_aluno = '%$pesquisa%'", [pesquisa]);
                return result.rows;
        } catch (error) {
                console.error('Erro ao consultar alunos:', error);
                throw error;
        }
}