import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import styles from './Newsletter.module.scss';

export default function Home() {
  return (
    <>
      <SEO
        title="Karina Kupp"
        description="Hello! I'm Karina. I write sad songs and build Chill Subs."
        image="/karina-kupp.jpg"
        url="https://karinakupp.com/about"
      />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Рассылка</h1>
          <p>Йо! Мы с Бобом хотим уведомлять вас об обновлениях по иммиграционным программам и сайту. Возможно еще периодически рассказывать иммигрантские истории и полезности. Не чаще пары раз в месяц! Боб не очень разговорчив. Да и я тоже.</p>
          {/* <p><strong>Кто я такая чтоб на меня подписываться:</strong> я Карина из Минска. Я полтора года жила в Польше, и с 2023-го тусуюсь в Грузии. Еще я каждый день уменьшаю страдания писателей с <a href="https://www.chillsubs.com" target="_blank">Chill Subs</a> и вообще люблю пилить всякие сайты. Как этот. <a href="https://karinakupp.com/ru" target="_blank">Подробнее тут</a></p> */}
          {/* <p><strong>Зачем</strong></p>
          <ul>
            <li><p>Для всех кому надоело слушать как сын маминой подруги учится в Амстердаме</p></li>
          </ul> */}
        </section>
      </main>
    </>
  )
}
