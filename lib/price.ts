export function getPercentage(subTotal: number, total: number): string {
  return ((10 * subTotal) / total).toFixed(0);
}

export function parsePrice(price: number, divided: boolean = false, quantity: number = 0): string {
  if (divided && quantity == 0) {
    return (price / 100).toFixed(2);
  } else if (divided && quantity != 0) {
    return ((price / 100) / quantity).toFixed(2);
  }

  return price.toFixed(2);
}