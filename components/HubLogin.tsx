import { useState } from "react";
import { Node } from "typescript";
import Login from "./Login";
import Register from "./Register";

export default function HubLogin() {
  const [isConnection, setIsConnection] = useState(true);
  const displayComponent = (event: any) => {
    const actives = document.querySelectorAll(".active");

    [].forEach.call(actives, function (el: Element) {
      el.classList.remove("active");
    });

    //actives.classList.remove("active");
    if (event.target.id == "tabs-home-tab") {
      setIsConnection(false);
    } else {
      setIsConnection(true);
    }
    event.target.classList.add("active");
  };
  return (
    <div className="container mx-auto text-lg">
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation" onClick={displayComponent}>
          <span
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Créer un compte
          </span>
        </li>
        <li className="nav-item" role="presentation" onClick={displayComponent}>
          <span
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Connexion
          </span>
        </li>
      </ul>
      {isConnection ? <Login /> : <Register />}
    </div>
  );
}
