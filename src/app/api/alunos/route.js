import { NextResponse } from 'next/server';
import pool from "../../lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM aluno');
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { foto, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, nome_resp, cpf_resp /*, identidade_resp, comprov_resid_resp, contato_resp, email_resp*/ } = await request.json();
    const client = await pool.connect();
    const result2 = await client.query(
          'INSERT INTO responsavel (nome_resp, id_resp) VALUES ($1, $2) RETURNING *',
          [nome_resp, cpf_resp]
        )
    const result = await client.query(
          'INSERT INTO aluno (foto, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, id_responsavel) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
          [foto, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, cpf_resp]
        )

    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}