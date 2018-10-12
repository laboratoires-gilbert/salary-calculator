import { ceil } from 'lodash-es/math'

export default function formatCurrency([amount, symbol]: [number, string]) {
  return `${ceil(amount, 2)} ${symbol}`
}
