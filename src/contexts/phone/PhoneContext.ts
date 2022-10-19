import { createContext } from "react";

interface phoneContextStructure {
  phoneNumbers: number;
  changePhoneNumbers: (number: number) => void;
}

const PhoneContext = createContext<phoneContextStructure | null>(null);

export default PhoneContext;
