import { NextResponse } from 'next/server';
import pool from "../../../lib/db";

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
    const responsavel = await client.query('SELECT r.* FROM responsavel r INNER JOIN aluno a ON r.cpf = a.cpf_responsavel WHERE a.cpf = $1', [cpf_aluno])
    client.release();
    return NextResponse.json({
      aluno: aluno.rows[0],
      responsavel: responsavel.rows[0]
    })
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}