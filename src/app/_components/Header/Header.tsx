
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <a className={styles.link} href="/">Home</a>
        </header>
    )
}