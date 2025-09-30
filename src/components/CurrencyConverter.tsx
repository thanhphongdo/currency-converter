import { useCurrencyConverterContext } from "../providers/CurrencyConverterProvider.Context";
import { ExchangeForm } from "./ExchangeForm";
import { ExchangeRatesTable } from "./ExchangeRatesTable";

export function CurrencyConverter() {
  const { rates } = useCurrencyConverterContext();
  return (
    <div className="flex justify-center items-center mt-4 lg:mt-16">
      <div className="flex flex-col gap-4">
        {!!rates && (
          <>
            <ExchangeForm />
            <ExchangeRatesTable />
          </>
        )}
      </div>
    </div>
  );
}
