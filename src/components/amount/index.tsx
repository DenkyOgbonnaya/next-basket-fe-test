interface AmountProps {
  amount: number;
}
export default function Amount({ amount }: AmountProps) {
  return <>${amount}</>;
}
