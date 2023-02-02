import Head from 'next/head'
import React from 'react'
import { Josefin_Sans } from '@next/font/google'
import Header from '../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import Image from 'next/image'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
})

export default function CommandeEffectuee() {
  const router = useRouter()
  const { asPath } = useRouter()
  let sessionId = asPath.split('session_id=')[1]
  const validationCommand = async () => {
    const session = {
      stripeCheckout: sessionId,
    }
    if (sessionId) {
      const token = Cookies.get('token')
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + '/validation-command',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(session),
        },
      )
      const result = await response.json()
    } else {
      router.push('/')
    }
  }

  const playSiuuu = () => {
    var audio = new Audio('/sounds/gracias_siuuu.mp3')
    audio.play()
  }

  useEffect(() => {
    validationCommand()
  }, [])

  return (
    <>
      <Head>
        <title>SIUMAIILOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={josefinSans.className}>
        <div id="emitter"></div>
        <Header />
        <div className="text-xl flex justify-center font-bold text-center my-14">
          <h2>
            Votre commande a bien été effectuée !<br />
            SIU MAILLOT vous remercie de votre achat !<br />
            Un email de confirmation vous a été envoyé
          </h2>
        </div>
        <div className="container-siuuu">
          <button onClick={playSiuuu}>Célébrer la commande !</button>
          <Image
            src="/images/siuuu/ronaldo_siuuu.gif"
            alt="Ronaldo making SIUUU"
            width={700}
            height={200}
            priority
          />
        </div>
        <Link href={'/'}>
          <button className="flex mx-auto bg-black text-white font-bold justify-center rounded-lg w-1/5">
            Retour à l'accueil
          </button>
        </Link>
      </main>
    </>
  )
}
