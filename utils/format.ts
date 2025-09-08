export const formatCurrency = (value: number, locale?: string, currency: string = 'USD') => {
  return value.toLocaleString(locale, { style: 'currency', currency });
};


