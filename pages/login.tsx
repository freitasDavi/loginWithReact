import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";

import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login page</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.innerContainer}>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="senha" />
                </div>
            </main>
        </div>
    )
}

export default Login;