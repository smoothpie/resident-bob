import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgramsBrowse from '@/components/ProgramsBrowse'
import SEO from '@/components/SEO'
import styles from '@/styles/Home.module.scss'

// const inter = Inter({ subsets: ['latin'] })

// should I have an "all" programs tab where it's all mixed up? and programs have type tags?
// and the title would be program name instead of country name

export default function Home() {
  return (
    <>
      <SEO
        title="redident bob"
        description="Список иммиграционных программ для самозанятых людей с удобным поиском по критериям. Визы и ВНЖ для цифровых кочевников и визы талантов."
        image="/bob.png"
        url="https://resident-bob.vercel.app/"
      />

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerText}>
            <h1>resident bob</h1>
            <p>Грузия это хорошо, но куда дальше то?</p>
          </div>
          <div className={styles.bob}>
            <Image
              src="/bob.png"
              alt="resident bob"
              width={120}
              height={120}
              unoptimized
            />
          </div>
        </section>

        <div className={styles.categories}>
          <div className={`${styles.category} ${styles.categoryActive}`}>
            👨🏻‍💻 &nbsp;Для номадов
          </div>
          <div className={styles.category}>
            👩‍🎨 &nbsp;Визы талантов
          </div>
          <div className={styles.category}>
            Остальное каминг сун...
          </div>
        </div>

        <ProgramsBrowse />
      </main>
    </>
  )
}
