import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../aluno/registro/page.module.css';
import ImageAdd from '../icones/icone-adicionar.png';

import iconeUsuario from '../icones/perfil_do_usuario.png';
import ImgLogo from '../imgs/logo-apae.png';

export default function RegistroAluno({ onAddAluno }) {

    const [matricula_aluno, setMatriculaAluno] = useState('');
    const [cpf_aluno, setCpfAluno] = useState('');
    const [foto, setFotoAluno] = useState('');
    const [nome_aluno, setNomeAluno] = useState('');
    const [cartao_sus_aluno, setCartaoSusAluno] = useState('');

    const [identidade_aluno, setIdentidadeAluno] = useState('');
    const [data_ingresso, setDataIngresso] = useState('');
    const [data_nasc_aluno, setDataNascAluno] = useState('');
    const [laudo_aluno, setLaudoAluno] = useState('');
    const [especificidades_aluno, setEspecificidadesAluno] = useState('');

    const [cpf_resp, setCpfResp] = useState('');
    const [nome_resp, setNomeResp] = useState('');
    const [identidade_resp, setIdentidadeResp] = useState('');
    const [data_nasc_resp, setDataNascResp] = useState('');
    const [comprov_resid_resp, setComprovResidResp] = useState('');
    const [email_resp, setEmailResp] = useState('');
    const [contato_resp, setContatoResp] = useState('');
    const [senha, setSenhaResp] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()


        onAddAluno({
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
            complemento
        })

    }




    return (
        <>
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
        </>

    )
}



