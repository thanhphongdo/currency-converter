export class CurrencyConverter {
  private base: string = "USD";
  private rates: Record<string, number | string> = {};
  constructor(rate: Record<string, number | string>) {
    this.rates = rate;
  }

  convert(amount: number, from: string, to: string, roundNumber = 5): number {
    if (!this.rates[from] || !this.rates[to]) {
      throw new Error(`Missing rate for ${from} or ${to}`);
    }

    const amountInBase = amount / Number(this.rates[from]);
    return (
      Math.round(
        amountInBase * Number(this.rates[to]) * Math.pow(10, roundNumber)
      ) / Math.pow(10, roundNumber)
    );
  }
}
