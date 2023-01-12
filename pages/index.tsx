import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import "@fortawesome/fontawesome-free/css/all.min.css";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300']
});

export default function Home() {
  return (
    <>
      <Head>
        <title>SIUMAIILOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={josefinSans.className}>
        <Header/>
      </main>
    </>
  )
}
