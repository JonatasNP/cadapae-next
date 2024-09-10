import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import ImageAdd from '../icones/icone-adicionar.png';

import iconeUsuario from '../icones/perfil_do_usuario.png';
import ImgLogo from '../imgs/logo-apae.png'
import iconeHome from '../icones/icone_home.png';
import iconeAluno from '../icones/icone_aluno.png';
import iconeRelatorio from '../icones/icone_relatorio.png';
import iconePagamentos from '../icones/icone_pagamentos.png';
import iconeConfiguracao from '../icones/icone_configuracao.png';
import iconeSair from '../icones/icone_sair.png';
import iconePesquisar from '../icones/icone-pesquisa.png';




function Registrar_Aluno() { 
    return (
        <div style={{height: "100vh"}}>
            <div id={styles.barraSuperior}>
                    <section className={styles.logoApae}>
                        <Link href="./home">
                            <Image src={ImgLogo} alt= 'Logo' style={{width: "5em", height: '5em'}}></Image>    
                        </Link>
                        
                    </section>
                    
                    <section className={styles.nomeApae}>
                        <p>CadAPAE</p>
                    </section>

                    <section className={styles.botaoUser}>
                        <button id={styles.buttonHome}>
                            <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                        </button>
                    </section>
            </div>




            <div id={styles.conteudo}>

                <div>
                    <section>
                        <h1>DADOS DO ALUNO</h1>
                        <section className={styles.DadosGeraisAluno}>
                            <section className={styles.ImagemAluno}>
                                <input type="file" accept=".png"></input>
                                <p>Adicione uma imagem do aluno</p>
                            </section>

                            <section className={styles.DadosAluno}>
                                <section>
                                    <p style={{marginTop: '1em'}}>NOME COMPLETO</p>
                                    <input type="name" className={styles.inputNome}></input>
                                </section>


                                <section style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <section style={{width: "23vw"}}>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="name" style={{width: '20vw'}}></input>

                                        <p style={{marginTop: '1em'}}>NÚMERO DO CARTÃO DO SUS</p>
                                        <input type="number" style={{width: '20vw'}}></input>
                                    </section>


                                    <section style={{width: "23vw"}}>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="name" style={{width: '20vw'}}></input>

                                        <p style={{marginTop: '1em'}}>NÚMERO DO CARTÃO DO SUS</p>
                                        <input type="number" style={{width: '20vw'}}></input>
                                    </section>


                                    <section style={{width: "23vw"}}>
                                        <p style={{marginTop: '1em'}}>CPF</p>
                                        <input type="name" style={{width: '20vw'}}></input>

                                        <p style={{marginTop: '1em'}}>NÚMERO DO CARTÃO DO SUS</p>
                                        <input type="number" style={{width: '20vw'}}></input>
                                    </section>
                                </section>
                            </section>
                            
                        </section>
                    </section>
                </div>
                
                <div style={{marginTop: '10vh'}}>
                    <section>
                        <h1>DADOS DO RESPONSÁVEL</h1>
                    </section>
                </div>
                

                
            </div>
        </div>
    );
}

export default Registrar_Aluno;
