import Head from "next/head";
import Image from "next/image";
import { Josefin_Sans } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HorizontalList from "../components/HorizontalList";
import ImagesHomepage from "../components/ImagesHomepage";
import { UserContext } from "../contexts/UserContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Carousel from "../components/Carousel";
import { useContext, useEffect, useState } from "react";
import { Jersey } from "../models/Jersey";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export default function Home() {
  const getUsers = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/users", {
      method: "GET",
    });
    const dt = await response.json();
  };


  const [bestSales, setBestSales] = useState<Jersey[]>([]);
  const [isBestSalesLoading, setIsBestSalesLoading] = useState(true);

  const getBestSales = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/best-sales", {
      method: "GET",
    });
    const dt = await response.json();
    setBestSales(dt);
    console.log(dt);
    setIsBestSalesLoading(false);
  };


  useEffect(() => {
    getUsers();
    getBestSales();
  }, []);

  return (
    <>
      <Head>
        <title>SIUMAIILOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={josefinSans.className}>
        <Header />
        <Carousel />
        {!isBestSalesLoading && (

          <HorizontalList title="Meilleures ventes" jerseys={bestSales}/>
          )}
        {/* <HorizontalList title="Notre sélection des plus beaux maillots de la saison" jerseys=''/> */}
        <ImagesHomepage />
      </main>
    </>
  );
}
