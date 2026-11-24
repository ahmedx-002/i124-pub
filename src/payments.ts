export function charge(amountMinor: number, currency: string): string {
  return `charged ${amountMinor} ${currency}`;
}

export function refund(amountMinor: number, currency: string): string {
  return `refunded ${amountMinor} ${currency}`;
}

export function paymentIntentLabel(intent: { amountMinor: number; currency: string }): string {
  return `${intent.amountMinor} ${intent.currency}`;
}
