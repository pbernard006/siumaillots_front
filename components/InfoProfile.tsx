import HeaderProfile from "./HeaderProfile";
import Input from "./Input";
import ElementsProfile from "./ElementsProfile";
import Button from "./Button";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../models/User";
import { TypeValue } from "../models/TypeValue";
import { UserContext } from "../contexts/UserContext";

export default function InfoProfile({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [isValueChanged, setIsValueChanged] = useState(false);
  const [value, setValue] = useState(new TypeValue());
  const { user, setUser, userEdit, setUserEdit } = useContext(UserContext);

  useEffect(() => {
    updateUser(value);
  }, [value]);
  const updateUser = (typeValue: TypeValue) => {
    const type: string = typeValue.type ? typeValue.type : "";

    switch (type) {
      case "firstName": {
        const newUser: User = {
          firstName: typeValue.value,
          id: user.id,
          email: user.email,
          lastName: user.lastName,
          roles: user.roles,
          addresses: user.addresses,
          orders: user.orders,
        };

        setUserEdit(newUser);

        break;
      }
      case "lastName": {
        const newUser: User = {
          lastName: typeValue.value,
          firstName: user.firstName,
          id: user.id,
          email: user.email,
          roles: user.roles,
          addresses: user.addresses,
          orders: user.orders,
        };
        setUserEdit(newUser);

        break;
      }
      case "email": {
        const newUser: User = {
          email: typeValue.value,
          firstName: typeValue.value,
          id: user.id,
          lastName: user.lastName,
          roles: user.roles,
          addresses: user.addresses,
          orders: user.orders,
        };
        setUserEdit(newUser);

        break;
      }
    }
  };

  return (
    <div>
      <div className="mt-20">
        <div className="mx-auto w-10/12 my-10">
          <span>{"prénom :".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="firstName"
              data={user.firstName ? user.firstName : ""}
              setIsValueChanged={setIsValueChanged}
              setTypeValue={setValue}
            />
          </div>
          <span>{"nom :".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="lastName"
              data={user.lastName ? user.lastName : ""}
              setTypeValue={setValue}
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <span>{"adresse email :".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="email"
              data={user.email ? user.email : ""}
              setTypeValue={setValue}
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <Button valueChanged={isValueChanged} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
}
