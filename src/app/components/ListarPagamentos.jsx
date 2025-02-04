import Link from "next/link";

import Image from 'next/image';
import iconeUsuario from '../icones/perfil_do_usuario.png';
import styles from "../home/page.module.css";

import { useState, useEffect } from "react";


export default function ListarPagamentos({ pagamentos }) {


    const [data_pag, setDataPag] = useState(Date.now());
    const [status_pag, setStatusPag] = useState("Pendente");
    const [pagante_pag, setPagantePag] = useState("");
    const [matricula_aluno, setMatriculaAluno] = useState("");




    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
        const diaAtual = hoje.getDate();
        const diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) idade--;

        return idade;
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
        <>
            <div className={styles.PagamentosAluno}>
                {
                    pagamentos ? (
                        pagamentos.map((p) => {
                            p.status.toUpperCase() == "Pendente" ? (
                                <form className={styles.Pagamento}>
                                    <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                        <h3 style={{ color: "red", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                            <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "red", marginRight: "1em" }} /> Junho de 2024</h3>
                                        <section style={{ display: "flex", width: "60vw" }}>
                                            <p style={{ width: "15vw" }}><b>Data: </b>
                                                <input type="date" style={{ width: "65%" }} defaultValue={p.data.replace("/", "-")}></input>
                                            </p>
                                            <p style={{ width: "15vw" }}><b>Valor: </b>
                                                R$ <input type="number" style={{ width: "50%" }}></input>
                                            </p>
                                            <p style={{ width: "40vw" }}><b>Pagante: </b>
                                                <input type="name" style={{ width: "60%" }} defaultValue={p.data.replace("/", "-")}></input>
                                            </p>
                                        </section>

                                        <section style={{ display: "flex", width: "15vw", justifyContent: "right", textAlign: "right" }}>
                                            <p style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>
                                                <Link href=""><button style={{ backgroundColor: "green", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em" }}>Concluir</button></Link>
                                            </p>
                                        </section>
                                    </div>
                                </form>
                            ) : (
                                <section className={styles.Pagamento}>
                                    <div style={{ display: "flex", alignItems: "center", verticalAlign: "middle" }}>
                                        <h3 style={{ color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", width: "20vw" }}>
                                            <span style={{ height: "20px", width: "20px", borderRadius: "20px", backgroundColor: "green", marginRight: "1em" }} /> Abril de 2024</h3>
                                        <section style={{ display: "flex", width: "60vw" }}>
                                            <p style={{ width: "15vw" }}><b>Data: </b>{p.data ? formatarData(p.data) : "Não registrada"}</p>
                                            <p style={{ width: "15vw" }}><b>Valor: </b>{}</p>
                                            <p style={{ width: "40vw" }}><b>Pagante: </b>{p.pagante ? p.pagante : "Não identificado"}</p>
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