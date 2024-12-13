'use client';

import Link from "next/link";
import Image from 'next/image';
import {useRouter} from 'next/navigation';
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


import { useState, useEffect } from "react";

function PerfilAluno({ params }) {

    // const responsavel = await getResponsavelById(aluno.id_responsavel);

    const router = useRouter();

    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
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
    const [responsavel, setResponsavel] = useState();

    useEffect(() => {
        fetchAluno();
    }, [])

    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/'+params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setResponsavel(data.responsavel)
    }

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
            <div id={styles.barraSuperior}>
                <section className={styles.logoApae}>
                    <Link href="../../home">
                        <Image src={ImgLogo} alt='Logo' style={{ width: "5em", height: '5em' }}></Image>
                    </Link>
                </section>

                <section className={styles.nomeApae}>
                    <p>CadAPAE</p>
                </section>

                <section className={styles.botaoUser}>
                    <button id={styles.buttonHome}>
                        <Link href="../../perfil">
                            <Image src={iconeConfiguracao} alt='icone_configuracao' style={{width: "5em", height: '5em'}}></Image>
                        </Link>
                    </button>
                </section>
            </div>



            {aluno && aluno.cpf ? (
            <div id={styles.conteudo}>
                
                <div>
                    <section>
                        <h1>DADOS DO ALUNO</h1>
                        <div style={{
                            backgroundColor: "#8490ff", width: "95vw", height: "0.5vh", marginTop: "2vh", marginBottom: "2vh"
                        }}></div>

                        <section className={styles.DadosGeraisAluno}>
                            <section className={styles.ImagemAluno} style={{ border: "1px solid lightgray" }}>
                                {false ? <Image></Image> : <p>Este aluno ainda não possui foto.</p>}
                            </section>

                            <section className={styles.DadosAluno}>
                                <section style={{ width: '60vw', display: 'flex' }}>
                                    <section style={{ width: '30vw' }}>
                                        <h3 style={{ marginTop: '1em' }}>NOME</h3> {aluno.nome.toUpperCase()}
                                        <h3 style={{ marginTop: '1em' }}>CPF</h3> {aluno.cpf ? aluno.cpf : "-"}
                                        <h3 style={{ marginTop: '1em' }}>NÚMERO DO CARTÃO DO SUS</h3> {aluno.cartao_sus ? aluno.cartao_sus : "-"}
                                        <h3 style={{ marginTop: '1em' }}>NÚMERO DA IDENTIDADE</h3> {aluno.numero_identidade ? aluno.numero_identidade : "-"}
                                        <h3 style={{ marginTop: '1em' }}>ESPECIFICAÇÕES</h3> {aluno.especificidades ? aluno.especificidades : "-"}
                                    </section>
                                    <section style={{ width: '30vw' }}>
                                        <h3 style={{ marginTop: '1em' }}>MATRÍCULA</h3> {aluno.matricula}
                                        <h3 style={{ marginTop: '1em' }}>CID</h3> {aluno.cid ? aluno.cid : "-"}
                                        <h3 style={{ marginTop: '1em' }}>DATA DE NASCIMENTO</h3> {aluno.data_nascimento ? aluno.data_nascimento + " ("+calcularIdade(aluno.data_nasc_aluno)+" anos)" : "-"}
                                        <h3 style={{ marginTop: '1em', display: "flex", alignItems: "center" }}>LAUDO {aluno.laudo ? <Link href={aluno.cpf} about="_blank"><button className={styles.BotaoVisualizar}>Visualizar</button></Link> : "-"}</h3>
                                        <h3 style={{ marginTop: '1em' }}>CONTRIBUIÇÕES MENSAIS</h3>

                                        <Link href={`./pagamentos/${params.cpf_aluno}`}>
                                            <section style={{
                                                marginTop: "0.5em", padding: "0.4em", width: "25vw", backgroundColor: "#8490ff", borderRadius: "30px", display: "flex", verticalAlign: "middle", alignItems: "center", justifyContent: "center", fontWeight: "bolder", color: "white"
                                            }}>

                                                <Image src={iconePagamentos} style={{ height: "2em", width: "2em" }}></Image> Acessar histórico de contribuições
                                            </section>
                                        </Link>

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
                            backgroundColor: "#8490ff", width: "95vw", height: "0.5vh", marginTop: "2vh", marginBottom: "2vh"
                        }}></div>

                        <section className={styles.DadosGeraisResponsavel}>
                            <section className={styles.Dados1Responsavel}>
                                <h3 style={{ marginTop: '1em' }}>NOME COMPLETO</h3> {responsavel.nome ? responsavel.nome.toUpperCase() : "-"}
                                <h3 style={{ marginTop: '1em' }}>DATA DE NASCIMENTO</h3> {responsavel.data_nascimento ? responsavel.data_nascimento : "-"}
                                <h3 style={{ marginTop: '1em' }}>NÚMERO DA IDENTIDADE</h3> {responsavel.numero_identidade ? responsavel.numero_identidade : "-"}
                                <h3 style={{ marginTop: '1em' }}>CONTATO</h3> {responsavel.telefone ? responsavel.telefone : "-"}
                            </section>
                            <section className={styles.Dados2Responsavel}>
                                <h3 style={{ marginTop: '1em' }}>CPF</h3> {responsavel.cpf ? responsavel.cpf : "-"}
                                <h3 style={{ marginTop: '1em' }}>E-MAIL</h3> {responsavel.email ? responsavel.email : "-"}
                                <h3 style={{ marginTop: '1em' }}>ENDEREÇO</h3> {responsavel.rua && responsavel.numero ? `${responsavel.cidade}, ${responsavel.bairro}, ${responsavel.rua}, ${responsavel.numero}, ${responsavel.complemento} ` : "-"}
                                <h3 style={{ marginTop: '1em', display: "flex", alignItems: "center" }}>COMPROVANTE DE RESIDÊNCIA {responsavel.comprovante_residencia ? <Link href={responsavel.cpf} about="_blank"><button className={styles.BotaoVisualizar}>Visualizar</button></Link> : "Não anexado."}</h3>
                            </section>
                        </section>
                    </section>
                </div>




                <div style={{ marginTop: "3vh", display: "flex", justifyContent: "right", alignItems: "end" }}>

                    <button className={styles.BotaoStyle} style={{ backgroundColor: "cyan", border: "1px solid black" }}>
                        <Image src={iconeEditar} style={{ height: "2em", width: "2em", marginRight: "1em" }} /> EDITAR DADOS DO ALUNO
                    </button>
                    
                    <button
                        className={styles.BotaoStyle} style={{ backgroundColor: "#FF5537", border: "1px solid black" }}
                        onClick={() => deleteAluno(aluno.cpf)}
                    >
                        <Image src={iconeExcluir} style={{ height: "2em", width: "2em", marginRight: "1em" }} /> EXCLUIR ALUNO DO SISTEMA
                    </button>

                </div>

            </div>):
                <h2 className={styles.Carregamento} style={{height: "85vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle"}}>
                    Carregando dados do aluno...
                </h2>
            }


        </div>
    );
}

export default PerfilAluno;