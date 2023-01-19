import Head from "next/head"
import React from "react";
import { Josefin_Sans } from '@next/font/google'
import Header from "../components/Header";
import Image from "next/image";

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap'
});

export default function Favorites(){
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
            <div className="flex justify-center mt-20">
                <div className="mr-20">
                <Image
                src="/images/maillots/maillot.png"
                alt="Maillot"
                width={200}
                height={200}
                />
                </div>
                <div className="flex flex-col justify-around">
                    <div className="font-bold">Maillot - Equipe de France Domicile Stadium</div>
                    <div>30 €</div>
                    <select className="border-solid border-2 border-black rounded-lg" name="taille" id="taille">
                        <option value="">-- Veuillez choisir une taille --</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                    <select className="border-solid border-2 border-black rounded-lg" name="quantite" id="quantite">
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
                        <button className="bg-black text-white rounded-lg w-4/5	">
                            Ajouter au panier
                        </button>
                        <Image
                        src="/images/maillots/favori.png"
                        alt="Maillot"
                        width={25}
                        height={2}
                        className="opacity-25 hover:opacity-100"
                        />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}