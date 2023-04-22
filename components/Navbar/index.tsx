import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <a href="/">
        <div className={styles.logo}>
          Karina Kupp [Kupryianovich]
        </div>
      </a>
      <div className={styles.links}>
        <a href="/about">About</a>
        {/* <a href="/dump">Brain dump</a> */}
        <a href="/projects">Projects // Dev</a>
        {/* <a href="/music">Music</a>
        <a href="/writing">Writing</a> */}
        {/* <a href="/favorites">Favorites</a>
        <a href="/misc">Misc</a> */}
      </div>
    </nav>
  )
}