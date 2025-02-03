import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../aluno/edicao/page.module.css';
import ImageAdd from '../icones/icone-adicionar.png';

import iconeUsuario from '../icones/perfil_do_usuario.png';
import ImgLogo from '../imgs/logo-apae.png';
import iconeEditar from '../icones/icone-editar.png';

export default function EdicaoAluno({ dadosAluno, dadosResponsavel,  onChangeAluno }) {

    const [matricula_aluno, setMatriculaAluno] = useState(dadosAluno.matricula);
    const [cpf_aluno, setCpfAluno] = useState(dadosAluno.cpf);
    const [foto, setFotoAluno] = useState('');
    const [nome_aluno, setNomeAluno] = useState(dadosAluno.nome);
    const [cartao_sus_aluno, setCartaoSusAluno] = useState(dadosAluno.numero_cartao_sus);

    const [identidade_aluno, setIdentidadeAluno] = useState(dadosAluno.numero_identidade);
    const [data_ingresso, setDataIngresso] = useState(dadosAluno.data_ingresso);
    const [data_nasc_aluno, setDataNascAluno] = useState(dadosAluno.data_nascimento);
    const [laudo_aluno, setLaudoAluno] = useState('');
    const [especificidades_aluno, setEspecificidadesAluno] = useState(dadosAluno.especificidades);

    const [cpf_resp, setCpfResp] = useState(dadosResponsavel.cpf);
    const [nome_resp, setNomeResp] = useState(dadosResponsavel.nome);
    const [identidade_resp, setIdentidadeResp] = useState(dadosResponsavel.numero_identidade);
    const [data_nasc_resp, setDataNascResp] = useState(dadosResponsavel.data_nascimento);
    const [comprov_resid_resp, setComprovResidResp] = useState('');
    const [email_resp, setEmailResp] = useState(dadosResponsavel.email);
    const [contato_resp, setContatoResp] = useState(dadosResponsavel.telefone);
    const [senha, setSenhaResp] = useState(dadosResponsavel.senha);
    const [cidade, setCidade] = useState(dadosResponsavel.cidade);
    const [rua, setRua] = useState(dadosResponsavel.rua);
    const [bairro, setBairro] = useState(dadosResponsavel.bairro);
    const [numero, setNumero] = useState(dadosResponsavel.numero);
    const [complemento, setComplemento] = useState(dadosResponsavel.complemento);


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!nome_aluno || !matricula_aluno || !cpf_aluno || !data_nasc_aluno || !cpf_resp) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        onChangeAluno({
            matricula_aluno,
            cpf_aluno,
            foto,
            nome_aluno,
            cartao_sus_aluno,
            identidade_aluno,
            data_ingresso,
            data_nasc_aluno,
            laudo_aluno,
            especificidades_aluno,
            cpf_resp,
            nome_resp,
            identidade_resp,
            data_nasc_resp,
            comprov_resid_resp,
            email_resp,
            contato_resp,
            cidade,
            rua,
            bairro,
            numero,
            complemento
        })

    }

    function formatarDataComHifen(data) {
        const date = new Date(data);

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();


        const dataFormatada = `${ano}-${mes}-${dia}`;

        return dataFormatada;
    }




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <section>
                    <h1>EDITE OS DADOS DO ALUNO</h1>
                    <div style={{
                        backgroundColor: "#8490ff", width: "94vw", height: "1px", marginTop: "2vh", marginBottom: "2vh"
                    }}></div>

                    <section className={styles.DadosGeraisAluno}>
                        <section className={styles.ImagemAluno}>
                            <Image style={{ display: "none" }} alt="Imagem do aluno" width="200"></Image>
                            <input type="file" accept=".png" value={foto} onChange={
                                (e) => {
                                    setFotoAluno(e.target.value);
                                }
                            }></input>
                        </section>

                        <section className={styles.DadosAluno}>
                            <section style={{ display: 'flex', width: "67vw", justifyContent: "space-between", marginTop: '1em' }}>
                                <p>
                                    NOME COMPLETO<span style={{ color: "red" }}>*</span>
                                    <input type="name" placeholder="Digite o nome completo do aluno..." style={{ width: "43.5vw" }} pattern="[A-Za-z ]+" title="Apenas letras e espaços são permitidos"
                                        defaultValue={nome_aluno} value={nome_aluno} onChange={(e) => setNomeAluno(e.target.value)}></input>
                                </p>
                                <p style={{ marginLeft: "2vw" }}>
                                    MATRÍCULA<span style={{ color: "red" }}>*</span>
                                    <input type="number" placeholder="Digite a matrícula do aluno..." style={{ width: "21.5vw" }}
                                        defaultValue={matricula_aluno} value={matricula_aluno} onChange={(e) => setMatriculaAluno(e.target.value)}></input>
                                </p>
                            </section>


                            <section style={{ display: "flex" }}>
                                <section style={{ width: "23vw", marginRight: "3.5vw" }}>
                                    <p style={{ marginTop: '1em' }}>CPF<span style={{ color: "red" }}>*</span></p>
                                    <input placeholder="Digite o CPF do aluno..." minLength="11" maxLength="11" type="text" style={{ width: '20vw' }}
                                        defaultValue={cpf_aluno} value={cpf_aluno} onChange={(e) => setCpfAluno(e.target.value)}></input>

                                    <p style={{ marginTop: '1em' }}>NÚMERO DO CARTÃO DO SUS<span style={{ color: "red" }}>*</span></p>
                                    <input placeholder="Digite o número do cartão do SUS do aluno..." type="text" minLength="15" maxLength="15" style={{ width: '20vw' }}
                                        defaultValue={cartao_sus_aluno} value={cartao_sus_aluno} onChange={(e) => setCartaoSusAluno(e.target.value)}></input>
                                </section>


                                <section style={{ width: "23vw", marginRight: "2vw" }}>
                                    <p style={{ marginTop: '1em' }}>NÚMERO DA IDENTIDADE<span style={{ color: "red" }}>*</span></p>
                                    <input placeholder="Digite o número do RG do aluno..." type="text" minLength="9" maxLength="9" style={{ width: '20vw' }}
                                        defaultValue={identidade_aluno} value={identidade_aluno} onChange={(e) => setIdentidadeAluno(e.target.value)}></input>

                                    <p style={{ marginTop: '1em' }}>CID<span style={{ color: "red" }}>*</span></p>
                                    <select className={styles.SelecionarCID}>
                                        <option>Nenhum CID</option>
                                        <option>CID não identificado</option>
                                        <option>CID F8* - Autismo</option>
                                        <option>CID F7* - Retardo mental não especificado</option>
                                        <option>Outro CID</option>
                                    </select>
                                </section>


                                <section style={{ width: "23vw" }}>
                                    <span style={{ width: "23vw", display: "flex"}}>
                                        <p style={{ marginTop: '1em', marginRight: '0.5em' }}>NASCIMENTO<span style={{ color: "red" }}>*</span>
                                            <input type="date" style={{ width: '10vw' }}
                                                defaultValue={formatarDataComHifen(data_nasc_aluno)} onChange={(e) => setDataNascAluno(e.target.value)}></input>
                                        </p>

                                        <p style={{ marginTop: '1em' }}>INGRESSOU EM<span style={{ color: "red" }}>*</span>
                                            <input type="date" style={{ width: '10vw' }}
                                                defaultValue={formatarDataComHifen(data_ingresso)} onChange={(e) => setDataIngresso(e.target.value)}></input>
                                        </p>
                                    </span>


                                    <p style={{ marginTop: '1em' }}>LAUDO</p>
                                    <input type="file" style={{ width: '21.5vw' }}
                                        value={laudo_aluno} onChange={(e) => setLaudoAluno(e.target.value)}></input>
                                </section>
                            </section>
                            <section>
                                <p style={{ marginTop: '1em' }}>ESPECIFICIDADES DO(A) ALUNO(A)</p>
                                <textarea placeholder="Caso o aluno possua especificidades, descreva-as neste campo. Ex.: Intolerância à lactose."
                                    style={{ fontFamily: "Arial", width: '67vw', minWidth: "67vw", maxWidth: '67vw', maxHeight: '30vh', minHeight: "15vh" }}
                                    defaultValue={especificidades_aluno} value={especificidades_aluno} onChange={(e) => setEspecificidadesAluno(e.target.value)}
                                ></textarea>
                            </section>
                        </section>

                    </section>
                </section>
            </div>







            <div style={{ marginTop: '10vh' }}>
                <section>
                    <h1>EDITE OS DADOS DO RESPONSÁVEL</h1>
                    <div style={{
                        backgroundColor: "#8490ff", width: "94vw", height: "1px", marginTop: "2vh", marginBottom: "2vh"
                    }}></div>

                    <section className={styles.DadosGeraisResponsavel}>
                        <section className={styles.Dados1Responsavel}>
                            <section>
                                <p style={{ marginTop: '1em' }}>NOME COMPLETO<span style={{ color: "red" }}>*</span></p>
                                <input type="name" style={{ width: "45vw" }} placeholder="Digite o nome completo do responsável..." pattern="[A-Za-z ]+" title="Apenas letras e espaços são permitidos"
                                    defaultValue={nome_resp} value={nome_resp} onChange={(e) => setNomeResp(e.target.value)}></input>
                            </section>
                            <section style={{ display: "flex", justifyContent: "space-between" }}>
                                <section>
                                    <p style={{ marginTop: '1em' }}>CPF<span style={{ color: "red" }}>*</span></p>
                                    <input placeholder="Digite o CPF do responsável..." minLength="11" maxLength="11" type="text" style={{ width: "22vw" }}
                                        defaultValue={cpf_resp} value={cpf_resp} onChange={(e) => setCpfResp(e.target.value)}></input>
                                    <p style={{ marginTop: '1em' }}>DATA DE NASCIMENTO<span style={{ color: "red" }}>*</span></p>
                                    <input type="date" style={{ width: "22vw" }}
                                        defaultValue={formatarDataComHifen(data_nasc_resp)} onChange={(e) => setDataNascResp(e.target.value)}></input>
                                </section>
                                <section>
                                    <p style={{ marginTop: '1em' }}>NÚMERO DE IDENTIDADE<span style={{ color: "red" }}>*</span></p>
                                    <input placeholder="Digite o número do RG do responsável..." type="text" minLength="9" maxLength="9" style={{ width: "22vw" }}
                                        defaultValue={identidade_resp} value={identidade_resp} onChange={(e) => setIdentidadeResp(e.target.value)}></input>
                                    <p style={{ marginTop: '1em' }}>TELEFONE</p>
                                    <input placeholder="Digite o telefone do responsável..." type="text" minLength="11" maxLength="11" style={{ width: "22vw" }}
                                        defaultValue={contato_resp} value={contato_resp} onChange={(e) => setContatoResp(e.target.value)}></input>
                                </section>
                            </section>
                            <p style={{ marginTop: '1em' }}>EMAIL<span style={{ color: "red" }}>*</span></p>
                            <input placeholder="Digite o email do responsável..." type="email" style={{ width: "45vw" }}
                                defaultValue={email_resp} value={email_resp} onChange={(e) => setEmailResp(e.target.value)}></input>
                        </section>



                        <section className={styles.Dados2Responsavel}>

                            <p style={{ marginTop: '1em', display: 'flex', justifyContent: "space-between" }}>
                                <section>
                                    <p>CIDADE</p>
                                    <input placeholder="Nome da cidade..." type="name" style={{ width: "18vw" }}
                                        defaultValue={cidade} value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
                                </section>
                                <section>
                                    <p>BAIRRO</p>
                                    <input placeholder="Nome do bairro..." type="name" style={{ width: "26vw" }}
                                        defaultValue={bairro} value={bairro} onChange={(e) => setBairro(e.target.value)}></input>
                                </section>
                            </p>
                            <p style={{ marginTop: '1em', display: 'flex', justifyContent: "space-between" }}>
                                <section>
                                    <p>RUA</p>
                                    <input placeholder="Digite o nome da rua..." type="name" style={{ width: "24vw" }}
                                        defaultValue={rua} value={rua} onChange={(e) => setRua(e.target.value)}></input>
                                </section>
                                <section>
                                    <p>NÚMERO</p>
                                    <input placeholder="Nº da casa..." type="number" style={{ width: "8vw" }}
                                        defaultValue={numero} value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                                </section>
                                <section>
                                    <p>COMPLEMENTO</p>
                                    <input placeholder="Ex.: casa, apartamento, etc" type="text" style={{ width: "12vw" }}
                                        defaultValue={complemento} value={complemento} onChange={(e) => setComplemento(e.target.value)}></input>
                                </section>
                            </p>
                            <p style={{ marginTop: '1em' }}>COMPROVANTE DE RESIDÊNCIA</p>
                            <input type="file" style={{ width: "45vw" }} accept=".pdf"
                                value={comprov_resid_resp} onChange={(e) => setComprovResidResp(e.target.value)}></input>

                            <div style={{ display: "flex", marginTop: "1em", justifyContent: "right", alignItems: "end" }}>
                                <button className={styles.BotaoStyle} style={{ backgroundColor: "cyan" }} type='submit'>
                                    <Image style={{ height: "2em", width: "2em", marginRight: "1em" }} src={iconeEditar} alt="Adicionar" /> FINALIZAR EDIÇÃO
                                </button>
                            </div>
                        </section>
                    </section>
                </section>
            </div>




        </form>
    )
}