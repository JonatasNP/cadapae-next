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
    const { foto, matricula_aluno, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, nome_resp, cpf_resp, identidade_resp, comprov_resid_resp, contato_resp, email_resp } = await request.json();
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO aluno, responsavel (foto, matricula_aluno, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;  INSERT INTO responsavel (nome_resp, cpf_resp, identidade_resp, comprov_resid_resp, contato_resp, email_resp) VALUES ($8, $9, $10, $11, $12, $13) RETURNING *;',
      [foto, matricula_aluno, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, nome_resp, cpf_resp, identidade_resp, comprov_resid_resp, contato_resp, email_resp]
    );
    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}