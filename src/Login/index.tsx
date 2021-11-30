import styles from './style.module.css'

// layout example https://www.mockplus.com/blog/post/login-page-examples

export default function LoginComponent() {
    return (
        <div className={styles.LoginContainer}>
            <div className={styles.ContainerDados}>
                Salve
            </div>
            <div className={styles.LoginHero}>
                <img src="img/img.png" alt="hero image"/>
            </div>
        </div>
    )
} 