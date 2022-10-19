import PhoneContext from "./PhoneContext";
import { useState } from "react";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumbers, setPhoneNumbers] = useState(0);

  const changePhoneNumbers = (number: number) => {
    setPhoneNumbers(number);
  };

  return (
    <PhoneContext.Provider value={{ phoneNumbers, changePhoneNumbers }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
