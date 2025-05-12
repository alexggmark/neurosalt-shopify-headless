'use client';

import { useQuickShop } from "./QuickShopProvider";
import { ReactNode } from "react";

type QuickShopTriggerProps = {
  children: ReactNode;
  className?: string;
};

export default function QuickShopTrigger({ children, className = '' }: QuickShopTriggerProps) {
  const { openQuickShop } = useQuickShop();

  return (
    <div
      onClick={openQuickShop}
      className={`cursor-pointer inline-flex items-center ${className}`}
    >
      {children}
    </div>
  );
}