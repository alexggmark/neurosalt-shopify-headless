'use client';

import { CartProvider } from "../cart/CartProvider"
import CartDrawer from "../cart/CartDrawer"
import { QuickShopProvider } from "../quick-shop/QuickShopProvider";
import QuickShopDrawer from "../quick-shop/QuickShopDrawer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QuickShopProvider>
      <CartProvider>
        {children}
        <CartDrawer />
        <QuickShopDrawer />
      </CartProvider>
    </QuickShopProvider>
  );
}