import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// structuring data like a pro, leading social media like a lame cave person.

export default function Music() {
  return (
    <>
      <SEO
        title="Karina Kupp"
        description="Check out my own music and my favorite artists and records. See me obsess over City and Colour, mewithoutYou, The Cure, Carissa's Wierd and other sad bands."
        image="/karina-kupp.jpg"
        url="https://karinakupp.com/music"
      />

      <Navbar />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Hi! Karina here.</h1>
          <p className={styles.description}>This is a fascinating aggregator of all my attempts not to waste my life.</p>
          <p className={styles.smallText}>// Sometimes, I look out the window and think that wasting one's life is impossible. It's here after all, it's yours, you're living it! Other times, I go on Twitter and every single person seems to be doing more than me. Then I get up and create a personal website. Then I think it's all stupid. //</p>
        </section>
      </main>

      <Footer />
    </>
  )
}
