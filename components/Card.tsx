import React from "react";
import Image from 'next/image'
import Link from "next/link";

export function Card({ title, itemId }: { title: string; itemId: string }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="card border-2 border-black w-52 mx-2.5 rounded-lg"
    >
      <Link href={'/maillot'}>
        <div className=" h-44 flex justify-center items-center">
          <Image
          src="/images/maillots/maillot.png"
          alt="Maillot"
          width={100}
          height={100}
          />
        </div>
      </Link>
      <hr className="w-1/2 m-auto mb-2"/>
      <div>{title}</div>
      <div className="rounded-lg p-px m-1 flex items-center justify-between">
        <Image
        src="/images/maillots/favori.png"
        alt="Maillot"
        width={25}
        height={2}
        className="opacity-25 hover:opacity-100"
        />
        30€
      </div>
    </div>
  );
}