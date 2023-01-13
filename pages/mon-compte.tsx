import Header from "../components/Header";
import Profile from "../components/Profile";
import { Josefin_Sans } from '@next/font/google'
import Head from "next/head";

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300']
  });

export default function MyAccount(){
    return (<>
    <Head>
        <title>SIUMAIILOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={josefinSans.className}>
        <Header/>
        <Profile/>
        </main>
    </>)
}