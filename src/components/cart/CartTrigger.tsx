'use client';

import { useCart } from "./CartProvider";
import { ReactNode } from "react";

type CartTriggerProps = {
  children: ReactNode;
  className?: string;
};

export default function CartTrigger({ children, className = '' }: CartTriggerProps) {
  const { openCart } = useCart();

  return (
    <div
      onClick={openCart}
      className={`cursor-pointer inline-flex items-center ${className}`}
    >
      {children}
    </div>
  );
}