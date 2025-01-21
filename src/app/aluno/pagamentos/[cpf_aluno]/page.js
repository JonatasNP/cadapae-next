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
import iconePagamentoPendente from '../../../icones/icone-pagamento-pendente.png';
import iconeConfiguracao from '../../../icones/icone_configuracao.png';
import iconeSair from '../../../icones/icone_sair.png';
import iconePesquisar from '../../../icones/icone-pesquisa.png';
import imagemSecretario from '../../../imgs/foto.jpg';

import { useState, useEffect } from "react";
import ListarPagamentos from "@/app/components/ListarPagamentos";



function Pagamentos({ params }) {

    const [aluno, setAluno] = useState("");
    const [pagamentos, setPagamentos] = useState([]);

    let dataAtual = Date.now();

    useEffect(() => {
        fetchAluno();
        fetchPagamento();
    }, [])

    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setPagamentos(data.pagamentos);
    }

    const fetchPagamento = async () => {
        const response = await fetch('/api/alunos/pagamentos' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setPagamentos(data.pagamentos);
    }


    const addPagamento = async (p) => {
        const response = await fetch('/api/alunos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(p),
        })
        if (response.ok) {
          fetchPagamento();
          console.log(`O pagamento foi registrado com sucesso.`);
          router.push("/home");
    
        } else { console.error('Falha ao adicionar aluno:', await response.text()); }
      }



    function formatarData(data) {
        const date = new Date(data);

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();


        const dataFormatada = `${dia}/${mes}/${ano}`;

        return dataFormatada;
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
                            <Image src={iconeUsuario} style={{ filter: "invert(100%)", marginRight: "1em" }} /> {aluno.nome ? aluno.nome.toUpperCase() + " (" + aluno.matricula + ")" : <i className={styles.Carregamento}>Carregando nome do aluno...</i>}
                        </p>
                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                            <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} />
                            <h3 style={{ color: "red" }}>{2} pendências</h3>
                        </span>
                    </div>






                    <ListarPagamentos pagamentos={pagamentos} />

                    <div className={styles.PagamentosAluno}>







                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "red", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} /> Junho de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>
                                        <input type="date" style={{ width: "65%" }}></input>
                                    </p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>
                                        R$ <input type="number" style={{ width: "50%" }}></input>
                                    </p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>
                                        <input type="name" style={{ width: "60%" }}></input>
                                    </p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Concluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>

                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "red", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} /> Maio de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>
                                        <input type="date" style={{ width: "65%" }}></input>
                                    </p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>
                                        R$ <input type="number" style={{ width: "50%" }}></input>
                                    </p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>
                                        <input type="name" style={{ width: "60%" }}></input>
                                    </p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Concluir</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>


                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "green", marginRight: "1em" }} /> Abril de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>15/04/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>R$ 17,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>Jorge Mendonça Farias</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Cancelar</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>

                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "green", marginRight: "1em" }} /> Março de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>13/03/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>R$ 14,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>Cleomides Oliveira Brito</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Cancelar</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>


                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "green", marginRight: "1em" }} /> Fevereiro de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>29/02/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>R$ 25,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>Maria Souza Fortunato</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Cancelar</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>



                        <section className={styles.Pagamento}>
                            <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "green", marginRight: "1em" }} /> Janeiro de 2024</h3>
                                <section style={{ display: "flex", width: "60vw" }}>
                                    <p style={{ width: "15vw" }}><b>Data: </b>27/01/2024</p>
                                    <p style={{ width: "15vw" }}><b>Valor: </b>R$ 20,00</p>
                                    <p style={{ width: "40vw" }}><b>Pagante: </b>José Silva de Almeida</p>
                                </section>

                                <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                    <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{ backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em", marginRight: "0.5em" }}>Editar</button></Link>
                                        <Link href=""><button style={{ backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Cancelar</button></Link>
                                    </p>
                                </section>
                            </div>
                        </section>






                    </div>

                    {aluno.data_ingresso ?
                        <div style={{ color: "gray" }}>Esse aluno ingressou em {formatarData(aluno.data_ingresso)}</div>
                        :
                        <div style={{ color: "gray" }}>A data de ingresso deste aluno não foi registrada.</div>
                    }




                </div>
                )

                : (
                    <h2 className={styles.Carregamento} style={{ height: "85vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
                        Carregando histórico de contribuições...
                    </h2>
                )
            }


        </div>
    );
}

export default Pagamentos;