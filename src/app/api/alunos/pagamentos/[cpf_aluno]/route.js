import { NextResponse } from 'next/server';
import pool from "../../../../lib/db";


export async function POST(request) {
  try {
    const { id, data, status, pagante, matricula_aluno } = await request.json();
    const client = await pool.connect();
    const result = await client.query(
          'INSERT INTO pagamento (id, data, status, pagante, matricula_aluno) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [id, data, status, pagante, matricula_aluno]
    )
    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

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
    const { matricula_aluno } = params;
    const client = await pool.connect();
    const pagamentos = await client.query('SELECT p.* FROM pagamento p INNER JOIN aluno a ON p.matricula_aluno = $1', [matricula_aluno]);
    client.release();
    return NextResponse.json({
      pagamentos: pagamentos.rows
    })
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}