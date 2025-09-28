// useCurrencyRates.ts
import { useQuery } from "@tanstack/react-query";

async function fetchCurrencyRates() {
  const res = await fetch(
    "https://api.currencyfreaks.com/latest?apikey=39f59931629349cab721ebdbb5bb04a0&symbols=USD,EUR,JPY,GBP,AUD,CAD,CHF,CNY,HKD,NZD,SGD,VND"
  );
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export function useGetRates() {
  return useQuery<{
    rates: Record<string, string>;
  }>({
    queryKey: ["currencyRates"],
    queryFn: fetchCurrencyRates,
  });
}
