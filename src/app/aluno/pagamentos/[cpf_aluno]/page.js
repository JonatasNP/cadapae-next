"use client";

import Link from "next/link";
import Image from 'next/image';
import styles from "./page.module.css";
import iconeUsuario from '../../../icones/perfil_do_usuario.png';
import iconePagamentos from '../../../icones/icone_pagamentos.png';
import Header from "@/app/components/Header";

import { useState, useEffect } from "react";
import ListarPagamentos from "@/app/components/ListarPagamentos";


function Pagamentos({ params }) {

    const [aluno, setAluno] = useState("");
    const [pagamentos, setPagamentos] = useState([]);
    let quantPagamentosPendentes = 0;

    let dataAtual = Date.now();



    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
    }

    const fetchPagamentos = async () => {
        if (aluno) {
            const response = await fetch('/api/alunos/pagamentos/' + aluno.matricula);
            const data = await response.json();
            setPagamentos(data.pagamentos);
            if (pagamentos) pagamentos.map(p => {
                if (p.status.toUpperCase() == "PENDENTE") console.log(quantPagamentosPendentes++);
            })
        }
        
    }

    useEffect(() => {
        fetchAluno();
        fetchPagamentos();
    }, [])

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
            <Header />


            {
                aluno ? (

                    <div id={styles.conteudo}>
                        <div style={{ textAlign: "center", marginBottom: "2em", display: "flex", alignItems: "center", verticalAlign: "middle", justifyContent: "center" }}>
                            <Image src={iconePagamentos} style={{ filter: "invert(100%)", marginRight: "0.5em" }}></Image>
                            <h1>Histórico de Contribuições</h1>
                        </div>

                        <Link href={`../${aluno.cpf}`}>
                            <div className={styles.ReferenteAluno} style={{ display: "flex", marginBottom: "3vh" }}>
                                <p style={{ width: '100vw' }}>
                                    <Image src={iconeUsuario} style={{ filter: "invert(100%)", marginRight: "1em" }} /> {aluno ? aluno.nome.toUpperCase() + " (" + aluno.cpf + ")" : <i className={styles.Carregamento}>Carregando nome do aluno...</i>}
                                </p>
                                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                    <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} />
                                    <h3 style={{ color: "red" }}>{1 || quantPagamentosPendentes} pendência(s)</h3>
                                </span>
                            </div>
                        </Link>

                        <ListarPagamentos pagamentos={pagamentos} />

                        <div className={styles.PagamentosAluno}>


                            <section className={styles.Pagamento}>
                                <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                    <h3 style={{ color: "red", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                        <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} /> Janeiro de 2025</h3>
                                    <section style={{ display: "flex", width: "60vw" }}>
                                        <p style={{ width: "15vw" }}><b>Data: </b>
                                            <input type="date" style={{ width: "65%" }}></input>
                                        </p>
                                        <p style={{ width: "15vw" }}><b>Valor: </b>
                                            R$ <input type="number" style={{ width: "25%" }}></input>,00
                                        </p>
                                        <p style={{ width: "40vw" }}><b>Pagante: </b>
                                            <input type="name" style={{ width: "60%" }}></input>
                                        </p>
                                    </section>

                                    <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                        <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                            <Link href=""><button onClick={()=>{fetchPagamentos(); console.log(pagamentos)}} style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Concluir</button></Link>
                                        </p>
                                    </section>
                                </div>
                            </section>


                            
                            {/*<section className={styles.Pagamento}>
                                <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                    <h3 style={{ color: "red", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                        <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} /> Junho de 2024</h3>
                                    <section style={{ display: "flex", width: "60vw" }}>
                                        <p style={{ width: "15vw" }}><b>Data: </b>
                                            <input type="date" style={{ width: "65%" }}></input>
                                        </p>
                                        <p style={{ width: "15vw" }}><b>Valor: </b>
                                            R$ <input type="number" style={{ width: "25%" }}></input>,00
                                        </p>
                                        <p style={{ width: "40vw" }}><b>Pagante: </b>
                                            <input type="name" style={{ width: "60%" }}></input>
                                        </p>
                                    </section>

                                    <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                        <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                            <Link href=""><button style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Concluir</button></Link>
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
                                            R$ <input type="number" style={{ width: "25%" }}></input>,00
                                        </p>
                                        <p style={{ width: "40vw" }}><b>Pagante: </b>
                                            <input type="name" style={{ width: "60%" }}></input>
                                        </p>
                                    </section>

                                    <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                        <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                            <Link href=""><button style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Concluir</button></Link>
                                        </p>
                                    </section>
                                </div>
                            </section>*/}


                        </div>

                        {aluno.data_ingresso ?
                            <div style={{ color: "gray" }}>Esse aluno ingressou em {formatarData(aluno.data_ingresso)}.</div>
                            :
                            <div style={{ color: "gray" }}>A data de ingresso deste aluno na APAE não foi registrada.</div>
                        }

                    </div>

                ) : (
                    <div id={styles.conteudo}>
                        <h2 className={styles.Carregamento} style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
                            Carregando histórico de contribuições...
                        </h2>
                    </div>

                )}


        </div>
    );
}

export default Pagamentos;