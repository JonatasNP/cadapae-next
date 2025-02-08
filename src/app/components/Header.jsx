import Link from "next/link";
import Image from 'next/image';
import styles from '../page.module.css';
import ImgLogo from '../imgs/logo-apae.png';
import iconePerfil from '../icones/icone-perfil.png';
import iconeConfiguracao from '../icones/icone_configuracao.png';


export default function Header() {

        return (
            <div id={styles.barraSuperior}>
                <section className={styles.logoApae}>
                    <Link href="/home">
                        <Image src={ImgLogo} alt='Logo' style={{ width: "5em", height: '5em' }}></Image>
                    </Link>

                </section>

                <section className={styles.nomeApae}>
                    <p>CadAPAE</p>
                </section>

                <section className={styles.botaoUser}>
                    <button id={styles.buttonHome}>
                        <Link href="/perfil">
                            <Image src={iconePerfil} alt='Icone Perfil' style={{width: "4em", height: '5em'}}></Image>
                        </Link>
                    </button>
                </section>
            </div>
        )
}