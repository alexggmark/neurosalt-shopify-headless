import { CurrencyCode } from "@/lib/shopify/graphql-types";

type Props = {
  currency: CurrencyCode;
  amount: string;
}

export default function Price({ currency, amount }: Props) {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(parseFloat(amount));

  return (
    <div className="">
      {price}
    </div>
  );
}