import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import s from "../styles/App.module.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={s.container}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
