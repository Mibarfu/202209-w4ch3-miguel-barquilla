import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumbers, setPhoneNumbers] = useState(0);

  const [isCalling, setIsCalling] = useState<boolean>(false);

  setIsCalling(false);

  const changePhoneNumbers = (number: number) => {
    setPhoneNumbers(number);
  };

  return (
    <PhoneContext.Provider
      value={{ phoneNumbers, changePhoneNumbers, isCalling }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
