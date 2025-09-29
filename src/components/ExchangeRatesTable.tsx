import { NumberFormatter, Table, Text } from "@mantine/core";
import { CurrencyOptions } from "../const/currency-options";
import { useCurrencyConverterContext } from "../providers/CurrencyConverterProvider.Context";
import { useTranslation } from "react-i18next";

export function ExchangeRatesTable() {
  const { fromCurrency, fromAmount, rates, converter } =
    useCurrencyConverterContext();
  const { t } = useTranslation();
  return (
    <div className="mt-4 lg:mt-8">
      <Text size="xl" fw={600}>
        {t("exchangeRates")}
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="w-1/4">{t("currency")}</Table.Th>
            <Table.Th className="w-1/3">{t("rate")}</Table.Th>
            <Table.Th>{t("converted")}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {CurrencyOptions.filter((c) => c.value !== fromCurrency).map(
            (currency) => (
              <Table.Tr key={currency.value}>
                <Table.Td>
                  <div className="flex gap-2">
                    {currency.icon({ width: 20 })}
                    {currency.label}
                  </div>
                </Table.Td>
                <Table.Td>
                  <NumberFormatter
                    value={rates?.[currency.value]}
                    thousandSeparator=" "
                  />
                </Table.Td>
                <Table.Td>
                  <NumberFormatter
                    className="font-bold"
                    suffix={" " + currency.unit}
                    value={
                      converter?.convert(
                        fromAmount,
                        fromCurrency!,
                        currency.value
                      ) ?? 0
                    }
                    thousandSeparator=" "
                  />
                </Table.Td>
              </Table.Tr>
            )
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}
