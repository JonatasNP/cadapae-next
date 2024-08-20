import Image from "next/image";
import styles from "./page.module.css";


import ImgLogo from './imgs/logo-apae.png';
import Barra from "./icones/icone-barra.png";

export default function Inicial() {
  return (

    <main className={styles.main}>
      <div className="App-Inicial" id={styles.cobertura1}>
        <div id={styles.cobertura2}>
          <div className={styles.saudacoes}>
              <h1>BEM-VINDO(A)!</h1>
              <p>Para cadastrar-se, preencha as informações ao lado.</p>
              <p>Caso você já esteja cadastrado, clique no botão de Login.</p>
              <Image src={Barra} alt="Barra Decorativa" style={{width: "35vw", height: "3vh"}} />
              <p><button id={styles.buttonInicial}>Login</button></p>
          </div>
  
          <div className={styles.cadastro}>
              <Image src={ImgLogo} id={styles.imgLogo} alt="Logo da CadAPAE"></Image>
              <h1 className={styles.tituloCadastro}>CadAPAE</h1>
  
              <h1 id={styles.titulo}>CRIAR CONTA</h1>
  
              <p><input placeholder="NOME" id={styles.inputNome} type="text" className={styles.InputInicial}></input></p>
              <p><input placeholder="E-MAIL" id={styles.inputEmail} type="email" className={styles.InputInicial}></input></p>
              <p><input placeholder="TELEFONE" id={styles.inputTelefone} type="tel" name="telefone" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" className={styles.InputInicial}></input></p>
              <p><input placeholder="SENHA" id={styles.inputSenha} type="password" className={styles.InputInicial}></input></p>
  
              <p><button id={styles.buttonInicial}>Entrar</button></p>
          </div>
        </div>
      </div>
    </main>

  );
}

