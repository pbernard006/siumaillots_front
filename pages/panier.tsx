import Head from "next/head"
import React from "react";
import { Josefin_Sans } from '@next/font/google'
import Header from "../components/Header";
import { JerseyBasket } from "../components/JerseyBasket";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JerseyFromBasket } from "../models/JerseyFromBasket";

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap'
});

// const elemPrefix = "Maillot";
// const getId = (index: number) => `${elemPrefix}${index}`;
// const getItems = () =>
//   Array(3)
//     .fill(0)
//     .map((_, ind) => ({ id: getId(ind) }));



    


export default function Panier(){
    // const [items] = React.useState(getItems);
    // const [jerseysList,setJerseysList] = useState<Jersey[]>([]);
    const [jerseys,setJerseys] = useState<JerseyFromBasket[]>([]);

    const [isLoading,setIsLoading] = useState(true);
    const token = Cookies.get('token');


    const getJerseys = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/current-basket", {
          method: "GET",
          headers: {
            "Authorization" : `Bearer ${token}`
        },
        });
        const dt = await response.json();

        setJerseys(dt.jerseys);  
        setIsLoading(false);
    };
    
    useEffect(() => {
    getJerseys();
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
            <Header/>
            {!isLoading && (
                <div className="flex justify-center my-20">
                    <div className="flex flex-col gap-4 w-5/12  text-center">
                    {jerseys.map((jersey) => (
                        <JerseyBasket
                            id={jersey.jerseyId}
                            size={jersey.size}
                            quantity={jersey.quantity}
                        />
                    ))}

                        {/* {basket.map((product)) => {
                            <JerseyBasket
                                title={id}
                                itemId={id}
                                key={id}
                                />
                            ))}
                        }); */}
                    </div>
                    <div className="ml-40">
                        <div className="flex m-5 justify-center m-auto font-bold">
                            <h4 className="uppercase ">Total :  </h4>
                            <h4 className="ml-3"> 90 €</h4>
                        </div>
                        <div className="mt-5">
                            <button className="bg-black m-5 w-full font-bold text-white rounded-lg  ">
                                Procéder au paiement
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
        </>
    )
}