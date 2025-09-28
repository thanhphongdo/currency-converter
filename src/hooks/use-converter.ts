import { useEffect, useRef, useState } from "react";
import { CurrencyConverter } from "../helpers/currency-converter";
import { useGetRates } from "./use-get-rates";

export function useConverter() {
  const converter = useRef<CurrencyConverter>(null);

  const [fromCurrency, setFromCurrency] = useState<string | null>("USD");
  const [toCurrency, setToCurrency] = useState<string | null>("EUR");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const changeFromAmount = (value: number) => {
    setFromAmount(value);
    if (!converter.current) {
      return;
    }
    setToAmount(converter.current.convert(value, fromCurrency!, toCurrency!));
  };

  const changeToAmount = (value: number) => {
    setToAmount(value);
    if (!converter.current) {
      return;
    }
    setFromAmount(converter.current.convert(value, toCurrency!, fromCurrency!));
  };

  useEffect(() => {
    changeFromAmount(fromAmount);
  }, [toCurrency]);

  useEffect(() => {
    changeToAmount(toAmount);
  }, [fromCurrency]);

  const { data } = useGetRates();

  useEffect(() => {
    if (!data?.rates) {
      return;
    }
    converter.current = new CurrencyConverter(data?.rates!);
  }, [data]);

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    changeFromAmount,
    changeToAmount,
    converter: converter.current,
    rates: data?.rates,
  };
}
