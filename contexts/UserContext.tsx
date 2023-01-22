import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface UserContextProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({
  id: "",
  setId: () => {},
  token: "",
  setToken: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ id, setId, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
