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

function Home() { 
    return (
        <div>
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

                <input className={styles.BarraPesquisa} placeholder='Insira o nome completo do aluno' />

                <section className={styles.AlunosEncontrados}>
                    <section className={styles.ExibicaoAlunos}>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Ana Beatriz Alves Ribeiro da Silva</p>
                            <p>
                                <p style={{fontWeight: "bold"}}>16 anos </p>/<p>Autismo</p>/<p style={{color: 'red', fontWeight: "bold"}}>2 pendências</p>
                            </p>
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Augusto Francisco Marques da Silva</p>
                            <p style={{color: 'red'}}>3 pendências</p>
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Jônatas Nicolau Pereira da Cunha</p>
                            <p style={{color: 'red'}}>0 pendências</p>
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Wendel da Silva Martins</p>
                            <p style={{color: 'red'}}>5 pendências</p>
                        </div>
                    </section>
                    
                    <section className={styles.FiltrosPesquisa}>
                        <div className={styles.FiltroPagamento}>
                            <h3 style={{color: '#6079d0'}}>Filtrar por quantidade de pendências</h3>
                            
                            <select>
                                <option>Todos os alunos</option>
                                <option>Nenhum pagamento pendente</option>
                                <option>1 pagamento pendente</option>
                                <option>2 pagamentos pendentes</option>
                                <option>3 ou mais pagamentos pendentes</option>
                            </select>
                            
                        </div>
                        <div className={styles.FiltroCID}>
                            <h3 style={{color: '#6079d0'}}>Filtrar por CID</h3>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> CID F8* - Autismo</p>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> CID F7* - Retardo mental não especificado</p>

                            <p><input type="checkbox" style={{marginTop: '1em'}} /> Outros CIDs</p>

                        

                            


                        </div>
                        <button className={styles.BotaoRegistrar}>
                            <Image src={ImageAdd} alt="Adicionar" /> REGISTRAR NOVO ALUNO
                        </button>
                    </section>

                </section>


                
            </div>
        </div>
    );
}

export default Home;
