import Link from "next/link";

import Image from 'next/image';
import iconeUsuario from '../icones/perfil_do_usuario.png';
import styles from "../home/page.module.css";

export default function ListarAlunos({ alunos, nomeAlunoPesquisa, cids }) {


    function calcularIdade(dataNascimento) {
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
            {
                nomeAlunoPesquisa.length == 0 ? (
                    <p style={{ padding: "1.5em" }}>Digite o nome do aluno a ser pesquisado.</p>
                ) : (

                    (
                        (alunos.filter(a => a.nome.toUpperCase().includes(nomeAlunoPesquisa.toUpperCase())).length > 0) && (nomeAlunoPesquisa.length > 0)
                    ) ? (

                        alunos.map((a) => (
                            a.nome.toUpperCase().includes(nomeAlunoPesquisa.toUpperCase()) ? (
                            <div key={nomeAlunoPesquisa.matricula}>
                                <Link href={`../aluno/${alunos[alunos.indexOf(a)].cpf}`}><div className={styles.alunoPesquisado}>

                                    <p style={{ width: '100vw' }}>
                                        <Image src={iconeUsuario} style={{ marginRight: "1em", filter: "invert(50%)" }} /> {a.nome.toUpperCase()}
                                    </p>
                                    
                                    <p style={{ fontWeight: "bold", width: "20vw", justifyContent: "center" }}>{(calcularIdade(a.data_nascimento) > 0) ? calcularIdade(a.data_nascimento) : 0} anos</p>
                                    <p style={{ color: 'red', fontWeight: "bold", width: "20vw", justifyContent: "center" }}>
                                        {0} pendências
                                    </p>
                                    <p style={{ width: '20vw', justifyContent: "center" }}>
                                        {
                                            cids ? (
                                                cids.map(c => <span className={styles.Cids}>{c.codigo}</span>)
                                            ) : ("")
                                        }
                                    </p>

                                </div></Link>
                            </div>
                            ) : ("")
                        ))) : (
                        <p style={{ padding: "1.5em" }}>Nenhum aluno com esse nome foi encontrado no sistema.</p>
                    )
                )
            }
        </div>
    )
}