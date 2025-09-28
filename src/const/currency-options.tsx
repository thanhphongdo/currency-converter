import * as Flags from "country-flag-icons/react/3x2";

export const CurrencyOptions = [
  {
    value: "USD",
    label: "USD",
    icon: Flags.US, // United States
    unit: "$",
  },
  {
    value: "EUR",
    label: "EUR",
    icon: Flags.EU, // European Union
    unit: "€",
  },
  {
    value: "JPY",
    label: "JPY",
    icon: Flags.JP, // Japan
    unit: "¥",
  },
  {
    value: "GBP",
    label: "GBP",
    icon: Flags.GB, // United Kingdom
    unit: "£",
  },
  {
    value: "AUD",
    label: "AUD",
    icon: Flags.AU, // Australia
    unit: "$",
  },
  {
    value: "CAD",
    label: "CAD",
    icon: Flags.CA, // Canada
    unit: "$",
  },
  {
    value: "CHF",
    label: "CHF",
    icon: Flags.CH, // Switzerland
    unit: "CHF",
  },
  {
    value: "CNY",
    label: "CNY",
    icon: Flags.CN, // China
    unit: "¥",
  },
  {
    value: "HKD",
    label: "HKD",
    icon: Flags.HK, // Hong Kong
    unit: "$",
  },
  {
    value: "NZD",
    label: "NZD",
    icon: Flags.NZ, // New Zealand
    unit: "$",
  },
  {
    value: "SGD",
    label: "SGD",
    icon: Flags.SG, // Singapore
    unit: "$",
  },
  {
    value: "VND",
    label: "VND",
    icon: Flags.VN, // Vietnam
    unit: "₫",
  },
].sort((a, b) => a.label.localeCompare(b.label));
