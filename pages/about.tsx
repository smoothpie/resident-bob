import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import styles from '@/styles/About.module.scss'

const inter = Inter({ subsets: ['latin'] })

// structuring data like a pro, leading social media like a lame cave person.

export default function Home() {
  return (
    <>
      <SEO
        title="о проекте - resident bob"
        description="Боб хочет помочь вам переехать. Поэтому он показывает вам, куда и как вы можете податься, и что нужно сделать, чтобы смочь."
        image="/bob.png"
        url="https://resident-bob.vercel.app/about"
      />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1>О проекте</h1>
          <p className={styles.description}>Всем привет! Я Карина и я хочу переехать (правда пока что у меня нет денег потому что я маленький стартапер). Но еще я умею программировать (и два года назад создала классный проект <a href="https://www.chillsubs.com" target="_blank">Chill Subs</a>), поэтому я решила сделать сайтец, где каждый может примерно понять куда и как он может поехать, и что нужно сделать, чтобы смочь.</p>
          <p>Пока что я начала с переездов для самозанятых людей (потому что это то, что болит у меня), но я хочу разрастить это и дальше!</p>
          <p>У меня супер огромное количество идей, которые я буду постепенно тут воплощать, поэтому за прогрессом можете следить <a href="https://instagram.com/kupriyanovich" target="_blank">вот тут</a> (поздороваться тоже там можете)</p>
          <p><a href="https://karinakupp.com/ru" target="_blank">Кто я вообще такая</a></p>
        </section>
      </main>
    </>
  )
}
