import Link from "next/link";

import Image from 'next/image';
import iconeUsuario from '../icones/perfil_do_usuario.png';
import styles from "../home/page.module.css";

export default function ListarAlunos({ alunos, nomeAlunoPesquisa }) {


    function calcularIdade (dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
        const diaAtual = hoje.getDate();
        const diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }



    return (
        <div>
            {(
                (alunos.filter(a => a.nome_aluno.toUpperCase().includes(nomeAlunoPesquisa.toUpperCase())).length > 0) && (nomeAlunoPesquisa.length > 0)
            ) ? (
            
            alunos.map((a) => (
                <div key={nomeAlunoPesquisa.matricula_aluno}>
                        <Link href={`../aluno/${alunos.indexOf(a) + 1}`}><div className={styles.alunoPesquisado}>
                                        
                                        <p style={{ width: '100vw' }}>
                                            <Image src={iconeUsuario} style={{ marginRight: "1em" }} /> {a.nome_aluno}
                                        </p>
                                        <p style={{ width: '20vw', justifyContent: "center" }}>{}</p>
                                        <p style={{ fontWeight: "bold", width: "20vw", justifyContent: "center" }}>{calcularIdade(a.data_nasc_aluno)} anos</p>
                                        <p style={{ color: 'red', fontWeight: "bold", width: "20vw", justifyContent: "center" }}>
                                            {0} pendências
                                        </p>
                                        
                        </div></Link>
                </div>
            ))) : (
                <p style={{padding: "1.5em"}}>Nenhum aluno foi encontrado com esse nome.</p>
            )
            }
        </div>
    )
  }