import { formatCurrency } from "@/utills/helper";

interface AmountProps {
  amount: number;
}
export default function Amount({ amount }: AmountProps) {
  return <>${formatCurrency(amount)}</>;
}
