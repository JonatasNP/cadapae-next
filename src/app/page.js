'use client';
import Image from "next/image";
import styles from "./page.module.css";
import ImgLogo from './imgs/logo-apae.png';
import Barra from "./icones/icone-barra.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Inicial() {


  const [senha, setSenha] = useState("");
  const [senhaEhValida, setSenhaEhValida] = useState(false);

  useEffect(() => {
    if(senha.length >= 8 || senha.length == 0){
      setSenhaEhValida(true);
    } else {
      setSenhaEhValida(false);
    }
  }, [senha]);


  
  return (
    <main className={styles.main}>
      <div className="App-Inicial" id={styles.cobertura1}>
        <div id={styles.cobertura2}>
          <div className={styles.saudacoes}>
              <div style={{margin: "0 auto"}}>
                <h1>BEM-VINDO(A)!</h1>
                <p>Para cadastrar-se, preencha as informações ao lado.</p>
                <p>Caso você já esteja cadastrado, clique no botão de Login.</p>
              </div>
              
              <p></p>
              <Image src={Barra} alt="Barra Decorativa" style={{width: "35vw", height: "3vh"}} />
              <Link href="./login"><p><button id={styles.buttonInicial}>Login</button></p></Link>
          </div>
  
          <div className={styles.cadastro}>
              <Image src={ImgLogo} id={styles.imgLogo} alt="Logo da CadAPAE"></Image>
              <h1 className={styles.tituloCadastro}>CadAPAE</h1>
  
              <h1 id={styles.titulo}>CRIAR CONTA</h1>
  
              <p><input placeholder="NOME" id={styles.inputNome} type="text" className={styles.InputInicial}></input></p>
              <p><input placeholder="E-MAIL" id={styles.inputEmail} type="email" className={styles.InputInicial}></input></p>
              <p><input placeholder="TELEFONE" id={styles.inputTelefone} type="tel" name="telefone" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" className={styles.InputInicial}></input></p>
              <p><input placeholder="SENHA" id={senhaEhValida ? styles.inputSenha : styles.inputInvalido} type="password" className={styles.InputInicial} value={senha} onChange={elemento => setSenha(elemento.target.value)}></input></p>
  
              <p><button id={styles.buttonInicial}>Entrar</button></p>
          </div>
        </div>
      </div>
    </main>

  );
}

