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

                    <div className={styles.ReferenteAluno} style={{display: "flex"}}>
                            <p style={{ width: '100vw' }}>
                                <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> Augusto Francisco Marques da Silva
                            </p>
                            <Link href="">
                                <button className={styles.BotaoRegistrar}>REGISTRAR PAGAMENTO</button>
                            </Link>
                    </div>
                    
                    
                    <div className={styles.PagamentosAluno}>

                        <section className={styles.Pagamento}>
                            <div style={{display: "flex", alignItems: "center", verticalAlign: "middle", marginBottom: "1em"}}>
                                <h3 style={{color: "green", display: "flex", alignItems: "center", verticalAlign: "middle"}}><Image src={iconePagamentoConcluido}></Image> Janeiro de 2024</h3>
                            </div>
                            <div style={{display: "flex"}}>
                                <section style={{display: "flex", width: "80vw"}}>
                                    <p style={{marginLeft: "1em"}}><b>Data:</b> 27/01/2024</p>
                                    <p style={{marginLeft: "1em"}}><b>Pagante:</b> Jesus da Silva</p>
                                    <p style={{marginLeft: "1em"}}><b>Valor:</b> R$ 20,00</p>
                                </section>

                                <section style={{display: "flex", width: "15vw", justifyContent: "right", textAlign: "right"}}>
                                    <p style={{display: "flex", justifyContent: "right", textAlign: "right" }}>
                                        <Link href=""><button style={{backgroundColor: "#559988", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em"}}>Editar</button></Link>
                                        <Link href=""><button style={{backgroundColor: "red", color: "white", padding: "0.5em", borderRadius: "10px", border: "0px", fontWeight: "bold", fontSize: "1em"}}>Excluir</button></Link>
                                    </p>  
                                </section>
                              
                                
                            </div>
                        </section>





                        
                    </div>


                
                


            </div>

            
        </div>
    );
}

export default Pagamentos;