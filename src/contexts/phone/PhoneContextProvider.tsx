import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [isCalling, setIsCalling] = useState(false);

  const changeStateIsCalling = (state: boolean) => {
    setIsCalling(state);
  };

  return (
    <PhoneContext.Provider value={{ changeStateIsCalling, isCalling }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
