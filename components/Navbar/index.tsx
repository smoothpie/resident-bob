import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from '@/components/Link'
import s from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = 'unset';
      document.body.style.overflowY = 'unset';
    }
  }, [isBurgerMenuOpen]);

  useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [router.pathname])

  return (
    <nav className={s.container}>
      <Link href="/">
        <div className={s.logo}>
          <Image
            src="/bob-avatar.png"
            alt="resident bob avatar"
            width={40}
            height={40}
          />
          resident bob
        </div>
      </Link>
      <div className={s.links}>
        <Link href="/">Все программы</Link>
        <Link href="/about">О проекте</Link>
        <Link href="/newsletter">Рассылка</Link>
        <a href="https://www.buymeacoffee.com/karinakupp" target="_blank">Поддержать</a>
        {/* <Link href="/login">Логин</Link> */}
      </div>

      <div className={s.burgerMenuContainer}>
        <input type="checkbox" checked={isBurgerMenuOpen} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)} />
        
        <span></span>
        <span></span>
        <span></span>
        
        <ul className={s.burgerMenu}>
          <Link href="/">Все программы</Link>
          <Link href="/about">О проекте</Link>
          <Link href="/newsletter">Рассылка</Link>
          <a href="https://www.buymeacoffee.com/karinakupp" target="_blank">Поддержать</a>
        </ul>
      </div>
    </nav>
  )
}