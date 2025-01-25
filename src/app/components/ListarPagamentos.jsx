import Link from "next/link";

import Image from 'next/image';
import iconeUsuario from '../icones/perfil_do_usuario.png';
import styles from "../home/page.module.css";

import { useState, useEffect } from "react";

export default function ListarPagamentos({ pagamentos }) {





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



    return (
        <>
            <div className={styles.PagamentosAluno}>
                {
                    pagamentos ? (
                        pagamentos.map((a) => {
                            a.status.toUpperCase == "pendente" ? (
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
                            ) : (
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
                            )
                        })
                    ) : (
                        <p>Não há pagamentos associados a esse aluno.</p>
                    )
                }

            </div>
        </>
    )
}