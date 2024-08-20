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
                        <Image src={ImgLogo} alt= 'Logo' style={{width: "5em", height: '5em'}}></Image>
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
            





            <div id={styles.barraLateral} >
                <section className={styles.opcoes}>
                    <a href='https://gitlab.com/ifpbesperanca/integrador2024' className={styles.linkHome} >
                    <Image src={iconeHome} alt='icone_home'></Image> HOME
                </a>
                <br></br>
                <a href='https://mail.google.com/mail/u/0/#inbox/FMfcgzGxRncVbRrVgWdFqQkFgmKdKZdH' className={styles.linkHome}>
                    <Image src={iconeAluno} alt='icone_aluno'></Image> ALUNOS
                </a>
                <br></br>
                <a href='https://stackoverflow.com/questions/57073650/gatsby-Image-is-a-void-element-tag-and-must-neither-have-children-nor-use-dang' className={styles.linkHome}>
                    <Image src={iconePagamentos} alt='icone_pagamentos'></Image> PAGAMENTOS
                </a>
                <br></br>
                <a href='bibia.com' className={styles.linkHome}>
                    <Image src={iconeRelatorio} alt='icone_relatorio'></Image> RELATÓRIOS
                </a>
                
                <br></br>
                </section>
                

                <section className={styles.info}>
                <a href='bibia.com' className={styles.linkHome}>
                    <Image src={iconeConfiguracao} alt='icone_configuracao'></Image> Configurações
                </a>
                <br></br>
                <a href='biba.com' className={styles.linkHome}>
                    <Image src={iconeSair} alt='icone_sair'></Image> Sair
                </a>
                </section>

            </div>
            
            



            <div id={styles.conteudo}>
                <button className={styles.BotaoRegistrar}>
                    <Image src={ImageAdd} alt="Adicionar" />
                    REGISTRAR NOVO ALUNO
                </button>
            </div>
        </div>
    );
}

export default Home;
