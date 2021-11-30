import type { NextPage } from 'next';
import Head from "next/head";
import Image from "next/image";
import LoginComponent from '../src/Login';

import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login page</title>
            </Head>

            <main className={styles.main}>
                <LoginComponent />
            </main>
        </div>
    )
}

export default Login;