import Image from 'next/image'
import Link from '@/components/Link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/bob-avatar.png"
            alt="resident bob avatar"
            width={40}
            height={40}
          />
          resident bob
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="/">Все программы</Link>
        <Link href="/about">О проекте</Link>
        <Link href="/newsletter">Рассылка</Link>
        <a href="https://www.buymeacoffee.com/karinakupp" target="_blank">Поддержать</a>
        {/* <Link href="/login">Логин</Link> */}
      </div>
    </nav>
  )
}