'use client';
import Image from "next/image";
import styles from "./page.module.css";
import ImgLogo from './imgs/logo-apae.png';
import Link from "next/link";
import { useEffect, useState } from "react";

function Login() {
    const [senha, setSenha] = useState("");
    const [senhaEhValida, setSenhaEhValida] = useState(false);
  
    useEffect(() => {
      if(senha.length >= 8 || senha.length == 0){
        setSenhaEhValida(true);
      } else {
        setSenhaEhValida(false);
      }
    }, [senha]);

    return(
        <div>
            <div className={styles.fundo}>

                <div className={styles.AppLogo}>
                <Image src={ImgLogo} alt="logo" style={{height: "9em", width: "9em"}} />
        
            <h2><strong style={{color: "white"}}>CadAPAE</strong></h2>
      
        </div>

                <div className={styles.executarLogin}>
                    <p className={styles.textLogin1}>LOGIN</p>
                    
                    <div>
                        <p className={styles.textLogin2}>Usuário</p>
                        <input placeholder="E-MAIL" type='email' id={styles.inputEmail} className={styles.InputLogin}></input>
                    </div>

                    <div>
                        <p className={styles.textLogin2} >Senha</p>
                        <input placeholder="SENHA" id={senhaEhValida ? styles.inputSenha : styles.inputInvalido} type="password" className={styles.InputInicial} value={senha} onChange={elemento => setSenha(elemento.target.value)}></input>
                        <p style={{textAlign: "right"}}>Esqueceu sua senha?<Link href="google.com" style={{color: "#8490ff"}}> Clique aqui.</Link></p>
                    </div>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>
                            <Link href="./perfil">
                                <Image src={iconeUsuario} alt='icone_usuario' style={{width: "5em", height: '5em'}}></Image>
                            </Link>
                    </div>
                    
                    </div>
            </div>
        </div>

        
        
    )

}

export default Login;