import { Currency } from './currency';

export interface Conversion {
  id: number,
  date: Date,
  amount: number,
  result: number,
  fromCurrency: Currency,
  fromCurrencyIndex: number,
  toCurrency: Currency,
  toCurrencyIndex: number
}