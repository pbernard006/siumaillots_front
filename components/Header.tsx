import Link from "next/link";
import { useState } from "react";
import InputSearch from "./InputSearch";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <>
      <div className="text-xl">
        <div className="container mx-auto flex items-start text-center py-8">
          <div className="w-1/12">
            <Link href={"/"}>
              <span>logo</span>
            </Link>
          </div>
          <div className="w-9/12 flex items-start">
            <div className="w-2/12 px-2 py-2">
              <Link href={"/clubs"}>
                <span className="hover-underline-animation">Club</span>
              </Link>
            </div>
            <div className="w-3/12 px-2 py-2">
              <Link href={"/equipes-nationales"}>
                <span className="hover-underline-animation">
                  Equipe nationale
                </span>
              </Link>
            </div>
            <div className="w-7/12 text-start border-input">
              <InputSearch />
            </div>
          </div>
          <div className="w-2/12 flex items-start text-right">
            <Link href={"/mon-compte"}>
              <i className="  far fa-user text-2xl px-2 py-2"></i>
            </Link>
            <Link href={"/favorites"}>
              <i className="far fa-heart text-2xl px-2 py-2"></i>
            </Link>
            <i className="fas fa-shopping-bag text-2xl px-2 py-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}
