'use client';

import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import ImageAdd from '../icones/icone-adicionar.png';
import ImgLogo from '../imgs/logo-apae.png';


import iconeUsuario from '../icones/perfil_do_usuario.png';
import iconeHome from '../icones/icone_home.png';
import iconeAluno from '../icones/icone_aluno.png';
import iconeRelatorio from '../icones/icone_relatorio.png';
import iconePagamentos from '../icones/icone_pagamentos.png';
import iconeConfiguracao from '../icones/icone_configuracao.png';
import iconeSair from '../icones/icone_sair.png';
import iconePesquisar from '../icones/icone-pesquisa.png';

import { useEffect, useState } from "react";


/*import { getAlunosByPesquisa } from "@/app/lib/pesquisa_alunos";*/

import ListarAlunos from "../components/ListarAlunos";


import Header from "../components/Header";



function Home() {
/*
    let alunos = [
        { nome: "Ana Beatriz Alves Ribeiro da Silva", idade: 73, cid: "Autismo", pendencias: 2 },
        { nome: "Augusto Francisco Marques da Silva", idade: 59, cid: "-----", pendencias: 5, matricula: 2042024 },
        { nome: "Jônatas Nicolau Pereira da Cunha", idade: 94, cid: "-----", pendencias: 3 },
        { nome: "Wendel da Silva Martins", idade: 65, cid: "Retardo mental não especificado", pendencias: 3 }
    ];*/
    

    const [aluno, SetAluno] = useState("");


    



    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        fetchAlunos();
    }, [])

    const fetchAlunos = async () => {
        const response = await fetch('../api/alunos');
        const dados = await response.json();
        setAlunos(dados);
    }




    return (
        <div style={{ height: "100vh" }}>
            <Header/>



            <div id={styles.conteudo}>



                <section className={styles.AlunosEncontrados}>

                    <section className={styles.ExibicaoAlunos}>
                        <input className={styles.BarraPesquisa} placeholder='Insira o nome completo do aluno' value={aluno} onChange={e => SetAluno(e.target.value)} />

                        <ListarAlunos alunos={alunos} nomeAlunoPesquisa={aluno} />


                        






                    </section>

                    <section style={{ marginLeft: '1em' }}>


                        <section style={{ textAlign: "right", marginBottom: "2vh" }}>
                            <Link href="../aluno/registro">
                                <button className={styles.BotaoRegistrar}>
                                    <Image src={ImageAdd} alt="Adicionar" /> REGISTRAR UM NOVO ALUNO
                                </button>
                            </Link>
                        </section>

                        <section className={styles.FiltrosPesquisa}>
                            <div className={styles.FiltroIdade}>
                                <h3 style={{ color: '#6079d0' }}>Filtrar por faixa etária</h3>
                                <select>
                                    <option disabled selected>Selecione a faixa etária</option>
                                    <option>Abaixo de 4 anos</option>
                                    <option>De 5 a 7 anos</option>
                                    <option>De 8 a 10 anos</option>
                                    <option>De 11 a 13 anos</option>
                                    <option>De 14 a 16 anos</option>
                                    <option>De 17 a 20 anos</option>
                                    <option>20 anos ou mais</option>
                                </select>


                            </div>
                            <div className={styles.FiltroPagamento}>
                                <h3 style={{ color: '#6079d0' }}>Filtrar por quantidade de pendências</h3>

                                <select>
                                    <option disabled selected>Selecione q quantidadede pendências</option>
                                    <option>Nenhum pagamento pendente</option>
                                    <option>1 pagamento pendente</option>
                                    <option>2 pagamentos pendentes</option>
                                    <option>3 ou mais pagamentos pendentes</option>
                                </select>

                            </div>
                            <div className={styles.FiltroCID}>
                                <h3 style={{ color: '#6079d0' }}>Filtrar por CID</h3>
                                <p><input type="checkbox" style={{ marginTop: '1em' }} /> Nenhum CID</p>
                                <p><input type="checkbox" style={{ marginTop: '1em' }} /> CID não identificado</p>
                                <p><input type="checkbox" style={{ marginTop: '1em' }} /> CID F7* - Retardo mental não especificado</p>
                                <p><input type="checkbox" style={{ marginTop: '1em' }} /> CID F8* - Autismo</p>
                                <p><input type="checkbox" style={{ marginTop: '1em' }} /> Outros CIDs</p>





                            </div>
                        </section>


                    </section>


                </section>



            </div>
        </div>
    );
}




export default Home;







/*

{aluno !== "" ? (

    alunos.filter(a => a.nome.toUpperCase().includes(aluno.toUpperCase())).length > 0 ? (
        alunos.filter(a => a.nome.toUpperCase().includes(aluno.toUpperCase())).map(a => (
            <Link href={`../aluno/${alunos.indexOf(a)}`}><div className={styles.alunoPesquisado}>
                
                
                <p style={{ width: '100vw' }}>
                    <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> {a.nome}
                </p>
                <p style={{ width: '20vw', justifyContent: "center" }}>{a.cid}</p>
                <p style={{ fontWeight: "bold", width: "20vw", justifyContent: "center" }}>{a.idade} anos</p>
                <p style={{ color: 'red', fontWeight: "bold", width: "20vw", justifyContent: "center" }}>
                    {a.pendencias} pendências
                </p>
                
            </div></Link>
        ))
    ) : (
        <p style={{padding: "1.5em"}}>Nenhum aluno foi encontrado com esse nome.</p>
    )
    
    (await getAlunosByPesquisa(aluno)).map(a => (
        <Link href={`../aluno/${a.matricula_aluno}`}><div className={styles.alunoPesquisado}>
            
            <p style={{ width: '100vw' }}>
                <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> {a.nome}
            </p>
            <p style={{ width: '20vw', justifyContent: "center" }}>{a.cid}</p>
            <p style={{ fontWeight: "bold", width: "20vw", justifyContent: "center" }}>{a.idade} anos</p>
            <p style={{ color: 'red', fontWeight: "bold", width: "20vw", justifyContent: "center" }}>
                {a.pendencias} pendências
            </p>
            
        </div></Link>
    ))

    

    alunos.filter(a => a.nome.toUpperCase().includes(aluno.toUpperCase())).length > 0 ? (
        alunos.filter(a => a.nome.toUpperCase().includes(aluno.toUpperCase())).map(a => (
            <Link href={`../aluno/${alunos.indexOf(a)}`}><div className={styles.alunoPesquisado}>
                
                
                <p style={{ width: '100vw' }}>
                    <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> {a.nome}
                </p>
                <p style={{ width: '20vw', justifyContent: "center" }}>{a.cid}</p>
                <p style={{ fontWeight: "bold", width: "20vw", justifyContent: "center" }}>{a.idade} anos</p>
                <p style={{ color: 'red', fontWeight: "bold", width: "20vw", justifyContent: "center" }}>
                    {a.pendencias} pendências
                </p>
                
            </div></Link>
        ))
    ) : (
        <p style={{padding: "1.5em"}}>Nenhum aluno foi encontrado no sistema.</p>
    )


) : (
    <p style={{padding: "1.5em"}}>Por favor, digite o nome do aluno a ser encontrado.</p>
)
    
}
*/
