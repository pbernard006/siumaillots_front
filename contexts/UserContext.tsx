import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { User } from "../models/User";

interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  userEdit: User;
  setUserEdit: Dispatch<SetStateAction<User>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  user: new User(),
  setUser: () => {},
  userEdit: new User(),
  setUserEdit: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState(new User());
  const [userEdit, setUserEdit] = useState(new User());

  return (
    <UserContext.Provider value={{ user, setUser, userEdit, setUserEdit }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
