import { NextResponse } from 'next/server';
import pool from "../../lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM aluno');
    const result2 = await client.query('SELECT c.* FROM cid c INNER JOIN cid_aluno ca ON c.id = ca.id_cid INNER JOIN aluno a ON a.cpf = ca.cpf_aluno');
    client.release();
    return NextResponse.json({alunos: result.rows, cids: result2.rows});
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      cpf_aluno,
      foto,
      nome_aluno,
      cartao_sus_aluno,
      identidade_aluno,
      data_ingresso,
      data_nasc_aluno,
      especificidades_aluno,

      cpf_resp,
      nome_resp,
      identidade_resp,
      data_nasc_resp,
      comprov_resid_resp,
      email_resp,
      contato_resp,
      cidade,
      rua,
      bairro,
      numero,
      complemento,

      cids_aluno,
      laudos_aluno
              
              } = await request.json();
    const client = await pool.connect();
    const result2 = await client.query(
          'INSERT INTO responsavel (cpf, nome, numero_identidade, data_nascimento, comprovante_residencia, email, telefone, cidade, rua, bairro, numero, complemento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
          [cpf_resp, nome_resp, identidade_resp, data_nasc_resp, comprov_resid_resp, email_resp, contato_resp, cidade, rua, bairro, numero, complemento]
        )
    const result = await client.query(
          'INSERT INTO aluno (cpf, foto, nome, numero_cartao_sus, numero_identidade, data_ingresso, data_nascimento, especificidades, cpf_responsavel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
          [cpf_aluno, foto, nome_aluno, cartao_sus_aluno, identidade_aluno, data_ingresso, data_nasc_aluno, especificidades_aluno, cpf_resp]
        )

    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}