import Link from "next/link";
import { useState, useContext } from "react";
import InputSearch from "./InputSearch";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cookies from "js-cookie";

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const token = Cookies.get("token");

  return (
    <>
      <div className="text-xl">
        <div className="container mx-auto flex items-center text-center py-8">
          <div className="w-1/12">
            <Link href={"/"}>
              <img src="/images/siuuu/siuuu_maillots.png" alt="Logo Siuuu maillots" />
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
          <div className="w-2/12 flex justify-center">
            <Link href={`${!token ? "/connexion" : "/mon-compte"}`}>
              <i className="  far fa-user text-2xl px-2 py-2"></i>
            </Link>
            <Link href={"/panier"}>
              <i className="fas fa-shopping-bag text-2xl px-2 py-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
