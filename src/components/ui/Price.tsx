import { CurrencyCode } from "@/lib/shopify/graphql-types";

type Props = {
  currency: CurrencyCode;
  amount: string;
  comparePrice?: string;
}

export default function Price({ currency, amount, comparePrice }: Props) {
  const min = parseFloat(amount);
  const max = comparePrice ? parseFloat(comparePrice) : 0;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  const isRange = max > min;

  return (
    <div className="text-sm font-medium text-gray-900">
      {isRange ? (
        <span>
          From {formatter.format(min)} – {formatter.format(max)}
        </span>
      ) : (
        <span>{formatter.format(min)}</span>
      )}
    </div>
  );
}