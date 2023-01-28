import { redirect } from "next/dist/server/api-utils";
import { createContext, useContext, useState } from "react";
import InputLogin from "./InputLogin";
import { UserContext } from "../contexts/UserContext";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);

  const login = async (login: string, password: string) => {
    const credentials = {
      username: login,
      password: password,
    };

    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();

    if (response.status == 200) {
      // Get userId
      const userIdResponse = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + "/users/current",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${result.token}`,
          },
        }
      );
      const userIdResult = await userIdResponse.json();

      setError(false);

      Cookies.set("id", userIdResult.id);
      Cookies.set("token", result.token);
      Router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div>
          <span className={`${error ? "text-red-700" : "hidden"}`}>
            Une erreur est survenue, veuillez réessayer.
          </span>
        </div>
        <span className="uppercase">adresse email</span>
        <div className="border-input mb-4">
          <InputLogin
            type="text"
            setValue={setLoginValue}
            setError={setError}
          />
        </div>
        <span className="uppercase">mot de passe</span>
        <div className="border-input mb-4">
          <InputLogin
            type="password"
            setValue={setPasswordValue}
            setError={setError}
          />
        </div>
        <button
          className="rounded-none uppercase bg-black text-white w-full px-2 py-2 mt-4 font-bold"
          onClick={() => login(loginValue, passwordValue)}
        >
          se connecter
        </button>
      </div>
    </>
  );
}
