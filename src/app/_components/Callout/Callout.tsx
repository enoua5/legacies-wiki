import styles from './Callout.module.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  }