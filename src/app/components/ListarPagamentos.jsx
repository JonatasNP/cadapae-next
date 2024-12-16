import Link from "next/link";

import Image from 'next/image';
import iconeUsuario from '../icones/perfil_do_usuario.png';
import styles from "../home/page.module.css";

export default function ListarAlunos({ alunos, nomeAlunoPesquisa }) {


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
        <></>
    )
}