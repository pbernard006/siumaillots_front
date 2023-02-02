import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { AddressModel } from "../models/AddressModel";
import { User } from "../models/User";

interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  userEdit: User;
  setUserEdit: Dispatch<SetStateAction<User>>;
  address: AddressModel;
  setAddress: Dispatch<SetStateAction<AddressModel>>;
  addressEdit: AddressModel;
  setAddressEdit: Dispatch<SetStateAction<AddressModel>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  user: new User(),
  setUser: () => {},
  userEdit: new User(),
  setUserEdit: () => {},

  address: new AddressModel(),
  setAddress: () => {},
  addressEdit: new AddressModel(),
  setAddressEdit: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState(new User());
  const [userEdit, setUserEdit] = useState(new User());
  const [address, setAddress] = useState(new AddressModel());
  const [addressEdit, setAddressEdit] = useState(new AddressModel());

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userEdit,
        setUserEdit,
        address,
        setAddress,
        addressEdit,
        setAddressEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
