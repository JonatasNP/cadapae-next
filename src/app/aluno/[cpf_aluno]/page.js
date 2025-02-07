'use client';

import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import ImageAdd from '../../icones/icone-adicionar.png';
import ImagemAluno from '../../imgs/imagem-pessoa.png';

import iconePagamentos from "../../icones/icone_pagamentos.png";
import iconeUsuario from '../../icones/perfil_do_usuario.png';
import ImgLogo from '../../imgs/logo-apae.png'
import iconeEditar from '../../icones/icone-editar.png';
import iconeExcluir from '../../icones/icone-excluir.png';
import iconeRelatorio from '../../icones/icone_relatorio.png';
import iconeConfiguracao from '../../icones/icone_configuracao.png';
import iconeSair from '../../icones/icone_sair.png';
import iconePesquisar from '../../icones/icone-pesquisa.png';
import Header from "@/app/components/Header";

import { useState, useEffect } from "react";

function PerfilAluno({ params }) {

    // const responsavel = await getResponsavelById(aluno.id_responsavel);

    const router = useRouter();

    function formatarData(data) {
        const date = new Date(data);

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();


        const dataFormatada = `${dia}/${mes}/${ano}`;

        return dataFormatada;
    }

    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
        const diaAtual = hoje.getDate();
        const diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }



    const [aluno, setAluno] = useState();
    const [laudos, setLaudos] = useState([]);
    const [cids, setCids] = useState([]);
    const [responsavel, setResponsavel] = useState();


    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setResponsavel(data.responsavel);
        setCids(data.cids);
    }

    useEffect(() => {
        fetchAluno();
    }, [])

    const deleteAluno = async (cpf_aluno) => {
        const response = await fetch(`/api/alunos/${cpf_aluno}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            window.alert(`O aluno ${aluno.nome.toUpperCase()} foi excluído com sucesso no sistema.`);
            router.push("/home")
        }
    }


    return (

        <div id={styles.Body} style={{ height: "100vh" }}>
            <Header />



            {aluno && aluno.cpf ? (
                <div id={styles.conteudo}>

                    <div>
                        <section>
                            <h1>DADOS DO ALUNO</h1>
                            <div style={{
                                backgroundColor: "#8490ff", width: "95vw", height: "1px", marginTop: "2vh", marginBottom: "2vh"
                            }}></div>

                            <section className={styles.DadosGeraisAluno}>
                                <section className={styles.ImagemAluno} style={{ border: "1px solid lightgray" }}>
                                    {false ? <Image></Image> : <p>Este aluno ainda não possui foto.</p>}
                                </section>

                                <section className={styles.DadosAluno}>
                                    <section style={{ width: '64vw', display: 'flex' }}>
                                        <section style={{ width: '40vw' }}>
                                            <h3 style={{ marginTop: '1em' }}>NOME COMPLETO</h3> {aluno.nome.toUpperCase()}
                                            <h3 style={{ marginTop: '1em' }}>NÚMERO DO CARTÃO DO SUS</h3> {aluno.numero_cartao_sus ? aluno.numero_cartao_sus : "-"}
                                        </section>
                                        <section style={{ width: '25vw' }}>
                                            <h3 style={{ marginTop: '1em' }}>CPF</h3> {aluno.cpf ? "" + aluno.cpf : "-"}
                                            <h3 style={{ marginTop: '1em' }}>NÚMERO DA IDENTIDADE</h3> {aluno.numero_identidade ? aluno.numero_identidade : "-"}
                                        </section>
                                        <section style={{ width: '20vw' }}>
                                            <h3 style={{ marginTop: '1em' }}>DATA DE NASCIMENTO</h3> {aluno.data_nascimento ? formatarData(aluno.data_nascimento) + " (" + calcularIdade(aluno.data_nascimento) + " anos)" : "-"}
                                            <h3 style={{ marginTop: '1em' }}>DATA DE INGRESSO</h3> {aluno.data_ingresso ? formatarData(aluno.data_ingresso) : "-"}
                                        </section>
                                    </section>
                                    <section style={{marginTop: "1em"}}>
                                        <h3 style={{marginRight: "0.7em"}}>ESPECIFICIDADES DO ALUNO </h3> <p>{aluno.especificidades ? aluno.especificidades : "Não foram definidas."}</p>
                                    </section>
                                    <section style={{ marginTop: "1em", display: 'flex'}}>
                                        <section style={{ width: '30vw' }}>
                                            <h3 style={{marginRight: "0.7em"}}>LAUDOS MÉDICOS</h3>
                                            {
                                                laudos.length !== 0 ? (
                                                    laudos.map(l => {
                                                        {l.arquivo}
                                                    })
                                                ) : ("Nenhum laudo foi anexado.")
                                            }
                                        </section>
                                        <section style={{ width: '30vw' }}>
                                            <h3 style={{marginRight: "0.7em"}}>CIDS CORRESPONDENTES</h3>
                                            {
                                                cids.length !== 0 ? (
                                                    cids.map(c => 
                                                        <p>
                                                            {`${c.codigo} - ${c.nome}`}
                                                        </p>
                                                        
                                                    )
                                                ) : ("Nenhum CID correspondente.")
                                            }
                                        </section>

                                    </section>
                                </section>

                            </section>
                        </section>
                    </div>



                    <div style={{ marginTop: '10vh' }}>
                        <section>
                            <h1>DADOS DO RESPONSÁVEL</h1>
                            <div style={{
                                backgroundColor: "#8490ff", width: "95vw", height: "1px", marginTop: "2vh", marginBottom: "2vh"
                            }}></div>

                            <section className={styles.DadosGeraisResponsavel}>
                                <section className={styles.Dados1Responsavel} style={{ marginTop: '1em' }}>
                                    <p style={{width: "30vw"}}><h3>NOME COMPLETO</h3> {responsavel.nome ? responsavel.nome.toUpperCase() : "-"}</p>
                                    <p style={{width: "20vw"}}><h3>CPF</h3> {responsavel.cpf ? responsavel.cpf : "-"}</p>
                                    <p style={{width: "22vw"}}><h3>NÚMERO DA IDENTIDADE</h3> {responsavel.numero_identidade ? responsavel.numero_identidade : "-"}</p>
                                    <p style={{width: "15vw"}}><h3>DATA DE NASCIMENTO</h3> {responsavel.data_nascimento ? formatarData(responsavel.data_nascimento) + " (" + calcularIdade(responsavel.data_nascimento) + " anos)" : "-"}</p>
                                </section>
                                <section className={styles.Dados2Responsavel} style={{ marginTop: '1em' }}>
                                    <p style={{width: "30vw"}}><h3>E-MAIL</h3> {responsavel.email ? responsavel.email : "-"}</p>
                                    <p style={{width: "20vw"}}><h3>TELEFONE</h3> {responsavel.telefone ? responsavel.telefone : "-"}</p>
                                    <p style={{width: "37vw"}}><h3>ENDEREÇO</h3> {
                                        responsavel.rua && responsavel.numero ?
                                            `${responsavel.cidade}, ${responsavel.bairro}, ${responsavel.rua}, ${responsavel.numero}, ${responsavel.complemento}`
                                            : "-"
                                    }</p>
                                </section>
                                <section style={{ width: '30vw', textAlign: "left", marginTop: '1em' }}>
                                    <h3 style={{marginRight: "0.7em"}}>COMPROVANTE DE RESIDÊNCIA</h3>
                                    {
                                        responsavel.comprovante ? (
                                            <b>
                                                Acessar comprovante de residência {responsavel.comprovante}
                                            </b>
                                        ) : ("Nenhum comprovante de residência foi anexado.")
                                    }
                                </section>
                            </section>
                        </section>
                    </div>




                    <div style={{ marginTop: "3vh", display: "flex", justifyContent: "right", alignItems: "end" }}>

                        <button className={styles.BotaoStyle} style={{ backgroundColor: "#8490ff", marginRight: "0.5%", height: "4em" }}
                            onClick={() => router.push(`pagamentos/${aluno.cpf}`)}
                        >
                            ACESSAR HISTÓRICO DE CONTRIBUIÇÕES
                        </button>

                        <button className={styles.BotaoStyle} style={{ backgroundColor: "cyan", marginRight: "0.5%" }}
                            onClick={() => router.push(`edicao/${aluno.cpf}`)}
                        >
                            <Image src={iconeEditar} style={{ height: "2em", width: "2em", marginRight: "1em" }} /> EDITAR DADOS DO ALUNO
                        </button>

                        <button
                            className={styles.BotaoStyle} style={{ backgroundColor: "#FF5537" }}
                            onClick={() => {
                                if (prompt(`Para confirmar a exclusão de ${aluno.nome} do sistema, digite "Excluir".`).toUpperCase() === "Excluir") deleteAluno(aluno.cpf);
                                else alert(`Não foi possível excluir ${aluno.nome.toUpperCase()} do sistema!`)
                            }}
                        >
                            <Image src={iconeExcluir} style={{ height: "2em", width: "2em", marginRight: "1em" }} /> EXCLUIR ALUNO DO SISTEMA
                        </button>

                    </div>

                </div>) :
                <div id={styles.conteudo}>
                    <h2 className={styles.Carregamento} style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
                        Carregando dados do aluno...
                    </h2>
                </div>
            }


        </div>
    );
}

export default PerfilAluno;