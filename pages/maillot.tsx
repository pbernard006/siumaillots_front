import Head from "next/head";
import React from "react";
import { Josefin_Sans } from "@next/font/google";
import Header from "../components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Jersey } from "../models/Jersey";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";
import Popup from 'reactjs-popup';

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export default function Maillot() {
  const [jersey, setJersey] = useState<Jersey>();
  const [isLoading, setIsLoading] = useState(true);

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");

  const { asPath } = useRouter();
  let jerseyId = asPath.split("id=")[1];

  const getJersey = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + "/jerseys/" + jerseyId,
      {
        method: "GET",
      }
    );
    const dt = await response.json();
    setJersey(dt);
    setIsLoading(false);
  };

  useEffect(() => {
    getJersey();
  }, []);

  const addToBasket = async () => {
    if (!size || !quantity) {
      alert('Veuillez saisir une taille une quantité');
    } else {
      const product = {
        jerseyId: jerseyId,
        size: size,
        quantity: quantity,
      };
      console.log(product);

      const token = Cookies.get("token");

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + "/basket/add/jersey",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        }
      );
      const result = await response.json();
    }
  };

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
        {!isLoading && (
          <div className="flex justify-center mt-20">
            <div className="mr-20">
              <img
                src={process.env.NEXT_PUBLIC_API_HOST + jersey.filePath}
                alt="Maillot"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-around">
              <div className="font-bold">{jersey?.name}</div>
              <div>{jersey?.price} €</div>
              <select
                onChange={(e) => setSize(e.target.value)}
                className="border-solid border-2 border-black rounded-lg"
                name="taille"
                id="taille"
              >
                <option value="">-- Veuillez choisir une taille --</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <select
                onChange={(e) => setQuantity(e.target.value)}
                className="border-solid border-2 border-black rounded-lg"
                name="quantite"
                id="quantite"
              >
                <option value="">-- Veuillez choisir une quantité --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div className="flex justify-between">
                <button
                  onClick={addToBasket}
                  className="bg-black text-white rounded-lg w-4/5"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
