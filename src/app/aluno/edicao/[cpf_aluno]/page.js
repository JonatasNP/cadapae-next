'use client';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';
import Header from "@/app/components/Header";
import EdicaoAluno from "@/app/components/EdicaoAluno";
import { useState, useEffect } from "react";

function PerfilAluno({ params }) {
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
                window.alert(`Os dados do aluno foram editados com sucesso.`);
                router.push("/home");
            } else {
                console.error('Falha ao editar dados do aluno:', response.text());
            }
        }).catch(e => console.log(e));
        
    }


    return (

        <div id={styles.Body} style={{ height: "100vh" }}>
            <Header />

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