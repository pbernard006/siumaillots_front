import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Jersey } from "../models/Jersey";

export function JerseyBasket({ id, size, quantity }: { id: string; size: string, quantity: string }) {

  const [jersey, setJersey] = useState<Jersey>();
  const [isLoading, setIsLoading] = useState(true);

  const getJersey = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/jerseys/" + id, {
      method: "GET",
    });
    const dt = await response.json();
    setJersey(dt);
    setIsLoading(false);
    console.log(jersey);
  };

  useEffect(() => {
      getJersey();
  }, []);


  return (
    <>
      {!isLoading &&  (
        <div
          role="button"
          tabIndex={0}
          className="card border-2 border-black mx-2.5 rounded-lg flex"
        >
          <div className=" m-5 justify-start w-1/5	">
            <Link href={'/maillot'}>
                <img
                src={process.env.NEXT_PUBLIC_API_HOST + jersey.filePath}
                alt="Maillot"
                width={100}
                height={100}
                />
            </Link>
          </div>
          <hr className="my-auto mr-10 w-px h-3/4 border" />

          <div className="w-4/5 flex flex-col items-start justify-around">
            <Link href={'/maillot'}>
              <h5 className="font-bold">{jersey?.name}</h5>
            </Link>
            <div className="rounded-lg p-px">
              {jersey?.price}
            </div>
            <h4>Taille: {size}</h4>
            <h4>Quantité: {quantity}</h4>
          </div>
        </div>
      )}
    </>
  );
}