import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from 'next/image'

export function Card({ title, itemId }: { title: string; itemId: string }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      tabIndex={0}
      className="card border-2 border-black w-52 mx-2.5 rounded-lg"	
    >
      <div className=" h-44 flex justify-center items-center">
      <Image
      src="/images/maillots/maillot.png"
      alt="Maillot"
      width={100}
      height={100}
      />
      </div>
      <hr className="w-1/2 m-auto mb-2"/>
      <div>{title}</div>
      <div className="bg-white rounded-lg	p-px mb-1 mr-1	ml-40	">
        30€
      </div>
    </div>
  );
}