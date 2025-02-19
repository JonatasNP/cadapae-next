import { NextResponse } from 'next/server';
import pool from "../../../lib/db";


export async function POST(request) {
  try {
    const { matricula_aluno, cpf_aluno, foto, nome_aluno, cartao_sus_aluno, identidade_aluno, data_ingresso, data_nasc_aluno, laudo_aluno, especificidades_aluno, cpf_resp, nome_resp, identidade_resp, data_nasc_resp, comprov_resid_resp, email_resp, contato_resp, senha_resp, cidade, rua, bairro, numero, complemento } = await request.json();
    const client = await pool.connect();
    const result2 = await client.query(
          'INSERT INTO responsavel (cpf, nome, numero_identidade, data_nascimento, comprovante_residencia, email, telefone, senha, cidade, rua, bairro, numero, complemento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
          [cpf_resp, nome_resp, identidade_resp, data_nasc_resp, comprov_resid_resp, email_resp, contato_resp, senha_resp, cidade, rua, bairro, numero, complemento]
        )
    const result = await client.query(
          'INSERT INTO aluno (cpf, foto, nome, numero_cartao_sus, numero_identidade, data_ingresso, data_nascimento, laudo, especificidades, cpf_responsavel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
          [matricula_aluno, cpf_aluno, foto, nome_aluno, cartao_sus_aluno, identidade_aluno, data_ingresso, data_nasc_aluno, laudo_aluno, especificidades_aluno, cpf_resp]
        )

    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}