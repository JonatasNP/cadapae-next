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
import imagemSecretario from '../imgs/foto.jpg';



function Perfil() { 


    const secretario = "";

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
                        <Link href="./perfil">
                            <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                        </Link>
                    </button>
                </section>
            </div>




            <div id={styles.conteudo}>
                <div className={styles.DadosPessoais}>
                    <div style={{textAlign: "center", marginBottom: "2em"}}>
                        <h1>Seus dados pessoais</h1>
                    </div>

                    <section style={{display: "flex"}}>
                        <section style={{width: "20vw", height: "15vw", display: "flex", alignItems: "center", justifyContent: "center", verticalAlign: "middle", border: "1px solid lightgray", marginRight: "1vw"}}>
                            {
                                secretario.foto ?
                                <Image src={secretario.foto} style={{height: "15vw", width: "20vw", marginRight: "2vw"}}></Image> :
                                <p>Nenhuma foto de perfil adicionada.</p>
                            }
                        </section>


                        <section>
                            <h2 style={{marginBottom: "2vh"}}>Secretário(a)</h2>
                            <h3 style={{color: "gray"}}>Nenhuma descrição adicionada.</h3>
                        </section>
                    </section>
                    
                </div>



                <div style={{textAlign: "center", marginBottom: "2em"}}>
                    <h1>Configurações do sistema</h1>
                </div>

                <div className={styles.Configuracoes}>
                    
                    <section style={{display: "flex", verticalAlign: "middle", alignItems: "center", justifyContent: "space-between", marginBottom: "4vh"}}>
                        <h3>E-mail pessoal <input type="email" id={styles.inputEmail}></input></h3>
                        <h3>E-mail para contato <input type="email" id={styles.inputEmail}></input></h3>
                        <h3>Telefone <input type="text" id={styles.inputTelefone}></input></h3>
                    </section>

                    <section style={{ display: "flex", textAlign: "left", marginBottom: "4vh", verticalAlign: "middle", alignItems: "center"}}>
                        <h3>Notificações <input type="checkbox" style={{marginLeft: "1vw"}}></input></h3>

                        <h3 style={{marginLeft: "10vw"}}>Listar alunos por
                            <select className={styles.select}>
                                <option>Ordem alfabética</option>
                                <option>Ordem crescente de idade</option>
                                <option>Ordem decrescente de idade</option>
                            </select>
                        </h3>
                    </section>





                    <section style={{display: "flex"}}>
                        <Link href="">
                            <button className={styles.botao} style={{backgroundColor: "rgb(189, 189, 0)"}}>Alterar senha</button>
                        </Link>
                        <Link href="../" style={{marginLeft: "1vw"}}>
                            <button className={styles.botao} style={{backgroundColor: "red"}}>Desconectar conta</button>
                        </Link>
                        
                        <div style={{marginLeft: "71.5vw"}}>
                            <Link href="./home">
                                <button className={styles.BotaoSalvarAlteracoes}>Salvar Alterações</button>
                            </Link>
                        </div>
                    </section>
                    
                        
                </div>


                
                


            </div>

            
        </div>
    );
}

export default Perfil;