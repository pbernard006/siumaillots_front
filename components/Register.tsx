import InputLogin from "./InputLogin";
import { UserContext } from "../contexts/UserContext";
import Router from "next/router";
import { useContext, useState } from "react";

export default function Register() {
  const { id, setId, token, setToken } = useContext(UserContext);
  const [loginValue, setLoginValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);

  const register = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ) => {
    const credentials = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      addresses: [],
      orders: [],
    };

    const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    console.log(result);
    console.log(response.status);

    if (response.status == 201) {
      // Connexion
      const loginCredentials = {
        username: email,
        password: password,
      };

      const loginResponse = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + "/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginCredentials),
        }
      );
      const loginResult = await loginResponse.json();

      if (loginResponse.status == 200) {
        console.log(loginResult);
        setId("2");
        setToken(loginResult.token);
        setError(false);

        Router.push("/");
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="containter mx-auto">
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
        <span className="uppercase">Prénom</span>
        <div className="border-input mb-4">
          <InputLogin
            type="text"
            setValue={setFirstNameValue}
            setError={setError}
          />
        </div>
        <span className="uppercase">Nom de famille</span>
        <div className="border-input mb-4">
          <InputLogin
            type="text"
            setValue={setLastNameValue}
            setError={setError}
          />
        </div>
        <span className="uppercase">Mot de passe</span>
        <div className="border-input mb-4">
          <InputLogin
            type="password"
            setValue={setPasswordValue}
            setError={setError}
          />
        </div>
        <button
          className="rounded-none uppercase bg-black text-white w-full px-2 py-2 mt-4 font-bold"
          onClick={() =>
            register(loginValue, firstNameValue, lastNameValue, passwordValue)
          }
        >
          Rejoignez Siumaillots
        </button>
      </div>
    </>
  );
}
