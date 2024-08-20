import Image from "next/image";
import styles from "./page.module.css";
import ImgLogo from '../imgs/logo-apae.png';
import Link from "next/link";

function Login() {

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
                        <input placeholder="SENHA" type='password' id={styles.inputSenha} className={styles.InputLogin}></input>
                            <p style={{textAlign: "right"}}>Esqueceu sua senha?<Link href="google.com" style={{color: "#8490ff"}}> Clique aqui.</Link></p>

                    </div>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Link href="../home"><button className={styles.buttonLogin}>Entrar</button></Link>
                    </div>

                    <div>
                        <p>Ainda não possui cadastro? 
                        <Link href="../" style={{color: "#8490ff"}}> Crie uma conta.</Link></p>
                    </div>
                    
                    </div>
            </div>
        </div>

        
        
    )

}

export default Login;