export const formatCurrency = (amount: number): string =>
  `$${amount
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
