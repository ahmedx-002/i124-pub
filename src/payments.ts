export function charge(amountMinor: number, currency: string): string {
  return `charged ${amountMinor} ${currency}`;
}
