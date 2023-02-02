import { UserContext } from "../contexts/UserContext";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { User } from "../models/User";
import Cookies from "js-cookie";
import { AddressModel } from "../models/AddressModel";

export default function Button({
  valueChanged,
  setIsLoading,
  addressChanged,
  isNewAddress,
}: {
  valueChanged: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  addressChanged: boolean;
  isNewAddress: boolean;
}) {
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const { user, setUser, userEdit, setUserEdit, addressEdit } =
    useContext(UserContext);

  const saveUser = async () => {
    if (addressChanged) {
      if (isNewAddress) {
        const newAddress: AddressModel = {
          number: addressEdit.number,
          name: addressEdit.name,
          zipCode: addressEdit.zipCode,
          city: addressEdit.city,
          country: addressEdit.country,
          complement: addressEdit.complement,
          isFavorite: true,
          user: `/users/${id}`,
        };

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_HOST + `/addresses`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newAddress),
          }
        );
        const result = await response.json();
        if (response.status == 200) {
          setIsLoading(true);
          setIsLoading(false);
        }
      } else {
        // put
        const newAddress: AddressModel = {
          number: addressEdit.number,
          name: addressEdit.name,
          zipCode: addressEdit.zipCode,
          city: addressEdit.city,
          country: addressEdit.country,
          complement: addressEdit.complement,
          isFavorite: true,
          user: `/users/${id}`,
        };

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_HOST + `/addresses/${addressEdit.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newAddress),
          }
        );

        const result = await response.json();
        if (response.status == 201) {
          setIsLoading(true);
        }
      }
    } else {
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
