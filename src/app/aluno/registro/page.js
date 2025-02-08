'use client';
import styles from './page.module.css';

import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import RegistroAluno from '../../components/RegistroAluno';
import Header from '../../components/Header';


function Registrar_Aluno() {

  const [aluno, setAluno] = useState([]);
  const [cids, setCids] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchAluno()
  }, [])

  const fetchAluno = async () => {
    const response = await fetch('/api/alunos')
    if (response.ok) {
      const data = await response.json();
      setCids(data.cids)
    } else {
      console.error('Erro ao buscar os alunos', response.status, response.statusText);
    }

  }

  const addAluno = async (a) => {
    const response = await fetch('/api/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(a),
    })
    if (response.ok) {
      fetchAluno();
      window.alert(`O aluno foi registrado com sucesso.`);
      router.push("/home");

    } else { console.error('Falha ao adicionar aluno:', await response.text()); }
  }



  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div id={styles.conteudo}>
        <RegistroAluno onAddAluno={addAluno} cids={cids} />
      </div>
    </div>
  );
}

export default Registrar_Aluno;
