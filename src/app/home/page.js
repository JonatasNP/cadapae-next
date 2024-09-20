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

function Home() { 
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

                

                <section className={styles.AlunosEncontrados}>
                    
                    <section className={styles.ExibicaoAlunos}>
                        <input className={styles.BarraPesquisa} placeholder='Insira o nome completo do aluno' />
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Ana Beatriz Alves Ribeiro da Silva</p>
                            <p></p>
                            
                            <p style={{fontWeight: "bold"}}>73 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>2 pendências</p>
                    
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Augusto Francisco Marques da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>65 anos </p>
                            <p>-----</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>3 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Jônatas Nicolau Pereira da Cunha</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>17 anos </p>
                            <p>Deficiência Intelectual</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>0 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Wendel da Silva Martins</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>70 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>98 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Ana Beatriz Alves Ribeiro da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>73 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>2 pendências</p>
                    
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Augusto Francisco Marques da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>65 anos </p>
                            <p>-----</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>3 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Jônatas Nicolau Pereira da Cunha</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>17 anos </p>
                            <p>Deficiência Intelectual</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>0 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Wendel da Silva Martins</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>70 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>98 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Ana Beatriz Alves Ribeiro da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>73 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>2 pendências</p>
                    
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Augusto Francisco Marques da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>65 anos </p>
                            <p>-----</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>3 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Jônatas Nicolau Pereira da Cunha</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>17 anos </p>
                            <p>Deficiência Intelectual</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>0 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Wendel da Silva Martins</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>70 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>98 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Ana Beatriz Alves Ribeiro da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>73 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>2 pendências</p>
                    
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Augusto Francisco Marques da Silva</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>65 anos </p>
                            <p>-----</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>3 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Jônatas Nicolau Pereira da Cunha</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>17 anos </p>
                            <p>Deficiência Intelectual</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>0 pendências</p>
                            
                        </div>
                        <div className={styles.alunoPesquisado}>
                            <p><Image src={iconeUsuario} style={{marginRight: "1em"}}></Image> Wendel da Silva Martins</p>
                            <p></p>
                            <p style={{fontWeight: "bold"}}>70 anos </p>
                            <p>Autismo</p>
                            <p style={{color: 'red', fontWeight: "bold"}}>98 pendências</p>
                            
                        </div>
                        
                    </section>
                    
                    <section style={{marginLeft: '1em'}}>
                        <Link href="./">
                            <button className={styles.BotaoPesquisar}>
                                <Image src={iconePesquisar} alt="Pesquisar" /> PESQUISAR
                            </button>
                        </Link>
                        

                        <section className={styles.FiltrosPesquisa}>
                        <div className={styles.FiltroIdade}>
                            <h3 style={{color: '#6079d0'}}>Filtrar por faixa etária</h3>
                            <select>
                                <option>Todas as idades</option>
                                <option>Abaixo de 10 anos</option>
                                <option>De 10 a 19 anos</option>
                                <option>De 20 a 29 anos</option>
                                <option>De 30 a 39 anos</option>
                                <option>De 40 a 49 anos</option>
                                <option>50 anos ou mais</option>
                            </select>
                        
                            
                        </div>
                        <div className={styles.FiltroPagamento}>
                            <h3 style={{color: '#6079d0'}}>Filtrar por quantidade de pendências</h3>
                            
                            <select>
                                <option>-----</option>
                                <option>Nenhum pagamento pendente</option>
                                <option>1 pagamento pendente</option>
                                <option>2 pagamentos pendentes</option>
                                <option>3 ou mais pagamentos pendentes</option>
                            </select>
                            
                        </div>
                        <div className={styles.FiltroCID}>
                            <h3 style={{color: '#6079d0'}}>Filtrar por CID</h3>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> Nenhum CID</p>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> CID F8* - Autismo</p>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> CID F7* - Retardo mental não especificado</p>
                            <p><input type="checkbox" style={{marginTop: '1em'}} /> Outros CIDs</p>

                        

                    

                        </div>
                        </section>
                    
                    <section style={{textAlign: "right", marginTop: "2vh"}}>
                        <Link href="../registrar_aluno">
                            <button className={styles.BotaoRegistrar}>
                                <Image src={ImageAdd} alt="Adicionar" /> REGISTRAR NOVO ALUNO
                            </button>
                        </Link>
                    </section>
                        

                    
                    </section>
                        

                </section>


                
            </div>
        </div>
    );
}

export default Home;
