import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../aluno/registro/page.module.css';
import ImageAdd from '../icones/icone-adicionar.png';

import iconeUsuario from '../icones/perfil_do_usuario.png';
import ImgLogo from '../imgs/logo-apae.png';

export default function RegistroAluno ({ onAddAluno }) {
    const [foto, setFotoAluno] = useState('');
    const [nome_aluno, setNomeAluno] = useState('');
    const [cpf_aluno, setCpfAluno] = useState('');
    const [cartao_sus_aluno, setCartaoSusAluno] = useState('');
    const [data_nasc_aluno, setDataNascAluno] = useState('');
    const [identidade_aluno, setIdentidadeAluno] = useState('');
    const [nome_resp, setNomeResp] = useState('');
    const [cpf_resp, setCpfResp] = useState('');
    const [identidade_resp, setIdentidadeResp] = useState('');
    const [comprov_resid_resp, setComprovResidResp] = useState('');
    const [contato_resp, setContatoResp] = useState('');
    const [email_resp, setEmailResp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddAluno({ foto, nome_aluno, cpf_aluno, cartao_sus_aluno, data_nasc_aluno, identidade_aluno, nome_resp, cpf_resp })
        setFotoAluno('')
        setNomeAluno('')
        setCpfAluno('')
        setCartaoSusAluno('')
        setDataNascAluno('')
        setIdentidadeAluno('')
        setNomeResp('')
        setCpfResp('')
    }


    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <section>
                    <h1>DADOS DO ALUNO</h1>
                    <div style={{
                        backgroundColor: "#8490ff", width: "94vw", height: "0.2vh", marginTop: "2vh", marginBottom: "2vh"
                    }}></div>

                    <section className={styles.DadosGeraisAluno}>
                        <section className={styles.ImagemAluno}>
                            <Image id={styles.ImagemAluno} style={{display:"none"}} alt="Imagem prevista" width="200"></Image>
                            <input type="file" accept=".png" value={foto} onChange={
                                (e) => {
                                    setFotoAluno(e.target.value);
                                }
                            }></input>
                        </section>

                        <section className={styles.DadosAluno}>
                            <section>
                                <p style={{ marginTop: '1em' }}>NOME COMPLETO<span style={{color: "red"}}>*</span></p>
                                <input type="name" placeholder="Digite o nome completo do aluno..." className={styles.inputNomeAluno} value={nome_aluno} onChange={(e) => setNomeAluno(e.target.value)}></input>
                            </section>


                            <section style={{ display: "flex" }}>
                                <section style={{ width: "23vw", marginRight: "3.5vw" }}>
                                    <p style={{ marginTop: '1em' }}>CPF<span style={{color: "red"}}>*</span></p>
                                    <input placeholder="Digite o CPF do aluno..." type="name" style={{ width: '20vw' }} value={cpf_aluno} onChange={(e) => setCpfAluno(e.target.value)}></input>

                                    <p style={{ marginTop: '1em' }}>NÚMERO DO CARTÃO DO SUS<span style={{color: "red"}}>*</span></p>
                                    <input placeholder="Digite o número do cartão do SUS do aluno..." type="number" style={{ width: '20vw' }} value={cartao_sus_aluno} onChange={(e) => setCartaoSusAluno(e.target.value)}></input>
                                </section>


                                <section style={{ width: "23vw", marginRight: "3.5vw" }}>
                                    <p style={{ marginTop: '1em' }}>NÚMERO DA IDENTIDADE<span style={{color: "red"}}>*</span></p>
                                    <input placeholder="Digite o número do RG do aluno..." type="name" style={{ width: '20vw' }} value={identidade_aluno} onChange={(e) => setIdentidadeAluno(e.target.value)}></input>

                                    <p style={{ marginTop: '1em' }}>CID<span style={{color: "red"}}>*</span></p>
                                    <select className={styles.SelecionarCID}>
                                        <option>Nenhum CID</option>
                                        <option>CID não identificado</option>
                                        <option>CID F8* - Autismo</option>
                                        <option>CID F7* - Retardo mental não especificado</option>
                                        <option>Outro CID</option>
                                    </select>
                                </section>


                                <section style={{ width: "23vw" }}>
                                    <p style={{ marginTop: '1em' }}>DATA DE NASCIMENTO<span style={{color: "red"}}>*</span></p>
                                    <input type="date" style={{ width: '20vw' }} value={data_nasc_aluno} onChange={(e) => setDataNascAluno(e.target.value)}></input>

                                    <p style={{ marginTop: '1em' }}>LAUDO</p>
                                    <input type="file" style={{ width: '20vw' }}></input>
                                </section>
                            </section>
                            <section>
                                <p style={{ marginTop: '1em' }}>ESPECIFICIDADES DO(A) ALUNO(A)</p>
                                <textarea  placeholder="Digite as especificidades do aluno..." style={{ fontFamily: "Arial", width: '67vw', minWidth: "67vw", maxWidth: '67vw', maxHeight: '30vh', minHeight: "5vh" }}></textarea>
                            </section>
                        </section>

                    </section>
                </section>
            </div>







            <div style={{ marginTop: '10vh' }}>
                <section>
                    <h1>DADOS DO RESPONSÁVEL</h1>
                    <div style={{
                        backgroundColor: "#8490ff", width: "94vw", height: "0.2vh", marginTop: "2vh", marginBottom: "2vh"
                    }}></div>

                    <section className={styles.DadosGeraisResponsavel}>
                        <section className={styles.Dados1Responsavel}>
                            <section>
                                <p style={{ marginTop: '1em' }}>NOME COMPLETO<span style={{color: "red"}}>*</span></p>
                                <input type="name" style={{ width: "45vw" }} placeholder="Digite o nome completo do responsável..." value={nome_resp} onChange={(e) => setNomeResp(e.target.value)}></input>
                            </section>
                            <section style={{ display: "flex", justifyContent: "space-between" }}>
                                <section>
                                    <p style={{ marginTop: '1em' }}>CPF<span style={{color: "red"}}>*</span></p>
                                    <input placeholder="Digite o CPF do responsável..." type="number" style={{ width: "22vw" }} value={cpf_resp} onChange={(e) => setCpfResp(e.target.value)}></input>
                                    <p style={{ marginTop: '1em' }}>DATA DE NASCIMENTO<span style={{color: "red"}}>*</span></p>
                                    <input type="date" style={{ width: "22vw" }}></input>
                                </section>
                                <section>
                                    <p style={{ marginTop: '1em' }}>NÚMERO DE IDENTIDADE</p>
                                    <input placeholder="Digite o número do RG do responsável..." type="number" style={{ width: "22vw" }} value={identidade_resp} onChange={(e) => setIdentidadeResp(e.target.value)}></input>
                                    <p style={{ marginTop: '1em' }}>TELEFONE</p>
                                    <input placeholder="Digite o telefone do responsável..." type="number" style={{ width: "22vw" }} value={contato_resp} onChange={(e) => setContatoResp(e.target.value)}></input>
                                </section>
                            </section>
                            <p style={{ marginTop: '1em' }}>EMAIL</p>
                            <input placeholder="Digite o email do responsável..." type="email" style={{ width: "45vw" }} value={email_resp} onChange={(e) => setEmailResp(e.target.value)}></input>
                        </section>



                        <section className={styles.Dados2Responsavel}>
                            
                            <p style={{ marginTop: '1em', display: 'flex', justifyContent: "space-between" }}>
                                <section>
                                    <p>CIDADE</p>
                                    <input placeholder="Nome da cidade..." type="name" style={{ width: "18vw" }}></input>
                                </section>
                                <section>
                                    <p>BAIRRO</p>
                                    <input placeholder="Nome do bairro..." type="name" style={{ width: "26vw" }}></input>
                                </section>
                            </p>
                            <p style={{ marginTop: '1em', display: 'flex', justifyContent: "space-between" }}>
                                <section>
                                    <p>RUA</p>
                                    <input placeholder="Digite o nome da rua..." type="name" style={{ width: "24vw" }}></input>
                                </section>
                                <section>
                                    <p>NÚMERO</p>
                                    <input placeholder="Nº da casa..." type="number" style={{ width: "8vw" }}></input>
                                </section>
                                <section>
                                    <p>COMPLEMENTO</p>
                                    <input placeholder="Ex.: casa, apartamento, etc" type="number" style={{ width: "12vw" }}></input>
                                </section>
                            </p>
                            <p style={{ marginTop: '1em' }}>COMPROVANTE DE RESIDÊNCIA</p>
                            <input type="file" style={{ width: "45vw" }} accept=".pdf" value={comprov_resid_resp} onChange={(e) => setComprovResidResp(e.target.value)}></input>
                        </section>
                    </section>
                </section>
            </div>

            <div style={{ display: "flex", marginTop: "2em", marginBottom: "3em", justifyContent: "right", alignItems: "end" }}>
                <button className={styles.BotaoRegistrar} type='submit'>
                    <Image src={ImageAdd} alt="Adicionar" /> FINALIZAR O REGISTRO
                </button>
            </div>


        </form>
    )
}