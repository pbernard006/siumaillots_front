import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Input from "./Input";
import Button from "./Button";
import { TypeValue } from "../models/TypeValue";
import { UserContext } from "../contexts/UserContext";
import { User } from "../models/User";
import { AddressModel } from "../models/AddressModel";
import Cookies from "js-cookie";
import { type } from "os";

export default function Address({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [isValueChanged, setIsValueChanged] = useState(false);
  const [typeValue, setTypeValue] = useState(new TypeValue());
  const {
    user,
    setUser,
    userEdit,
    setUserEdit,
    address,
    setAddress,
    addressEdit,
    setAddressEdit,
  } = useContext(UserContext);
  const [isFirstEdit, setIsFirstEdit] = useState(true);
  const [isDisplayAddressForm, setIsDisplayAddressForm] = useState(false);

  const id: string | undefined = Cookies.get("id");
  const token: string | undefined = Cookies.get("token");
  const displayAddressForm = () => {
    setIsDisplayAddressForm(true);
  };

  useEffect(() => {
    if (isFirstEdit) {
      setIsFirstEdit(false);
    }
    updateUser(typeValue);

    if (user.addresses && user.addresses.length > 0) {
      setIsDisplayAddressForm(true);
    }
  }, [typeValue]);

  const updateUser = (typeValue: TypeValue) => {
    const type: string = typeValue.type ? typeValue.type : "";
    switch (type) {
      case "name": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.name = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
      case "number": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.number = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
      case "zipCode": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.zipCode = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
      case "city": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.city = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
      case "country": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.country = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
      case "complement": {
        let newAddress: AddressModel = addressEdit
          ? addressEdit
          : new AddressModel();
        newAddress.complement = typeValue.value;
        setAddressEdit(newAddress);
        break;
      }
    }
  };

  if (!isDisplayAddressForm) {
    return (
      <>
        <div className="mt-20">
          <div className="mx-auto w-10/12 my-10">
            <div>
              <span className="uppercase">
                Aucune adresse enregistrée. C&apos; est le moment de
                l&apos;ajouter !
              </span>
            </div>
            <div onClick={displayAddressForm} className="bg-black text-center cursor-pointer text-white py-2 text-xl mt-8">
              <span>Ajouter mon adresse</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-20">
          <div className="mx-auto w-10/12 my-10">
            <span>{"numéro de rue : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="number"
                data={
                  user.addresses &&
                  user.addresses[0] &&
                  user.addresses[0].number
                    ? user.addresses[0].number
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <span>{"nom de rue : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="name"
                data={
                  user.addresses && user.addresses[0] && user.addresses[0].name
                    ? user.addresses[0].name
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <span>{"code postal : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="zipCode"
                data={
                  user.addresses &&
                  user.addresses[0] &&
                  user.addresses[0].zipCode
                    ? user.addresses[0].zipCode
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <span>{"ville : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="city"
                data={
                  user.addresses && user.addresses[0] && user.addresses[0].city
                    ? user.addresses[0].city
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <span>{"pays : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="country"
                data={
                  user.addresses &&
                  user.addresses[0] &&
                  user.addresses[0].country
                    ? user.addresses[0].country
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <span>{"complément d'adresse : ".toUpperCase()}</span>
            <div className="border-input mb-4">
              <Input
                type="complement"
                data={
                  user.addresses &&
                  user.addresses[0] &&
                  user.addresses[0].complement
                    ? user.addresses[0].complement
                    : ""
                }
                setIsValueChanged={setIsValueChanged}
                setTypeValue={setTypeValue}
              />
            </div>
            <Button
              valueChanged={isValueChanged}
              setIsLoading={setIsLoading}
              addressChanged={true}
              isNewAddress={
                userEdit.addresses && userEdit.addresses?.length > 0
                  ? false
                  : true
              }
            />
          </div>
        </div>
      </>
    );
  }
}
