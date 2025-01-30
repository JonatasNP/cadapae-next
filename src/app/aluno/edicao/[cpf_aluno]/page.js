'use client';

import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';
import ImgLogo from '../../../imgs/logo-apae.png'
import iconeConfiguracao from '../../../icones/icone_configuracao.png';

import EdicaoAluno from "@/app/components/EdicaoAluno";


import { useState, useEffect } from "react";

function PerfilAluno({ params }) {

    // const responsavel = await getResponsavelById(aluno.id_responsavel);

    const router = useRouter();

    const [aluno, setAluno] = useState();
    const [responsavel, setResponsavel] = useState();

    useEffect(() => {
        fetchAluno();
    }, [])



    const fetchAluno = async () => {
        const response = await fetch('/api/alunos/' + params.cpf_aluno);
        const data = await response.json();
        setAluno(data.aluno);
        setResponsavel(data.responsavel)
    }


    const changeAluno = async (a) => {
        fetch(`/api/alunos/${params.cpf_aluno}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(a)
        }).then((response) => {
            if (response.ok) {
                fetchAluno();
                window.alert(`Os dados do aluno ${aluno.nome} foram editados com sucesso.`);
                router.push("/home");
            } else {
                console.error('Falha ao editar dados do aluno:', response.text());
            }
        }).catch(e => console.log(e));
        
    }


    return (

        <div id={styles.Body} style={{ height: "100vh" }}>
            <div id={styles.barraSuperior}>
                <section className={styles.logoApae}>
                    <Link href="../../home">
                        <Image src={ImgLogo} alt='Logo' style={{ width: "5em", height: '5em' }}></Image>
                    </Link>
                </section>

                <section className={styles.nomeApae}>
                    <p>CadAPAE</p>
                </section>

                <section className={styles.botaoUser}>
                    <button id={styles.buttonHome}>
                        <Link href="../../perfil">
                            <Image src={iconeConfiguracao} alt='icone_configuracao' style={{ width: "5em", height: '5em' }}></Image>
                        </Link>
                    </button>
                </section>
            </div>



            {aluno && aluno.cpf ? (
                <div id={styles.conteudo}>
                    <EdicaoAluno dadosAluno={aluno} dadosResponsavel={responsavel} onChangeAluno={changeAluno} />
                </div>

            ) :
                <h2 className={styles.Carregamento} style={{ height: "85vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle" }}>
                    Aguarde um momento...
                </h2>
            }


        </div>
    );
}

export default PerfilAluno;