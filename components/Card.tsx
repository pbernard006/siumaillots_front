import React from "react";
import Image from 'next/image'
import Link from "next/link";

export function Card({ id, title, price, srcImage }: { id: string; title: string; price: string; srcImage: string}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="card border-2 border-black w-52 mx-2.5 rounded-lg"
    >
      <h5>{id}</h5>
      <Link href={"/maillot?id=" + `${id}`}>
        <div className=" h-44 flex justify-center items-center">
          <img
          src={srcImage}
          alt="Maillot"
          width={100}
          height={100}
          />
        </div>
      </Link>
      <hr className="w-1/2 m-auto mb-2"/>
      <div>{title}</div>
      <div className="rounded-lg p-px m-1 flex items-center justify-between">
        {price}
      </div>
    </div>
  );
}