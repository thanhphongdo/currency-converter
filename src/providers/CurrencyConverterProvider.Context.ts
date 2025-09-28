import { createContext, useContext } from "react";
import { useConverter } from "../hooks/use-converter";

export type ContextValue = ReturnType<typeof useConverter>;

export const CurrencyConverterContext = createContext<ContextValue | undefined>(
  undefined
);

export const useCurrencyConverterContext = () => {
  const context = useContext(CurrencyConverterContext);
  if (!context) {
    throw new Error(
      "useCurrencyConverterContext must be used within CurrencyConverterProvider"
    );
  }
  return context;
};
