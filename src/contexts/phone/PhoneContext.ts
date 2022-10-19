import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumbers: number;
  changePhoneNumbers: (number: number) => void;
  isCalling: boolean;
}

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
