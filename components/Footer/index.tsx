import styles from './Footer.module.css'

export default function Footer() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
      
      </div>
      <div className={styles.links}>
        {/* <a href="https://linkedin.com/karina-kupp">LinkedIn</a>
        <a href="https://instagram.com/karinakupp">Instagram</a> */}
        <a href="#">Пожелания и предложения :)</a>
      </div>
    </nav>
  )
}