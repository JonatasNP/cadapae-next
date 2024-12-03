'use client'
import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import ImageAdd from '../../icones/icone-adicionar.png';

import iconeUsuario from '../../icones/perfil_do_usuario.png';
import ImgLogo from '../../imgs/logo-apae.png';
import iconeHome from '../../icones/icone_home.png';
import iconeAluno from '../../icones/icone_aluno.png';
import iconeRelatorio from '../../icones/icone_relatorio.png';
import iconePagamentos from '../../icones/icone_pagamentos.png';
import iconeConfiguracao from '../../icones/icone_configuracao.png';
import iconeSair from '../../icones/icone_sair.png';
import iconePesquisar from '../../icones/icone-pesquisa.png';

import {useState} from 'react';
import RegistroAluno from '../../components/RegistroAluno';


function Registrar_Aluno() { 


    const adicionarAluno = async (aluno) => {
        const response = await fetch('../../api/alunos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(aluno),
        })

        if (response.ok) {
          fetchAlunos();
          alert("Aluno cadastrado com sucesso!");
          window.location.href = "@/home"; 
        }
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


                <RegistroAluno onAddAluno={adicionarAluno} />

            </div>

        

         
            
        </div>
    );
}

export default Registrar_Aluno;
