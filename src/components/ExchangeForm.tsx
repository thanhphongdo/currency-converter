import { CurrencySelection } from "./CurrencySelection";
import { NumberInput } from "@mantine/core";
import { IconArrowsExchange } from "@tabler/icons-react";
import { useCurrencyConverterContext } from "../providers/CurrencyConverterProvider.Context";
import { useTranslation } from "react-i18next";

export function ExchangeForm() {
  const {
    fromAmount,
    toAmount,
    fromCurrency,
    toCurrency,
    changeFromAmount,
    changeToAmount,
    setFromCurrency,
    setToCurrency,
  } = useCurrencyConverterContext();

  const { t } = useTranslation();

  return (
    <div className="flex gap-4 justify-center items-center w-full">
      <div className="flex-1 flex flex-col gap-4">
        <CurrencySelection
          defaultValue={fromCurrency}
          onChange={(value) => {
            setFromCurrency(value);
          }}
        />
        <div className="w-full">
          <NumberInput
            placeholder={t("enterAmount")}
            className="w-full"
            thousandSeparator=" "
            value={fromAmount}
            onChange={(value) => {
              changeFromAmount(Number(value ?? 0));
            }}
          />
        </div>
      </div>
      <div>
        <IconArrowsExchange
          className="cursor-pointer"
          onClick={() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
            changeFromAmount(toAmount);
            changeToAmount(fromAmount);
          }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <CurrencySelection
          defaultValue={toCurrency}
          onChange={(value) => {
            setToCurrency(value);
          }}
        />
        <div className="w-full">
          <NumberInput
            placeholder={t("enterAmount")}
            className="w-full"
            thousandSeparator=" "
            value={toAmount}
            onChange={(value) => {
              changeToAmount(Number(value ?? 0));
            }}
          />
        </div>
      </div>
    </div>
  );
}
