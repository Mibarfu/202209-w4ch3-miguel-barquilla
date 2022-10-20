import { createContext } from "react";

interface PhoneContextStructure {
  changeStateIsCalling: (isCalling: boolean) => void;
  isCalling: boolean;
}

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
