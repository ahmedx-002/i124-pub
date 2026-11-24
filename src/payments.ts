export function charge(amountMinor: number, currency: string): string {
  return `charged ${amountMinor} ${currency}`;
}

export function refund(amountMinor: number, currency: string): string {
  return `refunded ${amountMinor} ${currency}`;
}
