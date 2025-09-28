import { PropsWithChildren } from "react";
import { CurrencyConverterContext } from "./CurrencyConverterProvider.Context";
import { useConverter } from "../hooks/use-converter";

export const CurrencyConverterProvider = ({ children }: PropsWithChildren) => {
  const converter = useConverter();

  return (
    <CurrencyConverterContext.Provider value={{ ...converter }}>
      {children}
    </CurrencyConverterContext.Provider>
  );
};
