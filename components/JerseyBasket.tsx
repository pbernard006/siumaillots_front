import React from "react";
import Image from 'next/image'
import Link from "next/link";

export function JerseyBasket({ title, itemId }: { title: string; itemId: string }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="card border-2 border-black mx-2.5 rounded-lg flex"
    >
      <div className=" m-5 justify-start w-1/5	">
        <Link href={'/maillot'}>
            <Image
            src="/images/maillots/maillot.png"
            alt="Maillot"
            width={100}
            height={100}
            />
        </Link>
      </div>
      <hr className="my-auto mr-10 w-px h-3/4 border" />
      <div className="w-4/5 flex flex-col items-start justify-around">
        <Link href={'/maillot'}>
          <h5 className="font-bold">Maillot - Equipe de France Domicile Stadium</h5>
        </Link>
        <div className="rounded-lg p-px">
          30€
        </div>
        <select className="border-solid border-2 border-black rounded-lg w-1/5" name="taille" id="taille">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m" selected>M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
        </select>
        <select className="border-solid border-2 border-black rounded-lg w-1/5 mt-3" name="quantite" id="quantite">
            <option value="1" selected>1</option>
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
      </div>
    </div>
  );
}