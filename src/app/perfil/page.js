import Link from "next/link";
import styles from './page.module.css';
import Header from "../components/Header";


function Perfil() { 


    const secretario = "";

    return (
        <div style={{height: "100vh"}}>
            <Header />
            
            <div id={styles.conteudo}>

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

                        <h3 style={{marginLeft: "10vw"}}>Listar alunos na tela inicial por
                            <select className={styles.select}>
                                <option>Ordem alfabética</option>
                                <option>Quantidade de pendências</option>
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