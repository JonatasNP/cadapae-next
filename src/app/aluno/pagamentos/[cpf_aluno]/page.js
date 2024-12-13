"use client";

import Link from "next/link";
import Image from 'next/image';
import styles from "./page.module.css";
import ImageAdd from '../../../icones/icone-adicionar.png';

import iconeUsuario from '../../../icones/perfil_do_usuario.png';
import ImgLogo from '../../../imgs/logo-apae.png'

import iconeHome from '../../../icones/icone_home.png';
import iconeAluno from '../../../icones/icone_aluno.png';
import iconeRelatorio from '../../../icones/icone_relatorio.png';
import iconePagamentos from '../../../icones/icone_pagamentos.png';
import iconePagamentoConcluido from '../../../icones/icone-pagamento-concluido.png';
import iconeConfiguracao from '../../../icones/icone_configuracao.png';
import iconeSair from '../../../icones/icone_sair.png';
import iconePesquisar from '../../../icones/icone-pesquisa.png';
import imagemSecretario from '../../../imgs/foto.jpg';

import { useState, useEffect } from "react";



function Pagamentos({ params }) {

    const [aluno, setAluno] = useState("");
    const [pagamentos, setPagamentos] = useState([]);

    useEffect(() => {
        fetchAluno();
    }, [])

    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setPagamentos(data.pagamentos);
    }


    return (
        <div style={{ height: "100vh" }}>
            <div id={styles.barraSuperior}>
                <section className={styles.logoApae}>
                    <Link href="../../../home">
                        <Image src={ImgLogo} alt='Logo' style={{ width: "5em", height: '5em' }}></Image>
                    </Link>
                </section>

                <section className={styles.nomeApae}>
                    <p>CadAPAE</p>
                </section>

                <section className={styles.botaoUser}>
                    <button id={styles.buttonHome}>
                        <Link href="./perfil">
                            <Image src={iconeConfiguracao} alt='icone_configuracao' style={{ width: "5em", height: '5em' }}></Image>
                        </Link>
                    </button>
                </section>
            </div>



            {aluno && aluno.cpf ? (
                <div id={styles.conteudo}>
                    <div style={{ textAlign: "center", marginBottom: "2em", display: "flex", alignItems: "center", verticalAlign: "middle", justifyContent: "center" }}>
                        <Image src={iconePagamentos} style={{ filter: "invert(100%)", marginRight: "0.5em" }}></Image>
                        <h1>Histórico de Contribuições</h1>
                    </div>

                    <div className={styles.ReferenteAluno} style={{ display: "flex", marginBottom: "3vh" }}>
                        <p style={{ width: '100vw' }}>
                            <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> {aluno.nome ? aluno.nome.toUpperCase() : <i className={styles.Carregamento}>Carregando nome do aluno...</i>}
                        </p>
                        <Link href="">
                            <button className={styles.BotaoRegistrar}>REGISTRAR PAGAMENTO</button>
                        </Link>
                    </div>







                    <div className={styles.PagamentosAluno}>




                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}><Image src={iconePagamentoConcluido}></Image> Abril de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data:</b> 15/04/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor:</b> R$ 17,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante:</b> Jorge Mendonça Farias</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Excluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>

                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}><Image src={iconePagamentoConcluido}></Image> Março de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data:</b> 13/03/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor:</b> R$ 14,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante:</b> Cleomides Oliveira Brito</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Excluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>


                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}><Image src={iconePagamentoConcluido}></Image> Fevereiro de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data:</b> 29/02/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor:</b> R$ 25,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante:</b> Maria Souza Fortunato</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Excluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>



                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data:</b> 27/01/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor:</b> R$ 20,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante:</b> José Silva de Almeida</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Excluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>






                    </div>





                </div>)

                 : (
                    <h2 className={styles.Carregamento} style={{ height: "85vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
                        Carregando histórico de contribuições do aluno...
                    </h2>
                 )
            }


        </div>
    );
}

export default Pagamentos;