'use client';
import Image from "next/image";
import styles from "./page.module.css";
import ImgLogo from './imgs/logo-apae.png';
import Link from "next/link";
import { useEffect, useState } from "react";





function Login() {



    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loginValido, setLoginValido] = useState(false);
    const usuarioValido = "2042024";
    const senhaValida = "Adoroviver!";

    useEffect(() => {
        if ((senha == senhaValida) && (usuario == usuarioValido)) {
            setLoginValido(true);
        } else {
            setLoginValido(false);
        }
    }, [usuario, senha]);


    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            if (loginValido) window.location.href = "home";
        }
    });






    return (
        <div>
            <div className={styles.fundo}>

                <div className={styles.AppLogo}>
                    <Image src={ImgLogo} alt="logo" style={{ height: "9em", width: "9em" }} />

                    <h2><strong style={{ color: "white" }}>CadAPAE</strong></h2>

                </div>

                <div className={styles.executarLogin}>
                    <p className={styles.textLogin1}>LOGIN</p>

                    <div>
                        <p className={styles.textLogin2}>Usuário</p>
                        <input placeholder="CPF" type='text' id={styles.inputUsuario} className={styles.InputLogin} value={usuario} onChange={elemento => setUsuario(elemento.target.value)}></input>
                    </div>

                    <div>
                        <p className={styles.textLogin2} >Senha</p>
                        <input placeholder="SENHA" id={styles.inputSenha} type="password" className={styles.InputInicial} value={senha} onChange={elemento => setSenha(elemento.target.value)}></input>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link href={loginValido ? "./home" : "./"}><button className={styles.buttonLogin} onClick={() => {alert("Usuário ou senha inválidos!")}}>Entrar</button></Link>
                    </div>

                </div>
            </div>
        </div>



    )


}

export default Login;