import Link from "next/link";
import Image from 'next/image';
import styles from '../page.module.css';
import ImageAdd from '../../../icones/icone-adicionar.png';

import iconeUsuario from '../../../icones/perfil_do_usuario.png';
import ImgLogo from '../../../imgs/logo-apae.png'

import iconeHome from '../../../icones/icone_home.png';
import iconeAluno from '../../../icones/icone_aluno.png';
import iconeRelatorio from '../../../icones/icone_relatorio.png';
import iconePagamentos from '../../../icones/icone_pagamentos.png';
import iconePagamentoConcluido from '../../../icones/icone-pagamento-concluido.png';
import iconeConfiguracao from '../../../icones/icone_configuracao.png';
import iconeSair from '../../../icones/icone_sair.png';
import iconePesquisar from '../../../icones/icone-pesquisa.png';
import imagemSecretario from '../../../imgs/foto.jpg';



function Pagamentos({ params }) { 

    return (
        <div style={{height: "100vh"}}>
            <div id={styles.barraSuperior}>
                <section className={styles.logoApae}>
                    <Link href="../../../home"> 
                        <Image src={ImgLogo} alt='Logo' style={{width: "5em", height: '5em'}}></Image>    
                    </Link> 
                </section>
                    
                <section className={styles.nomeApae}>
                    <p>CadAPAE</p>
                </section>

                <section className={styles.botaoUser}>
                    <button id={styles.buttonHome}>
                        <Link href="../../../perfil">
                            <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                        </Link>
                    </button>
                </section>
            </div>




            <div id={styles.conteudo}>
                    <div style={{textAlign: "center", marginBottom: "2em", display: "flex", alignItems: "center", verticalAlign: "middle", justifyContent: "center"}}>
                        <Image src={iconePagamentos} style={{filter: "invert(100%)", marginRight: "0.5em"}}></Image>
                        <h1>Histórico de Pagamentos</h1>
                    </div>

                    <div className={styles.NomeAluno}>
                        <p style={{ width: '100vw' }}>
                             <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> Augusto Francisco Marques da Silva
                        </p>
                        <Link href="">
                            <b style={{backgroundColor: "green", color: "white", padding: "1em", borderRadius: "10px"}}>REGISTRAR PAGAMENTO</b>
                        </Link>
                    </div>
                    
                    <div className={styles.PagamentosAluno}>

                        <section className={styles.Pagamento}>
                            <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            <p style={{marginBottom: "1em"}}><b>Data:</b> 27/01/2024</p>
                            <p style={{marginBottom: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                            <p style={{marginBottom: "1em"}}><b>Valor:</b> R$ 20,00</p>
                            <p style={{textAlign: "right"}}>
                                <Link href=""><b style={{backgroundColor: "#559988", color: "white", padding: "0.3em", borderRadius: "10px"}}>Editar</b></Link>
                                <Link href=""><b style={{backgroundColor: "red", color: "white", padding: "0.3em", borderRadius: "10px"}}>Excluir</b></Link>
                            </p>
                        </section>

                        <section className={styles.Pagamento}>
                            <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            <p style={{marginBottom: "1em"}}><b>Data:</b> 27/01/2024</p>
                            <p style={{marginBottom: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                            <p style={{marginBottom: "1em"}}><b>Valor:</b> R$ 20,00</p>
                            <p style={{textAlign: "right"}}>
                                <Link href=""><b style={{backgroundColor: "#559988", color: "white", padding: "0.3em", borderRadius: "10px"}}>Editar</b></Link>
                                <Link href=""><b style={{backgroundColor: "red", color: "white", padding: "0.3em", borderRadius: "10px"}}>Excluir</b></Link>
                            </p>
                        </section>

                        <section className={styles.Pagamento}>
                            <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            <p style={{marginBottom: "1em"}}><b>Data:</b> 27/01/2024</p>
                            <p style={{marginBottom: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                            <p style={{marginBottom: "1em"}}><b>Valor:</b> R$ 20,00</p>
                            <p style={{textAlign: "right"}}>
                                <Link href=""><b style={{backgroundColor: "#559988", color: "white", padding: "0.3em", borderRadius: "10px"}}>Editar</b></Link>
                                <Link href=""><b style={{backgroundColor: "red", color: "white", padding: "0.3em", borderRadius: "10px"}}>Excluir</b></Link>
                            </p>
                        </section>

                        <section className={styles.Pagamento}>
                            <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            <p style={{marginBottom: "1em"}}><b>Data:</b> 27/01/2024</p>
                            <p style={{marginBottom: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                            <p style={{marginBottom: "1em"}}><b>Valor:</b> R$ 20,00</p>
                            <p style={{textAlign: "right"}}>
                                <Link href=""><b style={{backgroundColor: "#559988", color: "white", padding: "0.3em", borderRadius: "10px"}}>Editar</b></Link>
                                <Link href=""><b style={{backgroundColor: "red", color: "white", padding: "0.3em", borderRadius: "10px"}}>Excluir</b></Link>
                            </p>
                        </section>

                        <section className={styles.Pagamento}>
                            <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            <p style={{marginBottom: "1em"}}><b>Data:</b> 27/01/2024</p>
                            <p style={{marginBottom: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                            <p style={{marginBottom: "1em"}}><b>Valor:</b> R$ 20,00</p>
                            <p style={{textAlign: "right"}}>
                                <Link href=""><b style={{backgroundColor: "#559988", color: "white", padding: "0.3em", borderRadius: "10px"}}>Editar</b></Link>
                                <Link href=""><b style={{backgroundColor: "red", color: "white", padding: "0.3em", borderRadius: "10px"}}>Excluir</b></Link>
                            </p>
                        </section>





                        
                    </div>


                
                


            </div>

            
        </div>
    );
}

export default Pagamentos;