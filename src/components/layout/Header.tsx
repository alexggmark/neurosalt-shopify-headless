import Image from "next/image";
import QuickShopTrigger from "../quick-shop/QuickShopTrigger";
import CartTrigger from "../cart/CartTrigger";

export default function Header() {
  return (
    <div className="page-width">
      <div className="py-6 px-2 flex justify-between w-full">
        <div className="w-96">
          <Image
            aria-hidden
            src="/images/logo.svg"
            alt="NeuroSalt"
            width={158}
            height={42}
          />
        </div>

        <ul className="list-none flex flex-row justify-center gap-8 grow font-medium">
          <li>Home</li>
          <li>Shop</li>
          <li>Collections</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <span className="flex flex-row gap-5 w-96 justify-end">
          <QuickShopTrigger>
            <Image src="/images/icon-search.svg" width={24} height={24} alt="test" />
          </QuickShopTrigger>
          <CartTrigger>
            <Image src="/images/icon-cart.svg" width={24} height={24} alt="test" />
          </CartTrigger>
        </span>
      </div>
    </div>
  );
}
