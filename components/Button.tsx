import { UserContext } from "../contexts/UserContext";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { User } from "../models/User";
import Cookies from "js-cookie";

export default function Button({
  valueChanged,
  setIsLoading,
}: {
  valueChanged: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const { user, setUser, userEdit, setUserEdit } = useContext(UserContext);

  const saveUser = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + `/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userEdit),
      }
    );
    const result = await response.json();
    if (response.status == 200) {
      setIsLoading(true);
    }
  };

  return (
    <>
      <div
        className={`${
          valueChanged ? "bg-black" : "bg-slate-300"
        }  text-center text-white py-2 text-xl mt-8`}
      >
        <button className="rounded-none" onClick={saveUser}>
          Enregistrer
        </button>
      </div>
    </>
  );
}
