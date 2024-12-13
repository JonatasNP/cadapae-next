import { NextResponse } from 'next/server';
import pool from "../../../../lib/db";

export async function DELETE(request, { params }) {
  try {
    const { cpf_aluno } = params;
    const client = await pool.connect();
    await client.query('DELETE FROM aluno WHERE cpf = $1', [cpf_aluno] );
    client.release();
    return NextResponse.json({ message: 'Aluno removido com sucesso.' });
  } catch (error) {
    console.error('Erro removendo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(request, { params }) {
  try {
    const { cpf_aluno } = params;
    const client = await pool.connect();
    const aluno = await client.query('SELECT * FROM aluno WHERE cpf = $1', [cpf_aluno])
    const pagamentos = await client.query('SELECT p.* FROM pagamento p INNER JOIN aluno a ON p.matricula_aluno = $1', [cpf_aluno]);
    client.release();
    return NextResponse.json({
      aluno: aluno.rows[0],
      pagamentos: pagamentos.rows
    })
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}