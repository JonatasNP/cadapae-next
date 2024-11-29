'use client'
import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import ImageAdd from '../../icones/icone-adicionar.png';

import iconeUsuario from '../../icones/perfil_do_usuario.png';
import ImgLogo from '../../imgs/logo-apae.png'
import iconeHome from '../../icones/icone_home.png';
import iconeAluno from '../../icones/icone_aluno.png';
import iconeRelatorio from '../../icones/icone_relatorio.png';
import iconePagamentos from '../../icones/icone_pagamentos.png';
import iconeConfiguracao from '../../icones/icone_configuracao.png';
import iconeSair from '../../icones/icone_sair.png';
import iconePesquisar from '../../icones/icone-pesquisa.png';

import {useState} from 'react';


function Registrar_Aluno() { 

    const [foto, setFotoAluno] = useState('');
    const [matricula_aluno, setMatriculaAluno] = useState('');
    const [nome_aluno, setNomeAluno] = useState('');
    const [cpf_aluno, setCpfAluno] = useState('');
    const [cartao_sus_aluno, setCartaoSusAluno] = useState('');
    const [data_nasc_aluno, setDataNascAluno] = useState('');
    const [identidade_aluno, setIdentidadeAluno] = useState('');


    const enviarSubmissão = (e) => {
        e.preventDefault();
        onAddAluno({ foto, matricula_aluno, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno });
        setFotoAluno('');
        setMatriculaAluno('');
        setNomeAluno('');
        setCpfAluno('');
        setCartaoSusAluno('');
        setDataNascAluno('');
        setIdentidadeAluno('');
    }
    


    return (
        <div style={{height: "100vh"}}>
            <div id={styles.barraSuperior}>
                    <section className={styles.logoApae}>
                        <Link href="../home"> 
                            <Image src={ImgLogo} alt= 'Logo' style={{width: "5em", height: '5em'}}></Image>    
                        </Link>
                    </section>
                    
                    <section className={styles.nomeApae}>
                        <p>CadAPAE</p>
                    </section>

                    <section className={styles.botaoUser}>
                        <button id={styles.buttonHome}>
                            <Link href="../../perfil">
                                <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                            </Link>
                        </button>
                    </section>
            </div>




            <div id={styles.conteudo}>


            <form onSubmit={enviarSubmissão}>
                <div>
                    <section>
                        <h1>DADOS DO ALUNO</h1>
                        <div style={{
                            backgroundColor: "#8490ff", width: "95vw", height: "0.5vh", marginTop: "2vh", marginBottom: "2vh"
                        }}></div>

                        <section className={styles.DadosGeraisAluno}>
                            <section className={styles.ImagemAluno}>
                                <input type="file" accept=".png" value={foto} onChange={(e) => setName(e.target.value)}></input>
                                <p>Adicione uma imagem do aluno</p>
                            </section>

                            <section className={styles.DadosAluno}>
                                <section>
                                    <p style={{marginTop: '1em'}}>NOME COMPLETO</p>
                                    <input type="name" placeholder="Digite o nome do aluno..." className={styles.inputNomeAluno} value={nome_aluno} onChange={(e) => setName(e.target.value)}></input>
                                </section>


                                <section style={{display: "flex"}}>
                                    <section style={{width: "23vw", marginRight: "3.5vw"}}>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="name" style={{width: '20vw'}} value={cpf_aluno} onChange={(e) => setName(e.target.value)}></input>

                                        <p style={{marginTop: '1em'}}>NÚMERO DO CARTÃO DO SUS</p>
                                        <input type="number" style={{width: '20vw'}} value={cartao_sus_aluno} onChange={(e) => setName(e.target.value)}></input>
                                    </section>


                                    <section style={{width: "23vw", marginRight: "3.5vw"}}>
                                        <p style={{marginTop: '1em'}}>NÚMERO DA IDENTIDADE</p>
                                        <input type="name" style={{width: '20vw'}} value={identidade_aluno} onChange={(e) => setName(e.target.value)}></input>

                                        <p style={{marginTop: '1em'}}>CID</p>
                                        <select className={styles.SelecionarCID}>
                                            <option>Nenhum CID</option>
                                            <option>CID não identificado</option>
                                            <option>CID F8* - Autismo</option>
                                            <option>CID F7* - Retardo mental não especificado</option>
                                            <option>Outro CID</option>
                                        </select>
                                    </section>


                                    <section style={{width: "23vw"}}>
                                        <p style={{marginTop: '1em'}}>DATA DE NASCIMENTO</p>
                                        <input type="date" style={{width: '20vw'}} value={data_nasc_aluno} onChange={(e) => setName(e.target.value)}></input>

                                        <p style={{marginTop: '1em'}}>LAUDO</p>
                                        <input type="file" style={{width: '20vw'}} onChange={(e) => setName(e.target.value)}></input>
                                    </section>
                                </section>
                            </section>
                            
                        </section>
                    </section>
                </div>






                
                <div style={{marginTop: '10vh'}}>
                    <section>
                        <h1>DADOS DO RESPONSÁVEL</h1>
                        <div style={{
                            backgroundColor: "#8490ff", width: "95vw", height: "0.5vh", marginTop: "2vh", marginBottom: "2vh"
                        }}></div>

                        <section className={styles.DadosGeraisResponsavel}>
                            <section className={styles.Dados1Responsavel}>
                                <section>
                                    <p style={{marginTop: '1em'}}>NOME COMPLETO</p>
                                    <input type="name" style={{width: "45vw"}} placeholder="Digite o nome do responsável..." value={nome_resp} onChange={(e) => setName(e.target.value)}></input>
                                </section>
                                <section style={{display: "flex", justifyContent: "space-between"}}>
                                    <section>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="number" style={{width: "22vw"}} value={cpf_resp} onChange={(e) => setName(e.target.value)}></input>
                                        <p style={{marginTop: '1em'}}>DATA DE NASCIMENTO</p>
                                        <input type="date" style={{width: "22vw"}}></input>
                                    </section>
                                    <section>
                                        <p style={{marginTop: '1em'}}>NÚMERO DE IDENTIDADE</p>
                                        <input type="number" style={{width: "22vw"}} value={identidade_resp} onChange={(e) => setName(e.target.value)}></input>
                                        <p style={{marginTop: '1em'}}>TELEFONE</p>
                                        <input type="number" style={{width: "22vw"}} value={contato_resp} onChange={(e) => setName(e.target.value)}></input>
                                    </section>
                                </section>
                            </section>



                            <section className={styles.Dados2Responsavel}>
                                <p style={{marginTop: '1em'}}>EMAIL</p>
                                <input type="email" style={{width: "45vw"}} value={email_resp} onChange={(e) => setName(e.target.value)}></input>
                                <p style={{marginTop: '1em', display: 'flex', justifyContent: "space-between"}}>
                                    <section>
                                        <p>CIDADE</p>
                                        <input type="name" style={{width: "8vw"}}></input>
                                    </section>
                                    <section>
                                        <p>BAIRRO</p>
                                        <input type="name" style={{width: "12vw"}}></input>
                                    </section>
                                    <section>
                                        <p>RUA</p>
                                        <input type="name" style={{width: "16vw"}}></input>
                                    </section>
                                    <section>
                                        <p>NÚMERO</p>
                                        <input type="number" style={{width: "6vw"}}></input>
                                    </section>
                                </p>
                                <p style={{marginTop: '1em'}}>COMPROVANTE DE RESIDÊNCIA</p>
                                <input type="file" style={{width: "45vw"}} accept=".pdf" value={comprov_resid_resp} onChange={(e) => setName(e.target.value)}></input>
                            </section>
                        </section>
                    </section>
                </div>

                <div style={{display: "flex", padding: "3vh 72vw"}}>
                    <Link href="../home">
                        <button className={styles.BotaoRegistrar} type="submit">
                            <Image src={ImageAdd} alt="Adicionar" /> FINALIZAR O REGISTRO
                        </button>
                    </Link>
                </div>
                

            </form>

            </div>

        

         
            
        </div>
    );
}

export default Registrar_Aluno;
