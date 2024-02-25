import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import styles from './Newsletter.module.scss';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://assets.mailerlite.com/jsonp/842060/forms/114157712355362489/subscribe",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(this.response);
        if (data.success) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      }
    };
    xhr.send(
      `fields[email]=${encodeURIComponent(email)}&ml-submit=1&anticsrf=true`
    );
  }

  return (
    <>
      <SEO
        title="рассылка - resident bob"
        description="Мы с Бобом хотим уведомлять вас об обновлениях по иммиграционным программам и сайту. Возможно еще периодически рассказывать иммигрантские истории и полезности."
        image="/bob.png"
        url="https://resident-bob.vercel.app/newsletter"
      />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Рассылка</h1>
          <p>Йо! Мы с Бобом хотим уведомлять вас об обновлениях по иммиграционным программам и сайту. Возможно еще периодически рассказывать иммигрантские истории и полезности. Не чаще пары раз в месяц! Боб не очень разговорчив. Да и я тоже.</p>
          {!status && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input name="email" type="email" placeholder="Мыльное мыло" onChange={e => setEmail(e.target.value)} />
              <button>Чмяк</button>
            </form>
          )}
          {status === "success" && (
            <div className={styles.success}>
              <h2>Ууу класс</h2>
              <p>Ну все, скоро переедем</p>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
