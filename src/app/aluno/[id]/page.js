import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import ImageAdd from '../../icones/icone-adicionar.png';
import ImagemAluno from '../../imgs/imagem-pessoa.png';

import { getAlunosByMatricula } from "@/app/lib/aluno";


import iconeUsuario from '../../icones/perfil_do_usuario.png';
import ImgLogo from '../../imgs/logo-apae.png'
import iconeHome from '../../icones/icone_home.png';
import iconeAluno from '../../icones/icone_aluno.png';
import iconeRelatorio from '../../icones/icone_relatorio.png';
import iconePagamentos from '../../icones/icone_pagamentos.png';
import iconeConfiguracao from '../../icones/icone_configuracao.png';
import iconeSair from '../../icones/icone_sair.png';
import iconePesquisar from '../../icones/icone-pesquisa.png';



async function PerfilAluno({ params }) { 

    const aluno = await getAlunosByMatricula(params.id);


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
                            <Link href="./perfil">
                                <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                            </Link>
                        </button>
                    </section>
            </div>




            <div id={styles.conteudo}>

                <div>
                    <section>
                        <h1>DADOS DO ALUNO</h1>
                        <div style={{
                            backgroundColor: "#8490ff", width: "95vw", height: "0.5vh", marginTop: "2vh", marginBottom: "2vh"
                        }}></div>

                        <section className={styles.DadosGeraisAluno}>
                            <section className={styles.ImagemAluno}>
                                <Image src={ImagemAluno}></Image>
                            </section>

                            <section className={styles.DadosAluno}>
                                <section style={{width: '60vw', display: 'flex'}}>
                                    <section style={{width: '30vw'}}>
                                        <h3 style={{marginTop: '1em'}}>MATRÍCULA</h3> {aluno.matricula}
                                        <h3 style={{marginTop: '1em'}}>NOME</h3> {aluno.nome.toUpperCase()} 
                                        <h3 style={{marginTop: '1em'}}>CPF</h3> {aluno.cpf ? aluno.cpf : "-"}
                                        <h3 style={{marginTop: '1em'}}>NÚMERO DO CARTÃO DO SUS</h3> {aluno.cartaoSUS ? aluno.cartaoSUS : "-"}
                                        <h3 style={{marginTop: '1em'}}>NÚMERO DA IDENTIDADE</h3> {aluno.identidade ? aluno.identidade : "-"}
                                    </section>
                                    <section style={{width: '30vw'}}>
                                        <h3 style={{marginTop: '1em'}}>CID</h3> {aluno.cid ? aluno.cid : "-"}
                                        <h3 style={{marginTop: '1em'}}>DATA DE NASCIMENTO</h3> {aluno.dataNascimento ? aluno.dataNascimento : "-"}
                                        <h3 style={{marginTop: '1em'}}>LAUDO</h3> {aluno.laudo ? <Link href={aluno.cpf} about="_blank">Visualizar</Link> : "-"}
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
                                    <input type="name" style={{width: "45vw"}} placeholder="Digite o nome do responsável..."></input>
                                </section>
                                <section style={{display: "flex", justifyContent: "space-between"}}>
                                    <section>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="number" style={{width: "22vw"}}></input>
                                        <p style={{marginTop: '1em'}}>DATA DE NASCIMENTO</p>
                                        <input type="date" style={{width: "22vw"}}></input>
                                    </section>
                                    <section>
                                        <p style={{marginTop: '1em'}}>NÚMERO DE IDENTIDADE</p>
                                        <input type="number" style={{width: "22vw"}}></input>
                                        <p style={{marginTop: '1em'}}>TELEFONE</p>
                                        <input type="number" style={{width: "22vw"}}></input>
                                    </section>
                                </section>
                            </section>



                            <section className={styles.Dados2Responsavel}>
                                <p style={{marginTop: '1em'}}>EMAIL</p>
                                <input type="email" style={{width: "45vw"}}></input>
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
                                <input type="file" style={{width: "45vw"}} accept=".pdf"></input>
                            </section>
                        </section>
                    </section>
                </div>

                <div style={{display: "flex", padding: "3vh 72vw"}}>
                    <Link href="../home">
                        <button className={styles.BotaoRegistrar}>
                            <Image src={ImageAdd} alt="Adicionar" /> REGISTRAR NOVO ALUNO
                        </button>
                    </Link>
                </div>
                

                
            </div>

            
        </div>
    );
}

export default PerfilAluno;