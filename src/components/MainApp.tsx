import { CurrencyConverterProvider } from "../providers/CurrencyConverterProvider";
import { CurrencyConverter } from "./CurrencyConverter";

export function MainApp() {
  return (
    <CurrencyConverterProvider>
      <CurrencyConverter />
    </CurrencyConverterProvider>
  );
}
