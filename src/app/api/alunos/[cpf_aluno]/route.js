import { NextResponse } from 'next/server';
import pool from "../../../lib/db";

export async function DELETE(request, { params }) {
  try {
    const { cpf_aluno } = params;
    const client = await pool.connect();
    await client.query('DELETE FROM aluno WHERE cpf = $1', [cpf_aluno]);
    await client.query('DELETE FROM responsavel r INNER JOIN aluno a ON r.cpf = a.cpf_responsavel WHERE a.cpf = $1', [cpf_aluno]);
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
    const cids = await client.query('SELECT c.* FROM cid c INNER JOIN cid_aluno ca ON c.id = ca.id_cid INNER JOIN aluno a ON a.cpf = ca.cpf_aluno WHERE a.cpf = $1', [cpf_aluno])
    client.release();
    return NextResponse.json({
      aluno: aluno.rows[0],
      responsavel: responsavel.rows[0],
      cids: cids.rows
    })
  } catch (error) {
    console.error('Erro listando alunos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { cpf_aluno } = params;
  try {
    const {
      matricula_aluno,
      cpf_aluno,
      foto,
      nome_aluno,
      cartao_sus_aluno,
      identidade_aluno,
      data_ingresso,
      data_nasc_aluno,
      laudo_aluno,
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
      complemento } = await request.json();
    const client = await pool.connect();
    const result = await client.query(
      `UPDATE aluno SET
      matricula = $1,
      cpf = $2,
      foto = $3,
      nome = $4,
      numero_cartao_sus = $5,
      numero_identidade = $6,
      data_ingresso = $7,
      data_nascimento = $8,
      laudo = $9, 
      especificidades = $10
      WHERE cpf = $2
      RETURNING *`,
      [matricula_aluno, cpf_aluno, foto, nome_aluno, cartao_sus_aluno, identidade_aluno, data_ingresso, data_nasc_aluno, laudo_aluno, especificidades_aluno]
    );

    const result2 = await client.query(
      `UPDATE responsavel SET
      cpf = $1,
      nome = $2,
      numero_identidade = $3,
      data_nascimento = $4,
      comprovante_residencia = $5,
      email = $6,
      telefone = $7,
      cidade = $8,
      rua = $9,
      bairro = $10,
      numero = $11,
      complemento = $12
      WHERE cpf IN (
        SELECT cpf_responsavel FROM aluno a WHERE a.cpf = $13
      )
      RETURNING *`,
      [cpf_resp, nome_resp, identidade_resp, data_nasc_resp, comprov_resid_resp, email_resp, contato_resp, cidade, rua, bairro, numero, complemento, cpf_aluno]
    )
    

    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar um novo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}