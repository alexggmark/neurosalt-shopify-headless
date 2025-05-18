import Image from "next/image";
import QuickShopTrigger from "../quick-shop/QuickShopTrigger";
import CartTrigger from "../cart/CartTrigger";
import Link from "next/link";

export default function Header() {
  return (
    <div className="page-width">
      <div className="py-6 px-2 flex justify-between w-full">
        <div className="w-96">
          <Link href="/">
            <Image
              aria-hidden
              src="/images/logo.svg"
              alt="NeuroSalt"
              width={158}
              height={42}
            />
          </Link>
        </div>

        <ul className="list-none flex flex-row justify-center gap-8 grow font-medium">
          <Link href="/"><li className="link-underline">Shop</li></Link>
          <Link href="/"><li className="link-underline">Collections</li></Link>
          <Link href="/"><li className="link-underline">About Us</li></Link>
          <Link href="/"><li className="link-underline">Contact</li></Link>
        </ul>

        <span className="flex flex-row gap-5 w-96 justify-end">
          <QuickShopTrigger>
            <Image src="/images/icon-search.svg" width={24} height={24} alt="test" className="hover:scale-110 transition-transform duration-75" />
          </QuickShopTrigger>
          <CartTrigger>
            <Image src="/images/icon-cart.svg" width={24} height={24} alt="test" className="hover:scale-110 transition-transform duration-75" />
          </CartTrigger>
        </span>
      </div>
    </div>
  );
}
